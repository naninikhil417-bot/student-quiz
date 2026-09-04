/**
 * StudySpark AI - Master App Controller & Router
 * Manages SPA view state, global search, quiz runtime, audio feedback, and interactions.
 */

import { Views } from "./views.js";
import { StorageManager } from "./modules/storage.js";
import { awardStudentXP, triggerConfetti, sound, showToast } from "./modules/gamification.js";
import { QuizEngine } from "./modules/quizEngine.js";
import { AIAssistant } from "./modules/aiAssistant.js";
import { FORMULA_BANK } from "./data/formulaData.js";
import { QUESTION_BANK } from "./data/questionBank.js";
import { CURRICULUM } from "./data/curriculumData.js";

class AppRouter {
  constructor() {
    this.currentView = "home";
    this.currentParam = null;
    this.activeQuizEngine = null;
    this.selectedQuizCount = 5;
    this.selectedPracticeAnswers = {};
    this.selectedDailyAnswer = null;
  }

  init() {
    // Check daily streak
    StorageManager.checkDailyStreak();

    // Update global navbar stats
    this.updateNavbarStats();

    // Setup global search listener
    this.setupGlobalSearch();

    // Initial route
    this.navigate("home");
  }

  updateNavbarStats() {
    const state = StorageManager.getState();
    const xpBadge = document.getElementById("nav-xp-counter");
    if (xpBadge) xpBadge.textContent = `${state.gamification.xp} XP`;

    const streakBadge = document.getElementById("nav-streak-counter");
    if (streakBadge) streakBadge.textContent = `${state.gamification.streak} 🔥`;

    const classSelect = document.getElementById("nav-class-select");
    if (classSelect) classSelect.value = state.profile.selectedClass;
  }

  navigate(viewName, param = null) {
    this.currentView = viewName;
    this.currentParam = param;
    window.scrollTo({ top: 0, behavior: "smooth" });

    const container = document.getElementById("view-container");
    if (!container) return;

    // Highlight nav buttons
    document.querySelectorAll(".nav-link-btn, .bottom-nav-item").forEach(btn => {
      btn.classList.remove("active");
      if (btn.getAttribute("data-view") === viewName) {
        btn.classList.add("active");
      }
    });

    switch (viewName) {
      case "home":
        container.innerHTML = Views.renderHome();
        break;
      case "classes":
        container.innerHTML = Views.renderClassSelection();
        break;
      case "subjects":
        container.innerHTML = Views.renderSubjects();
        break;
      case "topicsList":
        container.innerHTML = Views.renderTopicsList(param);
        break;
      case "learn":
        container.innerHTML = Views.renderLearnTopic(param);
        break;
      case "formulas":
        container.innerHTML = Views.renderFormulas(param || "all");
        break;
      case "practice":
        container.innerHTML = Views.renderPractice(param || "all");
        break;
      case "quiz":
        container.innerHTML = Views.renderQuizSetup();
        break;
      case "analytics":
        container.innerHTML = Views.renderAnalytics();
        break;
      case "ai":
        container.innerHTML = Views.renderAI();
        break;
      case "challenge":
        container.innerHTML = Views.renderDailyChallenge();
        break;
      case "bookmarks":
        container.innerHTML = Views.renderBookmarks();
        break;
      case "profile":
        container.innerHTML = Views.renderProfile();
        break;
      default:
        container.innerHTML = Views.renderHome();
    }
  }

  selectClass(classId) {
    StorageManager.updateProfile({ selectedClass: parseInt(classId) });
    this.updateNavbarStats();
    showToast({
      title: `Class ${classId} Selected`,
      message: "Curriculum tailored for your grade!",
      icon: "🎓"
    });
    this.navigate("subjects");
  }

  // --- FORMULA BANK METHODS ---
  filterFormulas() {
    const searchVal = document.getElementById("formula-search-input")?.value.toLowerCase().trim() || "";
    const classVal = document.getElementById("formula-class-filter")?.value || "all";
    const subjectVal = document.getElementById("formula-subject-filter")?.value || "all";

    let filtered = FORMULA_BANK.filter(f => {
      const matchSearch = !searchVal || 
        f.name.toLowerCase().includes(searchVal) || 
        f.keywords.some(k => k.toLowerCase().includes(searchVal)) ||
        f.equation.toLowerCase().includes(searchVal);

      const matchClass = classVal === "all" || f.class.toString() === classVal;
      const matchSubject = subjectVal === "all" || f.subjectId === subjectVal;

      return matchSearch && matchClass && matchSubject;
    });

    const container = document.getElementById("formula-cards-container");
    if (container) {
      container.innerHTML = Views.renderFormulaCardList(filtered);
    }
  }

