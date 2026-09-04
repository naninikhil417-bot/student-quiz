/**
 * StudySpark AI - Views & UI Renderer
 * Generates dynamic template views for all pages of StudySpark AI.
 */

import { CURRICULUM } from "./data/curriculumData.js";
import { FORMULA_BANK } from "./data/formulaData.js";
import { QUESTION_BANK } from "./data/questionBank.js";
import { DAILY_CHALLENGES } from "./data/dailyChallenges.js";
import { StorageManager } from "./modules/storage.js";
import { BADGES } from "./modules/gamification.js";
import { AnalyticsEngine } from "./modules/analytics.js";

export class Views {
  // 1. HOMEPAGE / LANDING
  static renderHome() {
    const state = StorageManager.getState();
    const metrics = AnalyticsEngine.getOverviewMetrics();
    const todayIndex = new Date().getDay();
    const todayChallenge = DAILY_CHALLENGES.find(c => c.dayIndex === todayIndex) || DAILY_CHALLENGES[0];

    return `
      <!-- Hero Banner -->
      <section class="hero-banner animate-slide-up">
        <div class="hero-tagline-chip">
          <span>✨</span> Smart Learning Companion for Classes 6–10
        </div>
        <h1 class="hero-title">Learn. Practice. Challenge Yourself.</h1>
        <p class="hero-subtitle">
          Don't just memorize formulas and definitions. Understand concepts, solve real practice questions, conquer quizzes, and master weak topics!
        </p>
        <div class="hero-cta-group">
          <button class="btn btn-primary btn-lg" onclick="window.appRouter.navigate('classes')">
            Start Learning 🚀
          </button>
          <button class="btn btn-secondary btn-lg" onclick="window.appRouter.navigate('quiz')">
            🎯 Take a Quiz
          </button>
          <button class="btn btn-secondary btn-lg" onclick="window.appRouter.navigate('subjects')">
            📚 Explore Subjects
          </button>
        </div>
      </section>

      <!-- Today's Daily Challenge Teaser Card -->
      <section class="card glass-card animate-slide-up" style="margin-bottom: 36px; border-left: 6px solid var(--accent-amber);">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
          <div>
            <span class="badge badge-amber">${todayChallenge.badge}</span>
            <h3 style="font-size: 1.3rem; margin: 8px 0 4px 0;">🔥 Today's Challenge: ${todayChallenge.title}</h3>
            <p style="color: var(--text-muted); font-size: 0.95rem;">Subject: ${todayChallenge.subject} • Reward: <strong>+${todayChallenge.rewardXP} XP</strong></p>
          </div>
          <button class="btn btn-emerald" onclick="window.appRouter.navigate('challenge')">
            Solve Challenge ⚡
          </button>
        </div>
      </section>

      <!-- Learning Features Grid -->
      <section style="margin-bottom: 48px;">
        <div class="section-header">
          <h2>Everything You Need to Excel</h2>
          <p>Structured, student-friendly learning tools tailored for Indian school curricula.</p>
        </div>
        
        <div class="features-grid">
          <div class="feature-card" style="--card-accent: #6366f1; --icon-bg: #eef2ff;" onclick="window.appRouter.navigate('subjects')">
            <div class="feature-icon-wrapper">📚</div>
            <div class="feature-text">
              <h3>Interactive Lessons</h3>
              <p>Crystal-clear concepts, key points, and solved step-by-step examples.</p>
            </div>
          </div>

          <div class="feature-card" style="--card-accent: #10b981; --icon-bg: #ecfdf5;" onclick="window.appRouter.navigate('practice')">
            <div class="feature-icon-wrapper">🧠</div>
            <div class="feature-text">
              <h3>Practice Generator</h3>
              <p>Easy, Medium & Hard level questions with instant explanations.</p>
            </div>
          </div>

          <div class="feature-card" style="--card-accent: #f59e0b; --icon-bg: #fffbeb;" onclick="window.appRouter.navigate('formulas')">
            <div class="feature-icon-wrapper">📐</div>
            <div class="feature-text">
              <h3>Formula Bank</h3>
              <p>Searchable math & physics formulas with symbol meanings and units.</p>
            </div>
          </div>

          <div class="feature-card" style="--card-accent: #8b5cf6; --icon-bg: #f5f3ff;" onclick="window.appRouter.navigate('quiz')">
            <div class="feature-icon-wrapper">🎯</div>
            <div class="feature-text">
              <h3>Quiz Arena</h3>
              <p>Timed gamified quizzes, scorecards, accuracy stats, and XP rewards.</p>
            </div>
          </div>

          <div class="feature-card" style="--card-accent: #f43f5e; --icon-bg: #fff1f2;" onclick="window.appRouter.navigate('analytics')">
            <div class="feature-icon-wrapper">📊</div>
            <div class="feature-text">
              <h3>Weak Topic Detection</h3>
              <p>Identify weak topics automatically and follow personalized recovery loops.</p>
            </div>
          </div>

          <div class="feature-card" style="--card-accent: #06b6d4; --icon-bg: #ecfeff;" onclick="window.appRouter.navigate('ai')">
            <div class="feature-icon-wrapper">🤖</div>
            <div class="feature-text">
              <h3>Ask StudySpark AI</h3>
              <p>Instant answers, simpler analogies, and step-by-step guidance 24/7.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- How StudySpark Works (7-Step Visual Timeline) -->
      <section class="how-it-works-section animate-slide-up">
        <div class="section-header">
          <h2>How StudySpark Works</h2>
          <p>Follow our proven 7-step mastery cycle to transform your school grades.</p>
        </div>

        <div class="steps-container">
          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-title">Select Class</div>
            <div class="step-desc">Pick Class 6, 7, 8, 9, or 10</div>
          </div>
          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-title">Choose Subject</div>
            <div class="step-desc">Math, Science, Social & more</div>
          </div>
          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-title">Pick a Topic</div>
            <div class="step-desc">Focused chapter modules</div>
          </div>
          <div class="step-card">
            <div class="step-number">4</div>
            <div class="step-title">Learn Concept</div>
            <div class="step-desc">Formulas & solved examples</div>
          </div>
          <div class="step-card">
            <div class="step-number">5</div>
            <div class="step-title">Practice</div>
            <div class="step-desc">Solve 3 difficulty levels</div>
          </div>
          <div class="step-card">
            <div class="step-number">6</div>
            <div class="step-title">Take Quiz</div>
            <div class="step-desc">Timed gamified challenges</div>
          </div>
          <div class="step-card">
            <div class="step-number">7</div>
            <div class="step-title">Master Weak Spots</div>
            <div class="step-desc">Personalized recovery loop</div>
          </div>
        </div>
      </section>
    `;
  }

