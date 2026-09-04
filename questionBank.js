/**
 * StudySpark AI - Complete Practice & Quiz Question Bank
 * Categorized by Class, Subject, Topic, Difficulty (Easy, Medium, Hard), and Type.
 */

export const QUESTION_BANK = [
  // CLASS 6 - MATHEMATICS (Integers)
  {
    id: "q_c6_m_int_01",
    classId: 6,
    subjectId: "math",
    topicId: "c6_math_integers",
    topicName: "Integers & Number Line",
    difficulty: "Easy",
    type: "mcq",
    question: "Which of the following integers has the greatest value?",
    options: ["-15", "-2", "0", "-100"],
    correctAnswer: "0",
    explanation: "On a horizontal number line, 0 lies to the right of all negative integers, making it greater than any negative integer.",
    xp: 10
  },
  {
    id: "q_c6_m_int_02",
    classId: 6,
    subjectId: "math",
    topicId: "c6_math_integers",
    topicName: "Integers & Number Line",
    difficulty: "Easy",
    type: "true_false",
    question: "The additive inverse of -19 is +19.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "When you add -19 and +19, the sum equals 0. Hence, +19 is the exact additive inverse of -19.",
    xp: 10
  },
  {
    id: "q_c6_m_int_03",
    classId: 6,
    subjectId: "math",
    topicId: "c6_math_integers",
    topicName: "Integers & Number Line",
    difficulty: "Medium",
    type: "numerical",
    question: "Evaluate the expression: (-35) - (-15) + 10",
    options: ["-10", "-40", "-30", "+10"],
    correctAnswer: "-10",
    explanation: "Step 1: (-35) - (-15) = -35 + 15 = -20. Step 2: -20 + 10 = -10.",
    xp: 15
  },
  {
    id: "q_c6_m_int_04",
    classId: 6,
    subjectId: "math",
    topicId: "c6_math_integers",
    topicName: "Integers & Number Line",
    difficulty: "Hard",
    type: "mcq",
    question: "A submarine was cruising at 350 meters below sea level (-350 m). It ascended 120 meters and then dove 80 meters deeper. What is its current depth?",
    options: ["-310 m", "-390 m", "-150 m", "-470 m"],
    correctAnswer: "-310 m",
    explanation: "Current position = -350 + 120 - 80 = -230 - 80 = -310 meters.",
    xp: 25
  },

  // CLASS 7 - SCIENCE (Heat)
  {
    id: "q_c7_s_heat_01",
    classId: 7,
    subjectId: "science",
    topicId: "c7_science_heat",
    topicName: "Heat & Temperature",
    difficulty: "Easy",
    type: "mcq",
    question: "What is the normal body temperature of a healthy human being in Celsius?",
    options: ["37°C", "98.6°C", "35°C", "42°C"],
    correctAnswer: "37°C",
    explanation: "Standard normal human body temperature is 37°C (which converts to 98.6°F on the Fahrenheit scale).",
    xp: 10
  },
  {
    id: "q_c7_s_heat_02",
    classId: 7,
    subjectId: "science",
    topicId: "c7_science_heat",
    topicName: "Heat & Temperature",
    difficulty: "Medium",
    type: "mcq",
    question: "Why do handles of cooking utensils often have wooden or bakelite coverings?",
    options: [
      "Because wood is a good conductor of heat",
      "Because wood is a poor conductor (insulator) of heat",
      "To make them heavier",
      "To absorb heat faster"
    ],
    correctAnswer: "Because wood is a poor conductor (insulator) of heat",
    explanation: "Wood and bakelite are heat insulators, preventing heat from the pan from burning your hands while cooking.",
    xp: 15
  },
  {
    id: "q_c7_s_heat_03",
    classId: 7,
    subjectId: "science",
    topicId: "c7_science_heat",
    topicName: "Heat & Temperature",
    difficulty: "Hard",
    type: "mcq",
    question: "In which of the following processes does heat transfer occur without needing any material medium?",
    options: ["Conduction", "Convection", "Radiation", "Expansion"],
    correctAnswer: "Radiation",
    explanation: "Radiation transfers thermal energy via electromagnetic infrared waves, allowing heat from the Sun to travel through the empty vacuum of space.",
    xp: 25
  },

  // CLASS 8 - MATHEMATICS (Algebraic Expressions)
  {
    id: "q_c8_m_alg_01",
    classId: 8,
    subjectId: "math",
    topicId: "c8_math_algebra",
    topicName: "Algebraic Expressions & Identities",
    difficulty: "Easy",
    type: "mcq",
    question: "Which formula represents the identity (a + b)(a - b)?",
    options: ["a² + b²", "a² - b²", "a² - 2ab + b²", "(a - b)²"],
    correctAnswer: "a² - b²",
    explanation: "(a + b)(a - b) = a² - ab + ba - b² = a² - b² (the cross-terms cancel out).",
    xp: 10
  },
  {
    id: "q_c8_m_alg_02",
    classId: 8,
    subjectId: "math",
    topicId: "c8_math_algebra",
    topicName: "Algebraic Expressions & Identities",
    difficulty: "Medium",
    type: "numerical",
    question: "Using algebraic identity, evaluate: (103)²",
    options: ["10609", "10009", "10900", "10309"],
    correctAnswer: "10609",
    explanation: "(100 + 3)² = 100² + 2(100)(3) + 3² = 10000 + 600 + 9 = 10609.",
    xp: 15
  },
  {
    id: "q_c8_m_alg_03",
    classId: 8,
    subjectId: "math",
    topicId: "c8_math_algebra",
    topicName: "Algebraic Expressions & Identities",
    difficulty: "Hard",
    type: "mcq",
    question: "If x + (1/x) = 5, what is the value of x² + (1/x²)?",
    options: ["25", "23", "27", "21"],
    correctAnswer: "23",
    explanation: "Square both sides: (x + 1/x)² = 5² => x² + 2(x)(1/x) + 1/x² = 25 => x² + 2 + 1/x² = 25 => x² + 1/x² = 23.",
    xp: 25
  },

  // CLASS 9 - SCIENCE (Motion & Kinematics)
  {
    id: "q_c9_s_mot_01",
    classId: 9,
    subjectId: "science",
    topicId: "c9_science_motion",
    topicName: "Equations of Motion",
    difficulty: "Easy",
    type: "mcq",
    question: "What is the SI unit of acceleration?",
    options: ["m/s", "m/s²", "km/h", "kg·m/s"],
    correctAnswer: "m/s²",
    explanation: "Acceleration is rate of change of velocity per unit time (m/s / s = m/s²).",
    xp: 10
  },
  {
    id: "q_c9_s_mot_02",
    classId: 9,
    subjectId: "science",
    topicId: "c9_science_motion",
    topicName: "Equations of Motion",
    difficulty: "Medium",
    type: "numerical",
    question: "A car accelerating at 2 m/s² starts from rest (u = 0). What is its velocity after 6 seconds?",
    options: ["8 m/s", "12 m/s", "24 m/s", "36 m/s"],
    correctAnswer: "12 m/s",
    explanation: "Using 1st equation of motion: v = u + at = 0 + (2)(6) = 12 m/s.",
    xp: 15
  },
  {
    id: "q_c9_s_mot_03",
    classId: 9,
    subjectId: "science",
    topicId: "c9_science_motion",
    topicName: "Equations of Motion",
    difficulty: "Hard",
    type: "numerical",
    question: "A stone is dropped from a 45-meter high cliff (u = 0, g = 10 m/s²). How many seconds does it take to strike the ground?",
    options: ["3 seconds", "4.5 seconds", "9 seconds", "2.1 seconds"],
    correctAnswer: "3 seconds",
    explanation: "Using s = ut + 0.5gt²: 45 = 0 + 0.5(10)t² => 45 = 5t² => t² = 9 => t = 3 seconds.",
    xp: 25
  },

  // CLASS 10 - MATHEMATICS (Trigonometry)
  {
    id: "q_c10_m_trig_01",
    classId: 10,
    subjectId: "math",
    topicId: "c10_math_trig",
    topicName: "Trigonometry Ratios",
    difficulty: "Easy",
    type: "mcq",
    question: "What is the exact value of sin 30°?",
    options: ["1/2", "√3/2", "1/√2", "0"],
    correctAnswer: "1/2",
    explanation: "From standard trigonometric ratio table, sin 30° = 1/2.",
    xp: 10
  },
  {
    id: "q_c10_m_trig_02",
    classId: 10,
    subjectId: "math",
    topicId: "c10_math_trig",
    topicName: "Trigonometry Ratios",
    difficulty: "Medium",
    type: "mcq",
    question: "Evaluate: (1 + tan² θ) · cos² θ",
    options: ["1", "sin² θ", "sec² θ", "tan θ"],
    correctAnswer: "1",
    explanation: "Using identity 1 + tan²θ = sec²θ. Thus sec²θ · cos²θ = (1/cos²θ) · cos²θ = 1.",
    xp: 15
  },
  {
    id: "q_c10_m_trig_03",
    classId: 10,
    subjectId: "math",
    topicId: "c10_math_trig",
    topicName: "Trigonometry Ratios",
    difficulty: "Hard",
    type: "mcq",
    question: "If sin θ + sin² θ = 1, then what is the value of (cos² θ + cos⁴ θ)?",
    options: ["0", "1", "2", "1/2"],
    correctAnswer: "1",
    explanation: "Given sin θ = 1 - sin² θ = cos² θ. Squaring both sides: sin² θ = cos⁴ θ. Thus cos² θ + cos⁴ θ = sin θ + sin² θ = 1.",
    xp: 25
  },

  // CLASS 10 - SCIENCE (Life Processes)
  {
    id: "q_c10_s_life_01",
    classId: 10,
    subjectId: "science",
    topicId: "c10_science_life",
    topicName: "Life Processes",
    difficulty: "Easy",
    type: "mcq",
    question: "During photosynthesis, oxygen is released as a byproduct due to the splitting of which molecule?",
    options: ["Carbon Dioxide (CO2)", "Water (H2O)", "Glucose", "Chlorophyll"],
    correctAnswer: "Water (H2O)",
    explanation: "Photolysis (splitting of water molecules H2O) during light reactions releases oxygen gas O2 into the atmosphere.",
    xp: 10
  },
  {
    id: "q_c10_s_life_02",
    classId: 10,
    subjectId: "science",
    topicId: "c10_science_life",
    topicName: "Life Processes",
    difficulty: "Medium",
    type: "mcq",
    question: "What is the internal energy reserve form in plants?",
    options: ["Glycogen", "Starch", "Protein", "Fatty Acids"],
    correctAnswer: "Starch",
    explanation: "Carbohydrates not used immediately by plants are stored in the form of Starch, which serves as internal energy reserve.",
    xp: 15
  },

  // CLASS 9 - SOCIAL STUDIES (Civics)
  {
    id: "q_c9_soc_civ_01",
    classId: 9,
    subjectId: "social",
    topicId: "c9_social_civics",
    topicName: "Constitutional Design",
    difficulty: "Easy",
    type: "mcq",
    question: "On which date did the Constitution of India officially come into effect?",
    options: ["15 August 1947", "26 November 1949", "26 January 1950", "2 October 1950"],
    correctAnswer: "26 January 1950",
    explanation: "The Constitution was adopted on 26 Nov 1949 and came into legal effect on 26 Jan 1950, commemorated as Republic Day.",
    xp: 10
  },

  // CLASS 8 - ENGLISH (Tenses)
  {
    id: "q_c8_eng_ten_01",
    classId: 8,
    subjectId: "english",
    topicId: "c8_english_tenses",
    topicName: "Tenses & Verb Forms",
    difficulty: "Easy",
    type: "mcq",
    question: "Identify the tense: 'The Earth revolves around the Sun.'",
    options: ["Present Continuous", "Simple Present", "Present Perfect", "Simple Past"],
    correctAnswer: "Simple Present",
    explanation: "Universal scientific truths and facts are always stated in the Simple Present Tense.",
    xp: 10
  }
];
