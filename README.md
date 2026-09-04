# StudySpark AI ⚡

> **Modern Gamified Learning & Quiz Platform for Classes 6–10**

StudySpark AI is an interactive, gamified educational web application designed for middle and high school students (Classes 6 through 10 across CBSE, ICSE, and State Boards). It helps students master concepts across Mathematics, Science, Social Studies, and English with interactive flashcards, formula banks, multi-mode quizzes, daily streaks, XP rewards, and AI-powered doubt assistance.

---

## 🌟 Key Features

- 🎓 **Multi-Class Curriculum (Classes 6–10):** Tailored chapter topics for Mathematics, Physics, Chemistry, Biology, History, Civics, Geography, and English Grammar.
- 🎯 **Interactive Quiz Arena:** 
  - Standard MCQ Quizzes with instant explanations & formulas
  - Time-Attack Speed Mode
  - Topic-specific Practice drills
- 📐 **Comprehensive Formula Bank:** Quick revision cards and formulas organized by class and subject.
- 🔥 **Gamification & Daily Challenges:**
  - Daily Study Streak tracking
  - XP Points & Level progression
  - Unlockable achievement badges
  - Real-time Leaderboard simulation
- 🤖 **AI Study Assistant:** Interactive doubt solver with step-by-step concept explanations and practice suggestions.
- 📊 **Performance Analytics & Weak Topic Detection:** Tracks accuracy percentage, topic mastery, and recommends focus areas.
- ⭐ **Bookmarks & Saved Questions:** Save important questions, notes, and formulas for quick exam revision.
- 🌓 **Modern UI / Responsive Design:** Glassmorphism aesthetics, dark mode support, and smooth mobile & desktop navigation.

---

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Edge, Firefox, Safari)
- Python 3.x (or any local static HTTP server)

### Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/naninikhil417-bot/student-quiz.git
   cd student-quiz
   ```

2. **Start a local HTTP server:**
   - Using Python:
     ```bash
     py -m http.server 8000
     # or
     python -m http.server 8000
     ```
   - Using Node / npx:
     ```bash
     npx serve .
     ```

3. **Open in browser:**
   Navigate to [http://localhost:8000](http://localhost:8000)

---

## 📁 Project Structure

```
student-quiz/
├── index.html                 # Main application entry point & layout
├── README.md                  # Project documentation
├── css/
│   └── styles.css             # Comprehensive design system & responsive styling
└── js/
    ├── app.js                 # App initialization & routing coordinator
    ├── data/
    │   ├── classesData.js     # Class and subject curriculum catalog
    │   ├── dailyChallenges.js # Daily rotating challenges & quest goals
    │   ├── formulasData.js    # Formula repository by subject and topic
    │   └── questionBank.js    # Curated questions with solutions & metadata
    └── modules/
        ├── aiAssistant.js     # Smart doubt solver & interactive AI chatbot
        ├── analytics.js       # Student progress, accuracy & weak area analytics
        ├── bookmarks.js       # Bookmarks & saved questions management
        ├── formulaBank.js     # Formula explorer & search view
        ├── gamification.js    # XP, streaks, levels, and badge awards
        ├── profile.js         # Student profile & avatar customizer
        ├── quizEngine.js      # Quiz runner, timer, score tallying & review
        ├── search.js          # Global search modal across questions & formulas
        └── studyMaterial.js   # Chapter notes, summaries, and flashcards
```

---

## 🛠️ Built With

- **HTML5 & Semantic Elements**
- **Vanilla CSS3** (Custom Properties, Flexbox, CSS Grid, Glassmorphism)
- **Modular JavaScript (ES6 Modules)**
- **LocalStorage API** (Persistent student progress, XP, streak, and quiz logs)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
