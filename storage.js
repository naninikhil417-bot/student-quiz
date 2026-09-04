/**
 * StudySpark AI - Storage Manager
 * Handles persistent state via localStorage: Profile, XP, Streaks, Badges, Quiz Attempts, Weak Topics, Bookmarks.
 */

const STORAGE_KEY = "studyspark_ai_state_v1";

const DEFAULT_STATE = {
  profile: {
    name: "Alex",
    selectedClass: 9,
    avatar: "🦊",
    preferredSubjects: ["math", "science"],
    joinedDate: new Date().toISOString()
  },
  gamification: {
    xp: 240,
    streak: 3,
    lastActiveDate: new Date().toISOString().split("T")[0],
    level: 2,
    levelTitle: "Learner",
    unlockedBadges: ["badge_first_step", "badge_streak_3"]
  },
  dailyChallenge: {
    completedToday: false,
    lastCompletedDate: null
  },
  progress: {
    completedTopics: ["c9_social_civics"],
    questionsSolvedCount: 14,
    quizAttempts: [
      {
        id: "qa_sample_1",
        date: new Date(Date.now() - 86400000).toISOString(),
        classId: 9,
        subjectId: "science",
        topicId: "c9_science_motion",
        topicTitle: "Equations of Motion",
        difficulty: "Medium",
        total: 5,
        correct: 4,
        wrong: 1,
        scorePercent: 80,
        timeTakenSeconds: 95
      }
    ],
    // Keyed by topicId: { totalAnswered, correctCount, wrongCount, lastAttemptDate }
    topicStats: {
      "c9_science_motion": { totalAnswered: 5, correctCount: 4, wrongCount: 1, accuracy: 80 },
      "c10_math_trig": { totalAnswered: 4, correctCount: 1, wrongCount: 3, accuracy: 25 },
      "c6_math_integers": { totalAnswered: 6, correctCount: 6, wrongCount: 0, accuracy: 100 }
    }
  },
  bookmarks: {
    topics: ["c9_science_motion", "c10_math_trig"],
    formulas: ["f_area_circle", "f_newton_second_law", "f_ohms_law"],
    questions: ["q_c9_s_mot_03"]
  },
  aiHistory: [
    {
      sender: "ai",
      text: "👋 Hi Alex! I am **StudySpark AI**, your 24/7 personal study buddy! Ask me any concept from Classes 6–10, request formula breakdowns, or ask me to explain like you're in Class 6!",
      timestamp: new Date().toISOString()
    }
  ]
};

export class StorageManager {
  static getState() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        this.saveState(DEFAULT_STATE);
        return DEFAULT_STATE;
      }
      const parsed = JSON.parse(stored);
      // Merge with defaults in case of new schema keys
      return { ...DEFAULT_STATE, ...parsed };
    } catch (e) {
      console.warn("Error reading localStorage, using defaults", e);
      return DEFAULT_STATE;
    }
  }

  static saveState(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error("Error saving state to localStorage", e);
    }
  }

  static updateProfile(updates) {
    const state = this.getState();
    state.profile = { ...state.profile, ...updates };
    this.saveState(state);
    return state.profile;
  }

  static checkDailyStreak() {
    const state = this.getState();
    const today = new Date().toISOString().split("T")[0];
    const lastActive = state.gamification.lastActiveDate;

    if (lastActive === today) {
      return state.gamification.streak;
    }

    const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
    if (lastActive === yesterday) {
      state.gamification.streak += 1;
    } else if (lastActive < yesterday) {
      state.gamification.streak = 1; // reset streak if missed a day
    }
    state.gamification.lastActiveDate = today;
    this.saveState(state);
    return state.gamification.streak;
  }

  static addXP(amount) {
    const state = this.getState();
    state.gamification.xp += amount;
    
    // Check level progression (Level thresholds: L1: 0, L2: 150, L3: 400, L4: 800, L5: 1500)
    const xp = state.gamification.xp;
    let level = 1;
    let title = "Beginner";
    if (xp >= 1500) { level = 5; title = "Knowledge Master"; }
    else if (xp >= 800) { level = 4; title = "Smart Solver"; }
    else if (xp >= 400) { level = 3; title = "Explorer"; }
    else if (xp >= 150) { level = 2; title = "Learner"; }

    const leveledUp = level > state.gamification.level;
    state.gamification.level = level;
    state.gamification.levelTitle = title;
    
    this.saveState(state);
    return { currentXP: xp, level, title, leveledUp, added: amount };
  }

  static recordQuestionAttempt(topicId, isCorrect) {
    const state = this.getState();
    state.progress.questionsSolvedCount = (state.progress.questionsSolvedCount || 0) + 1;
    
    if (!state.progress.topicStats[topicId]) {
      state.progress.topicStats[topicId] = { totalAnswered: 0, correctCount: 0, wrongCount: 0, accuracy: 0 };
    }
    const stat = state.progress.topicStats[topicId];
    stat.totalAnswered += 1;
    if (isCorrect) stat.correctCount += 1;
    else stat.wrongCount += 1;
    stat.accuracy = Math.round((stat.correctCount / stat.totalAnswered) * 100);

    this.saveState(state);
    return stat;
  }

  static saveQuizAttempt(attempt) {
    const state = this.getState();
    state.progress.quizAttempts.unshift({
      id: "qa_" + Date.now(),
      date: new Date().toISOString(),
      ...attempt
    });
    // Keep last 30 attempts
    if (state.progress.quizAttempts.length > 30) {
      state.progress.quizAttempts.pop();
    }
    this.saveState(state);
  }

  static toggleBookmark(type, id) {
    const state = this.getState();
    if (!state.bookmarks[type]) state.bookmarks[type] = [];
    const index = state.bookmarks[type].indexOf(id);
    let isBookmarked = false;
    if (index > -1) {
      state.bookmarks[type].splice(index, 1);
      isBookmarked = false;
    } else {
      state.bookmarks[type].push(id);
      isBookmarked = true;
    }
    this.saveState(state);
    return isBookmarked;
  }

  static isBookmarked(type, id) {
    const state = this.getState();
    return !!(state.bookmarks[type] && state.bookmarks[type].includes(id));
  }

  static unlockBadge(badgeId) {
    const state = this.getState();
    if (!state.gamification.unlockedBadges.includes(badgeId)) {
      state.gamification.unlockedBadges.push(badgeId);
      this.saveState(state);
      return true;
    }
    return false;
  }
}