  // 2. CLASS SELECTION PAGE
  static renderClassSelection() {
    const state = StorageManager.getState();
    const currentClass = state.profile.selectedClass;

    return `
      <section class="animate-slide-up">
        <div class="section-header">
          <h2>Select Your Class</h2>
          <p>Choose your grade to explore customized syllabus topics, formulas, and quizzes.</p>
        </div>

        <div class="class-grid">
          ${CURRICULUM.classes.map(c => `
            <div class="class-card ${c.id === currentClass ? 'selected' : ''}" onclick="window.appRouter.selectClass(${c.id})">
              <div>
                <span class="badge badge-indigo">${c.badge}</span>
                <div class="class-num-badge">${c.name}</div>
                <p style="font-size: 0.9rem; color: var(--text-muted);">${c.description}</p>
              </div>

              <div>
                <div class="class-stats-row">
                  <span>📚 ${c.subjectsCount} Subjects</span>
                  <span>📖 ${c.topicsCount}+ Topics</span>
                </div>
                <button class="btn btn-primary" style="width: 100%;">
                  ${c.id === currentClass ? 'Currently Active ✓' : 'Start Learning 🚀'}
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  // 3. SUBJECTS & TOPICS EXPLORER
  static renderSubjects() {
    const state = StorageManager.getState();
    const currentClass = state.profile.selectedClass || 9;

    return `
      <section class="animate-slide-up">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 24px;">
          <div>
            <h2>Class ${currentClass} Curriculum</h2>
            <p style="color: var(--text-muted);">Select a subject to explore chapters, formulas, and interactive topics.</p>
          </div>
          <button class="btn btn-secondary btn-sm" onclick="window.appRouter.navigate('classes')">
            Switch Class (${currentClass}) 🔄
          </button>
        </div>

        <div class="subjects-grid">
          ${CURRICULUM.subjects.map(s => `
            <div class="subject-card" style="--card-accent: ${s.color}; --icon-bg: ${s.lightBg};" onclick="window.appRouter.navigate('topicsList', '${s.id}')">
              <div class="subject-header">
                <div class="subject-icon">${s.icon}</div>
                <div>
                  <h3 style="font-size: 1.25rem;">${s.name}</h3>
                  <span style="font-size: 0.82rem; color: var(--text-muted);">Class ${currentClass}</span>
                </div>
              </div>
              <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 12px;">${s.description}</p>
              
              <div class="subcategories-chips">
                ${s.subcategories.map(sub => `<span class="subcat-chip">${sub}</span>`).join('')}
              </div>

              <div style="margin-top: 18px; display: flex; align-items: center; justify-content: space-between;">
                <span style="font-size: 0.85rem; font-weight: 700; color: ${s.color};">Explore Chapters →</span>
                <span class="badge" style="background: ${s.lightBg}; color: ${s.color}; font-weight: 800;">Full Syllabus</span>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  // 3b. TOPICS LIST FOR A SUBJECT
  static renderTopicsList(subjectId) {
    const state = StorageManager.getState();
    const currentClass = state.profile.selectedClass || 9;
    const subject = CURRICULUM.subjects.find(s => s.id === subjectId) || CURRICULUM.subjects[0];
    
    // Get all available topics for this class and subject
    const matchingTopics = Object.values(CURRICULUM.topics).filter(t => t.classId === currentClass && t.subjectId === subject.id);

    return `
      <section class="animate-slide-up">
        <div style="margin-bottom: 24px;">
          <button class="btn btn-secondary btn-sm" onclick="window.appRouter.navigate('subjects')" style="margin-bottom: 12px;">
            ← Back to Subjects
          </button>
          <div style="display: flex; align-items: center; gap: 14px;">
            <span style="font-size: 2.2rem;">${subject.icon}</span>
            <div>
              <h2>Class ${currentClass} — ${subject.name}</h2>
              <p style="color: var(--text-muted);">${subject.description}</p>
            </div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
          ${matchingTopics.length > 0 ? matchingTopics.map(t => `
            <div class="card card-hover" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                  <span class="badge badge-indigo">${t.subcategory}</span>
                  <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">⏱️ ${t.duration}</span>
                </div>
                <h3 style="font-size: 1.2rem; margin-bottom: 6px;">${t.title}</h3>
                <div style="font-size: 0.85rem; font-weight: 600; color: var(--primary); margin-bottom: 8px;">Chapter: ${t.chapter}</div>
                <p style="font-size: 0.88rem; color: var(--text-muted);">${t.tagline}</p>
              </div>

              <div style="margin-top: 20px; display: flex; gap: 10px;">
                <button class="btn btn-primary btn-sm" style="flex: 1;" onclick="window.appRouter.navigate('learn', '${t.id}')">
                  📖 Learn Topic
                </button>
                <button class="btn btn-secondary btn-sm" onclick="window.appRouter.navigate('practice', '${t.id}')">
                  🧠 Practice
                </button>
              </div>
            </div>
          `).join('') : `
            <div class="card" style="grid-column: 1 / -1; text-align: center; padding: 48px 20px;">
              <div style="font-size: 3rem; margin-bottom: 12px;">📚</div>
              <h3>Explore Core Chapters in Class ${currentClass} ${subject.name}</h3>
              <p style="color: var(--text-muted); max-width: 500px; margin: 8px auto 20px auto;">
                Sample interactive chapters are pre-loaded across Mathematics and Science. You can also generate practice questions or quiz mode directly for this subject!
              </p>
              <div style="display: flex; justify-content: center; gap: 12px;">
                <button class="btn btn-primary" onclick="window.appRouter.navigate('practice')">
                  Practice Questions 🧠
                </button>
                <button class="btn btn-secondary" onclick="window.appRouter.navigate('quiz')">
                  Take Subject Quiz 🎯
                </button>
              </div>
            </div>
          `}
        </div>
      </section>
    `;
  }

  // 4. TOPIC LEARNING HUB
  static renderLearnTopic(topicId) {
    const topic = CURRICULUM.topics[topicId] || CURRICULUM.topics["c9_science_motion"];
    const isSaved = StorageManager.isBookmarked("topics", topic.id);

    return `
      <section class="animate-slide-up">
        <!-- Back Bar -->
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;">
          <button class="btn btn-secondary btn-sm" onclick="window.appRouter.navigate('topicsList', '${topic.subjectId}')">
            ← Back to Topics
          </button>
          <button class="btn btn-secondary btn-sm" onclick="window.appRouter.toggleBookmark('topics', '${topic.id}')">
            ${isSaved ? '⭐ Bookmarked' : '☆ Save Topic'}
          </button>
        </div>

        <!-- Topic Header Card -->
        <div class="topic-header-card">
          <div class="topic-meta-row">
            <span>Class ${topic.classId}</span>
            <span>•</span>
            <span>${topic.subcategory}</span>
            <span>•</span>
            <span>⏱️ ${topic.duration}</span>
            <span>•</span>
            <span>Difficulty: ${topic.difficulty}</span>
          </div>
          <h1>${topic.title}</h1>
          <p style="font-size: 1.1rem; color: #e0e7ff; max-width: 700px;">${topic.tagline}</p>
        </div>

        <!-- Navigation Tabs for this Topic -->
        <div style="display: flex; gap: 12px; margin-bottom: 24px; overflow-x: auto; padding-bottom: 4px;">
          <a href="#section-concept" class="btn btn-secondary btn-sm">📖 Concept</a>
          <a href="#section-keypoints" class="btn btn-secondary btn-sm">💡 Key Points</a>
          ${topic.formulas.length > 0 ? '<a href="#section-formulas" class="btn btn-secondary btn-sm">📐 Formulas</a>' : ''}
          <a href="#section-examples" class="btn btn-secondary btn-sm">🧮 Solved Example</a>
          <a href="#section-mistakes" class="btn btn-secondary btn-sm">⚠️ Common Mistakes</a>
          <a href="#section-quickpractice" class="btn btn-secondary btn-sm">📝 Quick Practice</a>
        </div>

        <!-- 1. Learn the Concept -->
        <div id="section-concept" class="learning-module-section">
          <div class="learning-section-title">
            <span>📖</span>
            <h3>Learn the Concept</h3>
          </div>
          <div class="concept-body">
            ${topic.concept.replace(/\n/g, '<br/>')}
          </div>
        </div>

        <!-- 2. Key Points -->
        <div id="section-keypoints" class="learning-module-section">
          <div class="learning-section-title">
            <span>💡</span>
            <h3>Key Points to Remember</h3>
          </div>
          <ul style="padding-left: 20px; font-size: 1.05rem; line-height: 1.8;">
            ${topic.keyPoints.map(pt => `<li style="margin-bottom: 8px;">${pt}</li>`).join('')}
          </ul>
        </div>

        <!-- 3. Important Formulas -->
        ${topic.formulas.length > 0 ? `
          <div id="section-formulas" class="learning-module-section">
            <div class="learning-section-title">
              <span>📐</span>
              <h3>Important Formulas</h3>
            </div>
            ${topic.formulas.map(f => `
              <div class="formula-display-card">
                <h4 style="font-size: 1.15rem; margin-bottom: 6px;">${f.name}</h4>
                <div class="formula-display-eq">${f.equation}</div>
                <div style="font-size: 0.9rem; color: var(--text-muted); margin: 8px 0;">
                  <strong>Symbols:</strong> ${f.symbols}
                </div>
                <div style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 8px;">
                  <strong>When to use:</strong> ${f.usage}
                </div>
                <div style="background: var(--bg-card); padding: 10px 14px; border-radius: var(--radius-sm); font-size: 0.9rem;">
                  <strong>💡 Example:</strong> ${f.example}
                </div>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <!-- 4. Solved Examples -->
        <div id="section-examples" class="learning-module-section">
          <div class="learning-section-title">
            <span>🧮</span>
            <h3>Solved Step-by-Step Example</h3>
          </div>
          ${topic.solvedExamples.map((ex, idx) => `
            <div class="step-solution-box">
              <h4 style="font-size: 1.1rem; color: #065f46; margin-bottom: 12px;">Problem: ${ex.question}</h4>
              <div style="display: flex; flex-direction: column; gap: 8px;">
                ${ex.steps.map(s => `<div class="step-item" style="color: #047857; font-size: 0.95rem;">${s}</div>`).join('')}
              </div>
              <div style="margin-top: 14px; font-weight: 800; color: #064e3b; font-size: 1.05rem;">
                🎯 Final Answer: ${ex.answer}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- 5. Common Mistakes -->
        <div id="section-mistakes" class="learning-module-section">
          <div class="learning-section-title">
            <span>⚠️</span>
            <h3>Common Mistakes to Avoid</h3>
          </div>
          ${topic.commonMistakes.map(m => `
            <div class="mistake-card">
              <div style="font-weight: 700; color: #be123c; margin-bottom: 4px;">❌ Common Error: ${m.mistake}</div>
              <div style="color: var(--text-main); font-size: 0.92rem;">✅ <strong>Correction:</strong> ${m.correction}</div>
            </div>
          `).join('')}
        </div>

        <!-- 6. Quick Practice Section -->
        <div id="section-quickpractice" class="learning-module-section">
          <div class="learning-section-title">
            <span>📝</span>
            <h3>Quick Concept Check</h3>
          </div>
          <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 20px;">
            Test your understanding before heading into the Practice Generator or full Quiz!
          </p>

          ${topic.quickPractice.map((qp, idx) => `
            <div class="card" style="margin-bottom: 16px; background: var(--bg-card-subtle);">
              <div style="font-weight: 700; font-size: 1.05rem; margin-bottom: 12px;">Q${idx + 1}. ${qp.q}</div>
              <div class="options-grid">
                ${qp.options.map((opt, oIdx) => `
                  <button class="option-btn" onclick="window.appRouter.checkQuickPractice(this, ${oIdx === qp.correct}, '${qp.explanation.replace(/'/g, "\\'")}')">
                    <span class="option-letter">${String.fromCharCode(65 + oIdx)}</span>
                    <span>${opt}</span>
                  </button>
                `).join('')}
              </div>
              <div class="quick-explanation" style="display: none; margin-top: 12px; padding: 10px 14px; border-radius: var(--radius-sm); font-size: 0.9rem;"></div>
            </div>
          `).join('')}

          <div style="margin-top: 24px; display: flex; gap: 12px; flex-wrap: wrap;">
            <button class="btn btn-primary btn-lg" onclick="window.appRouter.navigate('practice', '${topic.id}')">
              Take Full Practice Mode 🧠
            </button>
            <button class="btn btn-secondary btn-lg" onclick="window.appRouter.startTopicQuiz('${topic.id}', '${topic.subjectId}')">
              Take 5-Question Quiz 🎯
            </button>
          </div>
        </div>
      </section>
    `;
  }

  // 5. FORMULA BANK & SEARCH
  static renderFormulas(filterSubject = "all") {
    return `
      <section class="animate-slide-up">
        <div class="section-header">
          <h2>📐 Formula Reference Bank</h2>
          <p>Search essential formulas for Mathematics and Science with symbol definitions, units, and solved examples.</p>
        </div>

        <div class="search-filter-bar">
          <div class="search-input-wrapper">
            <span class="search-input-icon">🔍</span>
            <input type="text" id="formula-search-input" class="search-input" placeholder="Search formulas (e.g. 'Area', 'Speed', 'Force', 'Ohm')..." oninput="window.appRouter.filterFormulas()">
          </div>

          <select id="formula-class-filter" class="filter-select" onchange="window.appRouter.filterFormulas()">
            <option value="all">All Classes (6–10)</option>
            <option value="6">Class 6</option>
            <option value="7">Class 7</option>
            <option value="8">Class 8</option>
            <option value="9">Class 9</option>
            <option value="10">Class 10</option>
          </select>

          <select id="formula-subject-filter" class="filter-select" onchange="window.appRouter.filterFormulas()">
            <option value="all">All Subjects</option>
            <option value="math" ${filterSubject === 'math' ? 'selected' : ''}>Mathematics</option>
            <option value="science" ${filterSubject === 'science' ? 'selected' : ''}>Science / Physics</option>
          </select>
        </div>

        <div id="formula-cards-container" class="formula-cards-grid">
          ${this.renderFormulaCardList(FORMULA_BANK)}
        </div>
      </section>
    `;
  }

  static renderFormulaCardList(formulas) {
    if (formulas.length === 0) {
      return `
        <div class="card" style="grid-column: 1 / -1; text-align: center; padding: 40px;">
          <div style="font-size: 2.5rem; margin-bottom: 8px;">🔍</div>
          <h3>No formulas matched your search</h3>
          <p style="color: var(--text-muted);">Try searching for terms like "Area", "Circle", "Pythagoras", "Force", "Speed", or "Ohm".</p>
        </div>
      `;
    }

    return formulas.map(f => {
      const isSaved = StorageManager.isBookmarked("formulas", f.id);
      return `
        <div class="formula-card">
          <div>
            <div class="formula-card-header">
              <div>
                <span class="badge badge-indigo">Class ${f.class} • ${f.subject}</span>
                <h3 style="font-size: 1.2rem; margin-top: 6px;">${f.name}</h3>
                <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">${f.category}</span>
              </div>
              <button class="bookmark-btn ${isSaved ? 'active' : ''}" title="Save Formula" onclick="window.appRouter.toggleBookmark('formulas', '${f.id}', this)">
                ${isSaved ? '★' : '☆'}
              </button>
            </div>

            <div class="formula-main-eq">${f.equation}</div>

            <div style="margin: 12px 0;">
              <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted); margin-bottom: 6px;">Variables & Units:</div>
              <div class="formula-symbols-grid">
                ${f.variables.map(v => `
                  <div style="background: var(--bg-card-subtle); padding: 6px 10px; border-radius: var(--radius-sm); font-size: 0.82rem;">
                    <strong>${v.symbol}:</strong> ${v.meaning} <span style="color: var(--text-subtle);">(${v.unit})</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <div style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 12px;">
              <strong>When to use:</strong> ${f.whenToUse}
            </div>
          </div>

          <div style="background: var(--primary-light); padding: 10px 14px; border-radius: var(--radius-md); font-size: 0.88rem; border-left: 3px solid var(--primary);">
            <strong>💡 Example:</strong> ${f.example}
          </div>
        </div>
      `;
    }).join('');
  }

  // 6. PRACTICE QUESTION GENERATOR
  static renderPractice(selectedTopicId = "all") {
    return `
      <section class="animate-slide-up">
        <div class="section-header">
          <h2>🧠 Practice Question Generator</h2>
          <p>Choose your difficulty level (Easy 🟢, Medium 🟡, Hard 🔴) and solve interactive questions with step-by-step solutions.</p>
        </div>

        <div class="search-filter-bar">
          <select id="practice-topic-select" class="filter-select" style="flex: 1;" onchange="window.appRouter.filterPracticeQuestions()">
            <option value="all">All Topics (Mixed Practice)</option>
            ${Object.values(CURRICULUM.topics).map(t => `
              <option value="${t.id}" ${t.id === selectedTopicId ? 'selected' : ''}>
                Class ${t.classId} • ${t.title}
              </option>
            `).join('')}
          </select>

          <select id="practice-difficulty-select" class="filter-select" onchange="window.appRouter.filterPracticeQuestions()">
            <option value="all">All Difficulties</option>
            <option value="Easy">🟢 Easy (Basic Understanding)</option>
            <option value="Medium">🟡 Medium (Application-based)</option>
            <option value="Hard">🔴 Hard (Problem-solving)</option>
          </select>
        </div>

        <div id="practice-questions-container" style="display: flex; flex-direction: column; gap: 20px;">
          ${this.renderPracticeQuestionsList(QUESTION_BANK, selectedTopicId)}
        </div>
      </section>
    `;
  }

  static renderPracticeQuestionsList(questions, filterTopic = "all", filterDiff = "all") {
    let filtered = [...questions];
    if (filterTopic && filterTopic !== "all") {
      filtered = filtered.filter(q => q.topicId === filterTopic);
    }
    if (filterDiff && filterDiff !== "all") {
      filtered = filtered.filter(q => q.difficulty.toLowerCase() === filterDiff.toLowerCase());
    }

    if (filtered.length === 0) {
      return `
        <div class="card" style="text-align: center; padding: 48px;">
          <div style="font-size: 2.5rem; margin-bottom: 8px;">🧩</div>
          <h3>No practice questions matched this filter</h3>
          <p style="color: var(--text-muted);">Try selecting "All Topics" or "All Difficulties" to view the full repository.</p>
        </div>
      `;
    }

    return filtered.map((q, idx) => {
      const diffBadge = q.difficulty === 'Easy' ? 'badge-emerald' : (q.difficulty === 'Medium' ? 'badge-amber' : 'badge-rose');
      const isSaved = StorageManager.isBookmarked("questions", q.id);

      return `
        <div class="card" id="practice-q-${q.id}">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="badge ${diffBadge}">${q.difficulty}</span>
              <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600;">Class ${q.classId} • ${q.topicName}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
              <span class="badge badge-amber">+${q.xp} XP</span>
              <button class="bookmark-btn ${isSaved ? 'active' : ''}" onclick="window.appRouter.toggleBookmark('questions', '${q.id}', this)">
                ${isSaved ? '★' : '☆'}
              </button>
            </div>
          </div>

          <div style="font-size: 1.15rem; font-weight: 700; margin-bottom: 16px; line-height: 1.45;">
            Q${idx + 1}. ${q.question}
          </div>

          <div class="options-grid" style="margin-bottom: 16px;">
            ${q.options.map((opt, oIdx) => `
              <button class="option-btn" data-qid="${q.id}" data-opt="${opt}" onclick="window.appRouter.selectPracticeOption('${q.id}', this)">
                <span class="option-letter">${String.fromCharCode(65 + oIdx)}</span>
                <span>${opt}</span>
              </button>
            `).join('')}
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between;">
            <button class="btn btn-primary" onclick="window.appRouter.submitPracticeAnswer('${q.id}')">
              Submit Answer ✓
            </button>
            <div id="practice-feedback-${q.id}" style="font-weight: 700; font-size: 0.95rem;"></div>
          </div>

          <div id="practice-explanation-${q.id}" style="display: none; margin-top: 16px; padding: 14px 18px; border-radius: var(--radius-md); background: var(--bg-card-subtle); border-left: 4px solid var(--primary); font-size: 0.92rem;">
            <strong style="color: var(--primary);">Explanation:</strong> ${q.explanation}
          </div>
        </div>
      `;
    }).join('');
  }

  // 7. QUIZ MODE SETUP & ARENA
  static renderQuizSetup() {
    const state = StorageManager.getState();
    const currentClass = state.profile.selectedClass || 9;

    return `
      <section class="animate-slide-up">
        <div class="quiz-setup-card">
          <div style="text-align: center; margin-bottom: 28px;">
            <div style="font-size: 3rem; margin-bottom: 8px;">🎯</div>
            <h2>Quiz Arena Setup</h2>
            <p style="color: var(--text-muted);">Configure your timed challenge, test your knowledge, and earn leader XP!</p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div>
              <label style="display: block; font-weight: 700; font-size: 0.9rem; margin-bottom: 6px;">Class Level</label>
              <select id="quiz-class-select" class="filter-select" style="width: 100%;">
                <option value="6" ${currentClass === 6 ? 'selected' : ''}>Class 6</option>
                <option value="7" ${currentClass === 7 ? 'selected' : ''}>Class 7</option>
                <option value="8" ${currentClass === 8 ? 'selected' : ''}>Class 8</option>
                <option value="9" ${currentClass === 9 ? 'selected' : ''}>Class 9</option>
                <option value="10" ${currentClass === 10 ? 'selected' : ''}>Class 10</option>
              </select>
            </div>

            <div>
              <label style="display: block; font-weight: 700; font-size: 0.9rem; margin-bottom: 6px;">Subject</label>
              <select id="quiz-subject-select" class="filter-select" style="width: 100%;">
                <option value="all">All Subjects (Grand Challenge)</option>
                <option value="math">Mathematics</option>
                <option value="science">Science</option>
                <option value="social">Social Studies</option>
                <option value="english">English</option>
              </select>
            </div>

            <div>
              <label style="display: block; font-weight: 700; font-size: 0.9rem; margin-bottom: 6px;">Difficulty</label>
              <select id="quiz-difficulty-select" class="filter-select" style="width: 100%;">
                <option value="all">Mixed (Easy + Medium + Hard)</option>
                <option value="Easy">🟢 Easy</option>
                <option value="Medium">🟡 Medium</option>
                <option value="Hard">🔴 Hard</option>
              </select>
            </div>

            <div>
              <label style="display: block; font-weight: 700; font-size: 0.9rem; margin-bottom: 6px;">Number of Questions</label>
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
                <button class="btn btn-secondary count-picker-btn selected" data-count="5" onclick="window.appRouter.pickQuizCount(5, this)">5 Questions</button>
                <button class="btn btn-secondary count-picker-btn" data-count="10" onclick="window.appRouter.pickQuizCount(10, this)">10 Questions</button>
                <button class="btn btn-secondary count-picker-btn" data-count="20" onclick="window.appRouter.pickQuizCount(20, this)">20 Questions</button>
              </div>
            </div>

            <button class="btn btn-primary btn-lg" style="margin-top: 10px;" onclick="window.appRouter.launchQuizFromSetup()">
              Start Timed Quiz 🚀
            </button>
          </div>
        </div>
      </section>
    `;
  }

  // 8. WEAK AREA DETECTION & ANALYTICS
  static renderAnalytics() {
    const metrics = AnalyticsEngine.getOverviewMetrics();
    const masteryList = AnalyticsEngine.getTopicMasteryList();
    const state = StorageManager.getState();
    const attempts = state.progress.quizAttempts || [];

    return `
      <section class="animate-slide-up">
        <div class="section-header">
          <h2>📊 Progress Analytics & Weak Topic Detection</h2>
          <p>Real-time mastery tracking across all school topics with personalized remedial learning paths.</p>
        </div>

        <!-- Metrics Overview Row -->
        <div class="features-grid" style="margin-bottom: 32px;">
          <div class="card" style="text-align: center;">
            <div style="font-size: 2.2rem; font-weight: 800; color: var(--primary);">${metrics.xp}</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); font-weight: 700;">Total XP Points ⭐</div>
          </div>
          <div class="card" style="text-align: center;">
            <div style="font-size: 2.2rem; font-weight: 800; color: var(--accent-rose);">${metrics.streak} 🔥</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); font-weight: 700;">Day Streak</div>
          </div>
          <div class="card" style="text-align: center;">
            <div style="font-size: 2.2rem; font-weight: 800; color: var(--accent-emerald);">${metrics.averageScore}%</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); font-weight: 700;">Average Quiz Accuracy 🎯</div>
          </div>
          <div class="card" style="text-align: center;">
            <div style="font-size: 2.2rem; font-weight: 800; color: var(--accent-amber);">${metrics.totalQuestionsAnswered}</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); font-weight: 700;">Questions Solved 🧩</div>
          </div>
        </div>

        <!-- Weak Topic Detection Banner & Personalized Learning Loop -->
        ${metrics.weakTopics.length > 0 ? `
          <div class="weak-topic-banner">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
              <div>
                <span class="badge badge-rose">Attention Recommended</span>
                <h3 style="font-size: 1.4rem; color: #9f1239; margin-top: 6px;">
                  ⚠️ Weak Area Detected: ${metrics.weakTopics[0].title} (${metrics.weakTopics[0].accuracy}% Accuracy)
                </h3>
                <p style="color: #881337; font-size: 0.95rem;">
                  StudySpark AI has generated a customized 4-step recovery loop to turn this into a strong topic!
                </p>
              </div>
            </div>

            <div class="weak-loop-steps-grid">
              ${(AnalyticsEngine.getRecommendedRecoveryPlan(metrics.weakTopics[0].topicId)?.steps || []).map(s => `
                <div class="weak-step-card">
                  <div>
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                      <span style="font-size: 1.4rem;">${s.icon}</span>
                      <span class="badge badge-indigo">Step ${s.stepNumber}</span>
                    </div>
                    <h4 style="font-size: 1.05rem; margin-bottom: 4px;">${s.title}</h4>
                    <p style="font-size: 0.82rem; color: var(--text-muted);">${s.desc}</p>
                  </div>
                  <button class="btn btn-primary btn-sm" style="margin-top: 14px;" onclick="window.appRouter.navigate('${s.actionView}', '${s.param}')">
                    ${s.actionLabel} →
                  </button>
                </div>
              `).join('')}
            </div>
          </div>
        ` : `
          <div class="card" style="background: var(--accent-emerald-light); border-color: #a7f3d0; margin-bottom: 32px; padding: 24px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <span style="font-size: 2rem;">🌟</span>
              <div>
                <h3 style="color: #065f46;">Outstanding Work! No Weak Topics Detected</h3>
                <p style="color: #047857; font-size: 0.92rem;">All your tested topics have high mastery rates above 80%. Keep taking quizzes to maintain your edge!</p>
              </div>
            </div>
          </div>
        `}

        <!-- Topic Mastery Table / Cards -->
        <div class="card" style="margin-bottom: 32px;">
          <h3 style="font-size: 1.3rem; margin-bottom: 16px;">Topic-Wise Performance Breakdown</h3>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            ${masteryList.map(t => `
              <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; padding: 12px 16px; background: var(--bg-card-subtle); border-radius: var(--radius-md);">
                <div>
                  <div style="font-weight: 700; font-size: 1rem;">${t.title}</div>
                  <div style="font-size: 0.8rem; color: var(--text-muted);">Class ${t.classId} • Chapter: ${t.chapter}</div>
                </div>
                <div style="display: flex; align-items: center; gap: 14px;">
                  <span style="font-weight: 800; font-size: 0.95rem; color: ${t.statusColor};">${t.statusBadge}</span>
                  <button class="btn btn-secondary btn-sm" onclick="window.appRouter.navigate('practice', '${t.topicId}')">
                    Practice
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Recent Quiz History -->
        <div class="card">
          <h3 style="font-size: 1.3rem; margin-bottom: 16px;">Recent Quiz History</h3>
          ${attempts.length > 0 ? `
            <div style="display: flex; flex-direction: column; gap: 10px;">
              ${attempts.map(a => `
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; padding: 12px 16px; border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                  <div>
                    <div style="font-weight: 700; font-size: 0.95rem;">${a.topicTitle || 'Mixed Quiz'}</div>
                    <div style="font-size: 0.8rem; color: var(--text-muted);">${new Date(a.date).toLocaleDateString()} • ${a.total} Questions • Time: ${a.timeTakenSeconds}s</div>
                  </div>
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <span class="badge ${a.scorePercent >= 80 ? 'badge-emerald' : (a.scorePercent >= 60 ? 'badge-amber' : 'badge-rose')}">
                      ${a.correct}/${a.total} (${a.scorePercent}%)
                    </span>
                  </div>
                </div>
              `).join('')}
            </div>
          ` : `
            <p style="color: var(--text-muted); text-align: center; padding: 20px;">No quizzes taken yet. Launch Quiz Arena to record your first score!</p>
          `}
        </div>
      </section>
    `;
  }

  // 9. ASK STUDYSPARK AI
  static renderAI() {
    const state = StorageManager.getState();
    const history = state.aiHistory || [];

    return `
      <section class="animate-slide-up">
        <div class="ai-chat-card">
          <div class="ai-chat-header">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="font-size: 1.8rem;">🤖</span>
              <div>
                <h3 style="color: #ffffff; font-size: 1.15rem;">Ask StudySpark AI</h3>
                <span style="font-size: 0.78rem; opacity: 0.9;">Safe & Age-Appropriate Assistant (Classes 6–10)</span>
              </div>
            </div>
            <button class="btn btn-secondary btn-sm" style="color: #ffffff; border-color: rgba(255,255,255,0.4);" onclick="window.appRouter.clearAIChat()">
              Clear Chat 🗑️
            </button>
          </div>

          <div id="ai-messages-container" class="ai-messages-area">
            ${history.map(msg => `
              <div class="chat-bubble ${msg.sender === 'user' ? 'user-msg' : 'ai-msg'}">
                ${msg.sender === 'ai' ? msg.text.replace(/\n/g, '<br/>') : msg.text}
              </div>
            `).join('')}
          </div>

          <!-- Suggested Prompt Chips -->
          <div class="ai-prompt-chips-bar">
            <button class="prompt-chip" onclick="window.appRouter.sendPromptToAI('Explain Photosynthesis simply for Class 7')">🌱 Photosynthesis</button>
            <button class="prompt-chip" onclick="window.appRouter.sendPromptToAI('What is the difference between mass and weight?')">⚖️ Mass vs Weight</button>
            <button class="prompt-chip" onclick="window.appRouter.sendPromptToAI('What is the formula for speed and acceleration?')">⚡ Speed & Acceleration</button>
            <button class="prompt-chip" onclick="window.appRouter.sendPromptToAI('Explain Pythagoras theorem with a solved example')">📐 Pythagoras Theorem</button>
            <button class="prompt-chip" onclick="window.appRouter.sendPromptToAI('Why does ice float on water?')">🧊 Why Ice Floats</button>
          </div>

          <form class="ai-input-bar" onsubmit="window.appRouter.handleAISubmit(event)">
            <input type="text" id="ai-user-input" class="ai-chat-input" placeholder="Ask any question from Math, Science, Social, or English..." autocomplete="off">
            <button type="submit" class="btn btn-primary" style="border-radius: var(--radius-full); padding: 10px 18px;">
              Send 🚀
            </button>
          </form>
        </div>

        <div style="margin-top: 14px; text-align: center; font-size: 0.78rem; color: var(--text-muted);">
          🛡️ Safe for school students. AI explanations should be verified with your school textbook and teacher when needed.
        </div>
      </section>
    `;
  }

  // 10. DAILY CHALLENGE PAGE
  static renderDailyChallenge() {
    const state = StorageManager.getState();
    const todayIndex = new Date().getDay();
    const challenge = DAILY_CHALLENGES.find(c => c.dayIndex === todayIndex) || DAILY_CHALLENGES[0];

    return `
      <section class="animate-slide-up">
        <div class="quiz-setup-card">
          <div style="text-align: center; margin-bottom: 24px;">
            <span class="badge badge-amber" style="font-size: 0.85rem;">${challenge.badge}</span>
            <h2 style="margin-top: 10px;">${challenge.title}</h2>
            <p style="color: var(--text-muted); font-size: 0.95rem;">Subject: ${challenge.subject} • Topic: ${challenge.topic}</p>
          </div>

          <div class="card" style="background: var(--bg-card-subtle); margin-bottom: 24px;">
            <div style="font-size: 1.25rem; font-weight: 700; margin-bottom: 16px; line-height: 1.45;">
              ${challenge.question}
            </div>

            <div class="options-grid" id="daily-options-grid">
              ${challenge.options.map((opt, oIdx) => `
                <button class="option-btn" onclick="window.appRouter.selectDailyOption(this, '${opt}')">
                  <span class="option-letter">${String.fromCharCode(65 + oIdx)}</span>
                  <span>${opt}</span>
                </button>
              `).join('')}
            </div>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;">
            <button class="btn btn-emerald btn-lg" onclick="window.appRouter.submitDailyChallenge('${challenge.correctAnswer}', ${challenge.rewardXP}, '${challenge.explanation.replace(/'/g, "\\'")}')">
              Submit Daily Answer (+${challenge.rewardXP} XP) ⚡
            </button>
            <button class="btn btn-secondary btn-sm" onclick="alert('💡 Hint: ${challenge.hint}')">
              Show Hint 💡
            </button>
          </div>

          <div id="daily-explanation-box" style="display: none; padding: 18px; border-radius: var(--radius-md); background: var(--accent-emerald-light); border: 1px solid #a7f3d0; font-size: 0.95rem;">
            <!-- Populated on submit -->
          </div>
        </div>
      </section>
    `;
  }

  // 11. BOOKMARKS & SAVED CONTENT
  static renderBookmarks() {
    const state = StorageManager.getState();
    const savedTopicIds = state.bookmarks.topics || [];
    const savedFormulaIds = state.bookmarks.formulas || [];
    const savedQuestionIds = state.bookmarks.questions || [];

    const savedTopics = savedTopicIds.map(id => CURRICULUM.topics[id]).filter(Boolean);
    const savedFormulas = savedFormulaIds.map(id => FORMULA_BANK.find(f => f.id === id)).filter(Boolean);
    const savedQuestions = savedQuestionIds.map(id => QUESTION_BANK.find(q => q.id === id)).filter(Boolean);

    return `
      <section class="animate-slide-up">
        <div class="section-header">
          <h2>⭐ My Saved Content</h2>
          <p>Quick access to your bookmarked topics, formulas, and tricky practice questions.</p>
        </div>

        <div style="margin-bottom: 32px;">
          <h3 style="font-size: 1.3rem; margin-bottom: 14px;">📖 Bookmarked Topics (${savedTopics.length})</h3>
          ${savedTopics.length > 0 ? `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
              ${savedTopics.map(t => `
                <div class="card card-hover">
                  <span class="badge badge-indigo">Class ${t.classId} • ${t.subcategory}</span>
                  <h4 style="font-size: 1.15rem; margin: 8px 0 6px 0;">${t.title}</h4>
                  <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 12px;">${t.tagline}</p>
                  <button class="btn btn-primary btn-sm" onclick="window.appRouter.navigate('learn', '${t.id}')">
                    Open Topic 📖
                  </button>
                </div>
              `).join('')}
            </div>
          ` : '<p style="color: var(--text-muted);">No topics bookmarked yet.</p>'}
        </div>

        <div style="margin-bottom: 32px;">
          <h3 style="font-size: 1.3rem; margin-bottom: 14px;">📐 Bookmarked Formulas (${savedFormulas.length})</h3>
          ${savedFormulas.length > 0 ? `
            <div class="formula-cards-grid">
              ${this.renderFormulaCardList(savedFormulas)}
            </div>
          ` : '<p style="color: var(--text-muted);">No formulas bookmarked yet.</p>'}
        </div>

        <div>
          <h3 style="font-size: 1.3rem; margin-bottom: 14px;">❓ Saved Practice Questions (${savedQuestions.length})</h3>
          ${savedQuestions.length > 0 ? `
            <div style="display: flex; flex-direction: column; gap: 16px;">
              ${this.renderPracticeQuestionsList(savedQuestions)}
            </div>
          ` : '<p style="color: var(--text-muted);">No questions saved yet.</p>'}
        </div>
      </section>
    `;
  }

  // 12. STUDENT PROFILE & GAMIFICATION BADGES
  static renderProfile() {
    const state = StorageManager.getState();
    const unlocked = state.gamification.unlockedBadges || [];

    return `
      <section class="animate-slide-up">
        <!-- Profile Header -->
        <div class="card glass-card" style="margin-bottom: 32px; padding: 32px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
          <div style="display: flex; align-items: center; gap: 20px;">
            <div style="font-size: 3.5rem; width: 80px; height: 80px; border-radius: var(--radius-full); background: var(--primary-light); display: flex; align-items: center; justify-content: center;">
              ${state.profile.avatar || '🦊'}
            </div>
            <div>
              <h2>Welcome back, ${state.profile.name}! 👋</h2>
              <p style="color: var(--text-muted); font-size: 0.95rem;">
                Enrolled in <strong>Class ${state.profile.selectedClass}</strong> • Level ${state.gamification.level} (${state.gamification.levelTitle})
              </p>
            </div>
          </div>

          <div style="display: flex; gap: 12px;">
            <div class="stat-pill xp-pill" style="font-size: 1.1rem; padding: 10px 18px;">
              ⭐ ${state.gamification.xp} XP
            </div>
            <div class="stat-pill streak-pill" style="font-size: 1.1rem; padding: 10px 18px;">
              🔥 ${state.gamification.streak} Days
            </div>
          </div>
        </div>

        <!-- Badges Showcase -->
        <div class="card" style="margin-bottom: 32px;">
          <h3 style="font-size: 1.3rem; margin-bottom: 18px;">🏆 Achievement Badges</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
            ${BADGES.map(b => {
              const isUnlocked = unlocked.includes(b.id);
              return `
                <div style="background: var(--bg-card-subtle); border: 1.5px solid ${isUnlocked ? '#fcd34d' : 'var(--border-color)'}; border-radius: var(--radius-md); padding: 16px; text-align: center; opacity: ${isUnlocked ? '1' : '0.55'};">
                  <div style="font-size: 2.5rem; margin-bottom: 6px;">${b.icon}</div>
                  <h4 style="font-size: 1rem; margin-bottom: 4px;">${b.name}</h4>
                  <p style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 8px;">${b.description}</p>
                  <span class="badge ${isUnlocked ? 'badge-amber' : 'badge-indigo'}">
                    ${isUnlocked ? 'Unlocked 🌟' : 'Locked 🔒'}
                  </span>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Profile Preferences -->
        <div class="card">
          <h3 style="font-size: 1.3rem; margin-bottom: 16px;">⚙️ Student Preferences</h3>
          <form onsubmit="window.appRouter.saveProfilePreferences(event)">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-bottom: 20px;">
              <div>
                <label style="display: block; font-weight: 700; font-size: 0.9rem; margin-bottom: 6px;">Student Name</label>
                <input type="text" id="pref-name-input" class="search-input" value="${state.profile.name}" style="padding-left: 14px;">
              </div>
              <div>
                <label style="display: block; font-weight: 700; font-size: 0.9rem; margin-bottom: 6px;">Current Class</label>
                <select id="pref-class-select" class="filter-select" style="width: 100%;">
                  <option value="6" ${state.profile.selectedClass === 6 ? 'selected' : ''}>Class 6</option>
                  <option value="7" ${state.profile.selectedClass === 7 ? 'selected' : ''}>Class 7</option>
                  <option value="8" ${state.profile.selectedClass === 8 ? 'selected' : ''}>Class 8</option>
                  <option value="9" ${state.profile.selectedClass === 9 ? 'selected' : ''}>Class 9</option>
                  <option value="10" ${state.profile.selectedClass === 10 ? 'selected' : ''}>Class 10</option>
                </select>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Save Changes ✓</button>
          </form>
        </div>
      </section>
    `;
  }
}