  toggleBookmark(type, id, btnElement = null) {
    const isBookmarked = StorageManager.toggleBookmark(type, id);
    sound.playPop();

    if (btnElement) {
      btnElement.classList.toggle("active", isBookmarked);
      btnElement.textContent = isBookmarked ? "★" : "☆";
    }

    showToast({
      title: isBookmarked ? "Saved to Bookmarks! ⭐" : "Removed from Bookmarks",
      message: isBookmarked ? "Access anytime from My Saved Content." : "Item removed.",
      icon: isBookmarked ? "⭐" : "🗑️"
    });

    // Check formula master badge
    const state = StorageManager.getState();
    if (state.bookmarks.formulas.length >= 3) {
      StorageManager.unlockBadge("badge_formula_master");
    }
  }

  // --- PRACTICE GENERATOR METHODS ---
  filterPracticeQuestions() {
    const topicVal = document.getElementById("practice-topic-select")?.value || "all";
    const diffVal = document.getElementById("practice-difficulty-select")?.value || "all";
    const container = document.getElementById("practice-questions-container");
    if (container) {
      container.innerHTML = Views.renderPracticeQuestionsList(QUESTION_BANK, topicVal, diffVal);
    }
  }

  selectPracticeOption(questionId, btn) {
    const parent = btn.closest(".options-grid");
    parent.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    this.selectedPracticeAnswers[questionId] = btn.getAttribute("data-opt");
    sound.playPop();
  }

  submitPracticeAnswer(questionId) {
    const userAns = this.selectedPracticeAnswers[questionId];
    const q = QUESTION_BANK.find(item => item.id === questionId);
    if (!q) return;

    const feedbackEl = document.getElementById(`practice-feedback-${questionId}`);
    const explanationEl = document.getElementById(`practice-explanation-${questionId}`);

    if (!userAns) {
      alert("Please select an option first!");
      return;
    }

    const isCorrect = userAns.toString().trim().toLowerCase() === q.correctAnswer.toString().trim().toLowerCase();
    StorageManager.recordQuestionAttempt(q.topicId, isCorrect);

    if (isCorrect) {
      sound.playSuccess();
      feedbackEl.innerHTML = `<span style="color: var(--accent-emerald);">✅ Correct! (+${q.xp} XP)</span>`;
      awardStudentXP(q.xp, `Solved Practice Problem: ${q.topicName}`);
    } else {
      sound.playWrong();
      feedbackEl.innerHTML = `<span style="color: var(--accent-rose);">❌ Incorrect. Correct answer: ${q.correctAnswer}</span>`;
    }

    if (explanationEl) {
      explanationEl.style.display = "block";
    }

    // Check 10 questions badge
    const state = StorageManager.getState();
    if (state.progress.questionsSolvedCount >= 10) {
      StorageManager.unlockBadge("badge_10_questions");
    }
  }

  checkQuickPractice(btn, isCorrect, explanation) {
    const card = btn.closest(".card");
    card.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");

    const explBox = card.querySelector(".quick-explanation");
    if (isCorrect) {
      sound.playSuccess();
      btn.style.borderColor = "var(--accent-emerald)";
      explBox.style.display = "block";
      explBox.style.background = "var(--accent-emerald-light)";
      explBox.style.color = "#065f46";
      explBox.innerHTML = `<strong>✅ Correct!</strong> ${explanation}`;
    } else {
      sound.playWrong();
      btn.style.borderColor = "var(--accent-rose)";
      explBox.style.display = "block";
      explBox.style.background = "var(--accent-rose-light)";
      explBox.style.color = "#9f1239";
      explBox.innerHTML = `<strong>❌ Not quite.</strong> ${explanation}`;
    }
  }

  // --- QUIZ ENGINE METHODS ---
  pickQuizCount(count, btn) {
    this.selectedQuizCount = count;
    document.querySelectorAll(".count-picker-btn").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    sound.playPop();
  }

  startTopicQuiz(topicId, subjectId) {
    this.launchQuiz({
      classId: StorageManager.getState().profile.selectedClass || 9,
      subjectId: subjectId,
      topicId: topicId,
      difficulty: "all",
      questionCount: 5
    });
  }

