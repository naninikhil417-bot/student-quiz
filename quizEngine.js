/**
 * StudySpark AI - Quiz Arena Engine
 * Handles full quiz lifecycle: Question generation, timers, answer tracking, grading, XP awards, and Weak Area feeding.
 */

import { QUESTION_BANK } from "../data/questionBank.js";
import { StorageManager } from "./storage.js";
import { awardStudentXP, triggerConfetti, sound } from "./gamification.js";

export class QuizEngine {
  constructor(config) {
    this.classId = parseInt(config.classId) || 9;
    this.subjectId = config.subjectId || "all";
    this.topicId = config.topicId || "all";
    this.difficulty = config.difficulty || "all";
    this.questionCount = parseInt(config.questionCount) || 5;
    
    this.questions = [];
    this.currentIndex = 0;
    this.userAnswers = {}; // { questionId: selectedAnswer }
    this.isCompleted = false;
    this.startTime = null;
    this.endTime = null;
    this.timerInterval = null;
    this.timeElapsedSeconds = 0;
    this.timeLimitSeconds = this.questionCount * 60; // 60s per question
    
    this.onTick = config.onTick || (() => {});
    this.onComplete = config.onComplete || (() => {});
  }

  init() {
    let pool = [...QUESTION_BANK];

    // Filter by class if specified
    if (this.classId && this.classId !== "all") {
      const classFiltered = pool.filter(q => q.classId === this.classId);
      if (classFiltered.length > 0) pool = classFiltered;
    }

    // Filter by subject if specified
    if (this.subjectId && this.subjectId !== "all") {
      const subjectFiltered = pool.filter(q => q.subjectId === this.subjectId);
      if (subjectFiltered.length > 0) pool = subjectFiltered;
    }

    // Filter by topic if specified
    if (this.topicId && this.topicId !== "all") {
      const topicFiltered = pool.filter(q => q.topicId === this.topicId);
      if (topicFiltered.length > 0) pool = topicFiltered;
    }

    // Filter by difficulty if specified
    if (this.difficulty && this.difficulty !== "all") {
      const diffFiltered = pool.filter(q => q.difficulty.toLowerCase() === this.difficulty.toLowerCase());
      if (diffFiltered.length > 0) pool = diffFiltered;
    }

    // Shuffle pool
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    // If pool is smaller than questionCount, duplicate/cycle
    this.questions = [];
    for (let i = 0; i < this.questionCount; i++) {
      this.questions.push(pool[i % pool.length]);
    }

    this.currentIndex = 0;
    this.userAnswers = {};
    this.isCompleted = false;
    this.timeElapsedSeconds = 0;
    this.startTime = Date.now();

    this.startTimer();
    return this.questions;
  }

  startTimer() {
    this.stopTimer();
    this.timerInterval = setInterval(() => {
      this.timeElapsedSeconds++;
      const remaining = Math.max(0, this.timeLimitSeconds - this.timeElapsedSeconds);
      this.onTick({
        elapsed: this.timeElapsedSeconds,
        remaining: remaining,
        formattedElapsed: this.formatTime(this.timeElapsedSeconds),
        formattedRemaining: this.formatTime(remaining)
      });

      if (remaining <= 0) {
        this.submitQuiz();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }

  getCurrentQuestion() {
    return this.questions[this.currentIndex];
  }

  selectAnswer(questionId, answer) {
    this.userAnswers[questionId] = answer;
    sound.playPop();
  }

  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      return true;
    }
    return false;
  }

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      return true;
    }
    return false;
  }

  goToQuestion(index) {
    if (index >= 0 && index < this.questions.length) {
      this.currentIndex = index;
      return true;
    }
    return false;
  }

  submitQuiz() {
    if (this.isCompleted) return this.results;
    this.stopTimer();
    this.isCompleted = true;
    this.endTime = Date.now();

    let correctCount = 0;
    let wrongCount = 0;
    const reviewList = [];

    this.questions.forEach((q, idx) => {
      const userAns = this.userAnswers[q.id] || null;
      const isCorrect = userAns !== null && userAns.toString().trim().toLowerCase() === q.correctAnswer.toString().trim().toLowerCase();

      if (isCorrect) correctCount++;
      else wrongCount++;

      // Update topic mastery in storage
      StorageManager.recordQuestionAttempt(q.topicId, isCorrect);

      reviewList.push({
        index: idx + 1,
        question: q.question,
        topicName: q.topicName,
        difficulty: q.difficulty,
        userAnswer: userAns,
        correctAnswer: q.correctAnswer,
        isCorrect: isCorrect,
        explanation: q.explanation
      });
    });

    const scorePercent = Math.round((correctCount / this.questions.length) * 100);
    const accuracy = scorePercent;
    const earnedXP = correctCount * 15 + (scorePercent === 100 ? 50 : 20);

    const results = {
      totalQuestions: this.questions.length,
      correctCount,
      wrongCount,
      scorePercent,
      accuracy,
      timeTakenSeconds: this.timeElapsedSeconds,
      formattedTime: this.formatTime(this.timeElapsedSeconds),
      earnedXP,
      reviewList,
      classId: this.classId,
      subjectId: this.subjectId,
      topicId: this.topicId
    };

    this.results = results;

    // Save to storage
    StorageManager.saveQuizAttempt({
      classId: this.classId,
      subjectId: this.subjectId,
      topicId: this.topicId,
      topicTitle: this.questions[0]?.topicName || "Multi-Topic Challenge",
      difficulty: this.difficulty,
      total: this.questions.length,
      correct: correctCount,
      wrong: wrongCount,
      scorePercent: scorePercent,
      timeTakenSeconds: this.timeElapsedSeconds
    });

    // Check badges
    StorageManager.unlockBadge("badge_first_quiz");
    if (scorePercent === 100) {
      StorageManager.unlockBadge("badge_perfect_score");
    }

    // Award XP
    awardStudentXP(earnedXP, `Completed Quiz (${scorePercent}%)`);
    if (scorePercent >= 70) {
      triggerConfetti();
    }

    this.onComplete(results);
    return results;
  }
}
