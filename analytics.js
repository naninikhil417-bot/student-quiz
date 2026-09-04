/**
 * StudySpark AI - Progress Analytics & Weak Topic Detection Engine
 * Analyzes student accuracy per topic and generates the personalized learning loop:
 * Learn -> Practice -> Quiz -> Analyze -> Improve -> Re-test
 */

import { StorageManager } from "./storage.js";
import { CURRICULUM } from "../data/curriculumData.js";

export class AnalyticsEngine {
  static getTopicMasteryList() {
    const state = StorageManager.getState();
    const stats = state.progress.topicStats || {};
    const list = [];

    // Map through all defined curriculum topics
    Object.keys(CURRICULUM.topics).forEach(topicId => {
      const topic = CURRICULUM.topics[topicId];
      const stat = stats[topicId] || { totalAnswered: 0, correctCount: 0, wrongCount: 0, accuracy: null };

      let status = "untested"; // 'strong', 'medium', 'weak', 'untested'
      let statusBadge = "⚪ Not Started";
      let statusColor = "#94a3b8";

      if (stat.totalAnswered > 0) {
        if (stat.accuracy >= 80) {
          status = "strong";
          statusBadge = "🟢 Strong (80%+)";
          statusColor = "#10b981";
        } else if (stat.accuracy >= 60) {
          status = "medium";
          statusBadge = "🟡 Average (60–79%)";
          statusColor = "#f59e0b";
        } else {
          status = "weak";
          statusBadge = "🔴 Needs Practice (<60%)";
          statusColor = "#ef4444";
        }
      }

      list.push({
        topicId: topic.id,
        title: topic.title,
        chapter: topic.chapter,
        classId: topic.classId,
        subjectId: topic.subjectId,
        totalAnswered: stat.totalAnswered,
        correctCount: stat.correctCount,
        accuracy: stat.accuracy !== null ? stat.accuracy : 0,
        hasData: stat.totalAnswered > 0,
        status: status,
        statusBadge: statusBadge,
        statusColor: statusColor
      });
    });

    return list;
  }

  static getWeakTopics() {
    const all = this.getTopicMasteryList();
    return all.filter(t => t.status === "weak" || (t.hasData && t.accuracy < 60));
  }

  static getRecommendedRecoveryPlan(topicId) {
    const topic = CURRICULUM.topics[topicId];
    if (!topic) return null;

    return {
      topicId: topic.id,
      title: topic.title,
      subjectId: topic.subjectId,
      classId: topic.classId,
      steps: [
        {
          stepNumber: 1,
          icon: "📖",
          title: "Review the Core Concept",
          desc: `Read the simplified explanation for ${topic.title} to refresh underlying principles.`,
          actionLabel: "Read Concept",
          actionView: "learn",
          param: topic.id
        },
        {
          stepNumber: 2,
          icon: "📐",
          title: "Memorize Important Formulas",
          desc: "Inspect symbol definitions, units, and when-to-use conditions.",
          actionLabel: "View Formulas",
          actionView: "formulas",
          param: topic.subjectId
        },
        {
          stepNumber: 3,
          icon: "📝",
          title: "Solve 5 Practice Questions",
          desc: "Work through step-by-step easy and medium difficulty problems.",
          actionLabel: "Practice Now",
          actionView: "practice",
          param: topic.id
        },
        {
          stepNumber: 4,
          icon: "🎯",
          title: "Take a 5-Question Re-Test Quiz",
          desc: "Verify your mastery and boost this topic's score to 🟢 Strong status!",
          actionLabel: "Take Mini Quiz",
          actionView: "quiz",
          param: topic.id
        }
      ]
    };
  }

  static getOverviewMetrics() {
    const state = StorageManager.getState();
    const attempts = state.progress.quizAttempts || [];
    const totalQuizzes = attempts.length;
    
    let totalScoreSum = 0;
    let totalQuestionsAnswered = state.progress.questionsSolvedCount || 0;

    attempts.forEach(a => {
      totalScoreSum += a.scorePercent || 0;
    });

    const averageScore = totalQuizzes > 0 ? Math.round(totalScoreSum / totalQuizzes) : 85;
    const streak = state.gamification.streak || 1;
    const xp = state.gamification.xp || 0;
    const level = state.gamification.level || 1;
    const levelTitle = state.gamification.levelTitle || "Beginner";
    const weakTopics = this.getWeakTopics();

    return {
      xp,
      level,
      levelTitle,
      streak,
      totalQuizzes,
      averageScore,
      totalQuestionsAnswered,
      weakTopicsCount: weakTopics.length,
      weakTopics: weakTopics
    };
  }
}