  launchQuizFromSetup() {
    const classId = document.getElementById("quiz-class-select")?.value || 9;
    const subjectId = document.getElementById("quiz-subject-select")?.value || "all";
    const difficulty = document.getElementById("quiz-difficulty-select")?.value || "all";

    this.launchQuiz({
      classId,
      subjectId,
      topicId: "all",
      difficulty,
      questionCount: this.selectedQuizCount
    });
  }

  launchQuiz(config) {
    this.activeQuizEngine = new QuizEngine({
      ...config,
      onTick: (timerData) => {
        const timerEl = document.getElementById("quiz-timer-display");
        if (timerEl) {
          timerEl.textContent = `⏱️ ${timerData.formattedRemaining}`;
          if (timerData.remaining < 30) {
            timerEl.classList.add("urgent");
          }
        }
      },
      onComplete: (results) => {
        this.renderQuizScorecard(results);
      }
    });

    const questions = this.activeQuizEngine.init();
    this.renderQuizActiveScreen();
  }

  renderQuizActiveScreen() {
    const q = this.activeQuizEngine.getCurrentQuestion();
    const idx = this.activeQuizEngine.currentIndex;
    const total = this.activeQuizEngine.questions.length;
    const progressPercent = Math.round(((idx + 1) / total) * 100);

    const container = document.getElementById("view-container");
    container.innerHTML = `
      <section class="animate-slide-up" style="max-width: 780px; margin: 0 auto;">
        <!-- HUD Header -->
        <div class="quiz-hud">
          <div>
            <span class="badge badge-indigo">Question ${idx + 1} of ${total}</span>
            <span style="font-size: 0.85rem; color: var(--text-muted); margin-left: 8px; font-weight: 600;">${q.topicName}</span>
          </div>
          <div id="quiz-timer-display" class="timer-pill">
            ⏱️ 05:00
          </div>
        </div>

        <div class="quiz-progress-bar-container">
          <div class="quiz-progress-fill" style="width: ${progressPercent}%;"></div>
        </div>

        <!-- Question Card -->
        <div class="question-container-card">
          <span class="badge ${q.difficulty === 'Easy' ? 'badge-emerald' : (q.difficulty === 'Medium' ? 'badge-amber' : 'badge-rose')}">
            ${q.difficulty}
          </span>
          <div class="question-text">${q.question}</div>

          <div class="options-grid">
            ${q.options.map((opt, oIdx) => {
              const isSelected = this.activeQuizEngine.userAnswers[q.id] === opt;
              return `
                <button class="option-btn ${isSelected ? 'selected' : ''}" onclick="window.appRouter.selectQuizAnswer('${q.id}', '${opt}')">
                  <span class="option-letter">${String.fromCharCode(65 + oIdx)}</span>
                  <span>${opt}</span>
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Quiz Action Controls -->
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <button class="btn btn-secondary" onclick="window.appRouter.quizPrevQuestion()" ${idx === 0 ? 'disabled style="opacity: 0.5;"' : ''}>
            ← Previous
          </button>
          ${idx === total - 1 ? `
            <button class="btn btn-emerald btn-lg" onclick="window.appRouter.quizSubmit()">
              Submit Quiz 🎯
            </button>
          ` : `
            <button class="btn btn-primary" onclick="window.appRouter.quizNextQuestion()">
              Next Question →
            </button>
          `}
        </div>
      </section>
    `;
  }

  selectQuizAnswer(questionId, answer) {
    this.activeQuizEngine.selectAnswer(questionId, answer);
    this.renderQuizActiveScreen();
  }

  quizNextQuestion() {
    this.activeQuizEngine.nextQuestion();
    this.renderQuizActiveScreen();
  }

  quizPrevQuestion() {
    this.activeQuizEngine.prevQuestion();
    this.renderQuizActiveScreen();
  }

  quizSubmit() {
    this.activeQuizEngine.submitQuiz();
  }

  renderQuizScorecard(results) {
    const container = document.getElementById("view-container");
    container.innerHTML = `
      <section class="animate-slide-up" style="max-width: 800px; margin: 0 auto;">
        <!-- Scorecard Hero -->
        <div class="scorecard-hero">
          <div style="font-size: 2.5rem; margin-bottom: 8px;">🎉</div>
          <h2>Quiz Completed!</h2>
          <p style="color: var(--text-muted); margin-bottom: 20px;">Great job testing your knowledge!</p>

          <div class="score-circle">
            <div class="score-percent">${results.scorePercent}%</div>
            <div class="score-sub">${results.correctCount}/${results.totalQuestions} Correct</div>
          </div>

          <div class="score-metrics-grid">
            <div class="score-metric-box">
              <div style="font-size: 1.25rem; font-weight: 800; color: var(--accent-emerald);">${results.correctCount}</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">Correct Answers</div>
            </div>
            <div class="score-metric-box">
              <div style="font-size: 1.25rem; font-weight: 800; color: var(--accent-rose);">${results.wrongCount}</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">Wrong Answers</div>
            </div>
            <div class="score-metric-box">
              <div style="font-size: 1.25rem; font-weight: 800; color: var(--primary);">${results.formattedTime}</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">Time Taken</div>
            </div>
            <div class="score-metric-box">
              <div style="font-size: 1.25rem; font-weight: 800; color: #b45309;">+${results.earnedXP} XP</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">Points Earned</div>
            </div>
          </div>

          <div style="display: flex; justify-content: center; gap: 14px; margin-top: 24px; flex-wrap: wrap;">
            <button class="btn btn-primary" onclick="window.appRouter.navigate('quiz')">
              Retake / New Quiz 🔄
            </button>
            <button class="btn btn-secondary" onclick="window.appRouter.navigate('analytics')">
              View Weak Areas & Analytics 📊
            </button>
          </div>
        </div>

        <!-- Question Review Breakdown -->
        <div class="card" style="margin-top: 32px;">
          <h3 style="font-size: 1.3rem; margin-bottom: 18px;">Detailed Question Review & Explanations</h3>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            ${results.reviewList.map(r => `
              <div style="padding: 16px; border: 1px solid var(--border-color); border-radius: var(--radius-md); background: ${r.isCorrect ? 'var(--accent-emerald-light)' : 'var(--accent-rose-light)'};">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                  <span style="font-weight: 700;">Question ${r.index} (${r.difficulty})</span>
                  <span class="badge ${r.isCorrect ? 'badge-emerald' : 'badge-rose'}">
                    ${r.isCorrect ? '✅ Correct' : '❌ Incorrect'}
                  </span>
                </div>
                <div style="font-weight: 600; font-size: 1.05rem; margin-bottom: 8px;">${r.question}</div>
                <div style="font-size: 0.9rem; margin-bottom: 6px;">
                  <strong>Your Answer:</strong> ${r.userAnswer || 'No answer selected'}
                </div>
                ${!r.isCorrect ? `<div style="font-size: 0.9rem; color: #065f46; margin-bottom: 6px;"><strong>Correct Answer:</strong> ${r.correctAnswer}</div>` : ''}
                <div style="font-size: 0.88rem; color: var(--text-muted); margin-top: 8px; border-top: 1px dashed rgba(0,0,0,0.1); padding-top: 6px;">
                  <strong>Explanation:</strong> ${r.explanation}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }

  // --- AI ASSISTANT CHAT METHODS ---
  async handleAISubmit(event) {
    if (event) event.preventDefault();
    const input = document.getElementById("ai-user-input");
    if (!input || !input.value.trim()) return;

    const userText = input.value.trim();
    input.value = "";
    this.sendPromptToAI(userText);
  }

  async sendPromptToAI(promptText) {
    const state = StorageManager.getState();
    const container = document.getElementById("ai-messages-container");

    // Add user message
    state.aiHistory.push({ sender: "user", text: promptText, timestamp: new Date().toISOString() });
    StorageManager.saveState(state);

    if (container) {
      const userBubble = document.createElement("div");
      userBubble.className = "chat-bubble user-msg animate-slide-up";
      userBubble.textContent = promptText;
      container.appendChild(userBubble);
      container.scrollTop = container.scrollHeight;
    }

    // Add typing indicator
    const typingBubble = document.createElement("div");
    typingBubble.className = "chat-bubble ai-msg";
    typingBubble.innerHTML = "<em>✨ StudySpark AI is thinking...</em>";
    if (container) {
      container.appendChild(typingBubble);
      container.scrollTop = container.scrollHeight;
    }

    const aiResponse = await AIAssistant.askAI(promptText, state.profile.selectedClass);
    typingBubble.remove();

    state.aiHistory.push({ sender: "ai", text: aiResponse, timestamp: new Date().toISOString() });
    StorageManager.saveState(state);

    if (container) {
      const aiBubble = document.createElement("div");
      aiBubble.className = "chat-bubble ai-msg animate-slide-up";
      aiBubble.innerHTML = aiResponse.replace(/\n/g, "<br/>");
      container.appendChild(aiBubble);
      container.scrollTop = container.scrollHeight;
      sound.playPop();
    }
  }

  clearAIChat() {
    const state = StorageManager.getState();
    state.aiHistory = [
      {
        sender: "ai",
        text: "👋 Chat cleared! Ask me any question from your school syllabus, formulas, or concepts.",
        timestamp: new Date().toISOString()
      }
    ];
    StorageManager.saveState(state);
    this.navigate("ai");
  }

  // --- DAILY CHALLENGE METHODS ---
  selectDailyOption(btn, optionValue) {
    const grid = document.getElementById("daily-options-grid");
    grid.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    this.selectedDailyAnswer = optionValue;
    sound.playPop();
  }

  submitDailyChallenge(correctAnswer, rewardXP, explanation) {
    if (!this.selectedDailyAnswer) {
      alert("Please select an answer first!");
      return;
    }

    const isCorrect = this.selectedDailyAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase();
    const box = document.getElementById("daily-explanation-box");

    if (isCorrect) {
      sound.playSuccess();
      triggerConfetti();
      awardStudentXP(rewardXP, "Daily Challenge Complete! 🔥");
      box.style.display = "block";
      box.style.background = "var(--accent-emerald-light)";
      box.style.color = "#065f46";
      box.innerHTML = `
        <div style="font-weight: 800; font-size: 1.15rem; margin-bottom: 6px;">🎉 Correct! You earned +${rewardXP} XP!</div>
        <div><strong>Explanation:</strong> ${explanation}</div>
      `;
    } else {
      sound.playWrong();
      box.style.display = "block";
      box.style.background = "var(--accent-rose-light)";
      box.style.color = "#9f1239";
      box.innerHTML = `
        <div style="font-weight: 800; font-size: 1.15rem; margin-bottom: 6px;">❌ Incorrect answer. Correct is: ${correctAnswer}</div>
        <div><strong>Explanation:</strong> ${explanation}</div>
      `;
    }
  }

  saveProfilePreferences(event) {
    event.preventDefault();
    const name = document.getElementById("pref-name-input")?.value.trim() || "Student";
    const selectedClass = parseInt(document.getElementById("pref-class-select")?.value) || 9;

    StorageManager.updateProfile({ name, selectedClass });
    this.updateNavbarStats();
    showToast({
      title: "Profile Updated! ✓",
      message: `Preferences saved for ${name}.`,
      icon: "👤"
    });
    this.navigate("profile");
  }

  // --- GLOBAL SEARCH MODAL ---
  setupGlobalSearch() {
    window.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        this.openSearchModal();
      }
      if (e.key === "Escape") {
        this.closeSearchModal();
      }
    });
  }

  openSearchModal() {
    let modal = document.getElementById("global-search-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "global-search-modal";
      modal.className = "modal-backdrop animate-slide-up";
      modal.onclick = (e) => {
        if (e.target === modal) this.closeSearchModal();
      };
      modal.innerHTML = `
        <div class="modal-dialog">
          <div style="padding: 16px 20px; border-bottom: 1px solid var(--border-color); display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 1.3rem;">🔍</span>
            <input type="text" id="global-search-input" class="search-input" placeholder="Search topics, formulas, questions across all classes..." style="border: none; box-shadow: none; font-size: 1.1rem;" autofocus>
            <button onclick="window.appRouter.closeSearchModal()" style="font-size: 1.2rem; color: var(--text-muted);">✕</button>
          </div>
          <div id="global-search-results" style="max-height: 400px; overflow-y: auto; padding: 12px 16px;">
            <p style="color: var(--text-muted); font-size: 0.9rem; text-align: center; padding: 20px;">Type a keyword (e.g. "Newton", "Linear", "Circle", "Photosynthesis", "Trigonometry")...</p>
          </div>
        </div>
      `;
      document.body.appendChild(modal);

      const input = document.getElementById("global-search-input");
      input.addEventListener("input", (e) => this.handleGlobalSearchInput(e.target.value));
    }
    modal.style.display = "flex";
    setTimeout(() => document.getElementById("global-search-input")?.focus(), 50);
  }

  closeSearchModal() {
    const modal = document.getElementById("global-search-modal");
    if (modal) modal.style.display = "none";
  }

  handleGlobalSearchInput(query) {
    const q = query.toLowerCase().trim();
    const resultsContainer = document.getElementById("global-search-results");
    if (!resultsContainer) return;

    if (!q) {
      resultsContainer.innerHTML = `<p style="color: var(--text-muted); font-size: 0.9rem; text-align: center; padding: 20px;">Type a keyword (e.g. "Newton", "Speed", "Circle", "Photosynthesis")...</p>`;
      return;
    }

    const matchedTopics = Object.values(CURRICULUM.topics).filter(t => 
      t.title.toLowerCase().includes(q) || t.chapter.toLowerCase().includes(q) || t.tagline.toLowerCase().includes(q)
    );

    const matchedFormulas = FORMULA_BANK.filter(f => 
      f.name.toLowerCase().includes(q) || f.keywords.some(k => k.toLowerCase().includes(q))
    );

    const matchedQuestions = QUESTION_BANK.filter(item => 
      item.question.toLowerCase().includes(q) || item.topicName.toLowerCase().includes(q)
    );

    let html = "";

    if (matchedTopics.length > 0) {
      html += `<div style="font-weight: 800; font-size: 0.8rem; color: var(--primary); text-transform: uppercase; margin: 8px 0;">📖 Topics</div>`;
      matchedTopics.forEach(t => {
        html += `
          <div style="padding: 8px 12px; border-radius: var(--radius-sm); cursor: pointer; display: flex; justify-content: space-between; align-items: center;" onmouseover="this.style.background='var(--primary-light)'" onmouseout="this.style.background='transparent'" onclick="window.appRouter.closeSearchModal(); window.appRouter.navigate('learn', '${t.id}')">
            <div>
              <div style="font-weight: 700; font-size: 0.95rem;">${t.title}</div>
              <div style="font-size: 0.78rem; color: var(--text-muted);">Class ${t.classId} • ${t.chapter}</div>
            </div>
            <span class="badge badge-indigo">Learn →</span>
          </div>
        `;
      });
    }

    if (matchedFormulas.length > 0) {
      html += `<div style="font-weight: 800; font-size: 0.8rem; color: #b45309; text-transform: uppercase; margin: 12px 0 6px 0;">📐 Formulas</div>`;
      matchedFormulas.forEach(f => {
        html += `
          <div style="padding: 8px 12px; border-radius: var(--radius-sm); cursor: pointer; display: flex; justify-content: space-between; align-items: center;" onmouseover="this.style.background='var(--accent-amber-light)'" onmouseout="this.style.background='transparent'" onclick="window.appRouter.closeSearchModal(); window.appRouter.navigate('formulas')">
            <div>
              <div style="font-weight: 700; font-size: 0.95rem;">${f.name} (<code>${f.equation}</code>)</div>
              <div style="font-size: 0.78rem; color: var(--text-muted);">${f.subject} • Class ${f.class}</div>
            </div>
            <span class="badge badge-amber">Formula Bank →</span>
          </div>
        `;
      });
    }

    if (matchedQuestions.length > 0) {
      html += `<div style="font-weight: 800; font-size: 0.8rem; color: #065f46; text-transform: uppercase; margin: 12px 0 6px 0;">❓ Practice Questions</div>`;
      matchedQuestions.slice(0, 3).forEach(item => {
        html += `
          <div style="padding: 8px 12px; border-radius: var(--radius-sm); cursor: pointer; display: flex; justify-content: space-between; align-items: center;" onmouseover="this.style.background='var(--accent-emerald-light)'" onmouseout="this.style.background='transparent'" onclick="window.appRouter.closeSearchModal(); window.appRouter.navigate('practice', '${item.topicId}')">
            <div style="max-width: 80%;">
              <div style="font-weight: 600; font-size: 0.9rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${item.question}</div>
              <div style="font-size: 0.78rem; color: var(--text-muted);">${item.topicName}</div>
            </div>
            <span class="badge badge-emerald">Solve →</span>
          </div>
        `;
      });
    }

    if (!html) {
      html = `<p style="color: var(--text-muted); font-size: 0.9rem; text-align: center; padding: 20px;">No results found for "${query}".</p>`;
    }

    resultsContainer.innerHTML = html;
  }
}

// Initialize and bind to global window
window.appRouter = new AppRouter();
document.addEventListener("DOMContentLoaded", () => {
  window.appRouter.init();
});
