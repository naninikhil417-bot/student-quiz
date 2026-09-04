/**
 * StudySpark AI - Daily Challenge Repository
 * Dynamic rotating daily challenge based on day of the week and student class level.
 */

export const DAILY_CHALLENGES = [
  {
    dayIndex: 0, // Sunday
    id: "dc_sun_math",
    classTarget: [6, 7, 8, 9, 10],
    subject: "Mathematics",
    topic: "Circle Mensuration",
    badge: "📐 Sunday Math Spark",
    title: "Area of the Circular Garden",
    question: "If the radius of a circular flower garden is 7 meters, what is its total surface area? (Use π = 22/7)",
    options: ["44 m²", "154 m²", "88 m²", "196 m²"],
    correctAnswer: "154 m²",
    explanation: "Area A = πr² = (22/7) * (7)² = (22/7) * 49 = 22 * 7 = 154 m².",
    rewardXP: 30,
    hint: "Remember the area formula A = πr² where r is the radius."
  },
  {
    dayIndex: 1, // Monday
    id: "dc_mon_sci",
    classTarget: [6, 7, 8, 9, 10],
    subject: "Science",
    topic: "Physics & Speed",
    badge: "⚡ Speed Starter",
    title: "The Express Train",
    question: "A high-speed train travels 360 kilometers in exactly 4 hours. What is its speed in SI units (m/s)?",
    options: ["20 m/s", "25 m/s", "90 m/s", "15 m/s"],
    correctAnswer: "25 m/s",
    explanation: "Speed = 360 km / 4 h = 90 km/h. To convert to m/s: 90 * (5/18) = 5 * 5 = 25 m/s.",
    rewardXP: 35,
    hint: "First find km/h, then multiply by 5/18 to convert to m/s."
  },
  {
    dayIndex: 2, // Tuesday
    id: "dc_tue_bio",
    classTarget: [6, 7, 8, 9, 10],
    subject: "Science",
    topic: "Cell Biology & Life",
    badge: "🔬 Bio Wizard",
    title: "The Powerhouse of the Cell",
    question: "Which organelle is famously termed the 'Powerhouse of the Cell' for producing ATP energy currency?",
    options: ["Ribosome", "Mitochondria", "Nucleus", "Endoplasmic Reticulum"],
    correctAnswer: "Mitochondria",
    explanation: "Mitochondria carry out cellular respiration to generate adenosine triphosphate (ATP), the vital energy currency for cellular work.",
    rewardXP: 25,
    hint: "Think about where cellular respiration generates energy molecules."
  },
  {
    dayIndex: 3, // Wednesday
    id: "dc_wed_alg",
    classTarget: [6, 7, 8, 9, 10],
    subject: "Mathematics",
    topic: "Algebra & Equations",
    badge: "🧠 Midweek Math Mind",
    title: "Solve for the Unknown",
    question: "If 4x - 7 = 2x + 9, what is the value of x?",
    options: ["x = 4", "x = 8", "x = 6", "x = 16"],
    correctAnswer: "x = 8",
    explanation: "Subtract 2x from both sides: 2x - 7 = 9. Add 7 to both sides: 2x = 16. Divide by 2: x = 8.",
    rewardXP: 30,
    hint: "Collect like terms with x on one side and constants on the other."
  },
  {
    dayIndex: 4, // Thursday
    id: "dc_thu_soc",
    classTarget: [6, 7, 8, 9, 10],
    subject: "Social Studies",
    topic: "Civics & Governance",
    badge: "🏛️ Democracy Master",
    title: "The Supreme Law",
    question: "Who is celebrated as the Chief Architect and Father of the Indian Constitution?",
    options: ["Mahatma Gandhi", "Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Dr. Rajendra Prasad"],
    correctAnswer: "Dr. B.R. Ambedkar",
    explanation: "Dr. Bhimrao Ramji Ambedkar served as the Chairman of the Drafting Committee of the Constituent Assembly.",
    rewardXP: 25,
    hint: "He was the Chairman of the Drafting Committee."
  },
  {
    dayIndex: 5, // Friday
    id: "dc_fri_eng",
    classTarget: [6, 7, 8, 9, 10],
    subject: "English",
    topic: "Grammar & Vocabulary",
    badge: "📝 Word Smith",
    title: "Spot the Correct Sentence",
    question: "Choose the grammatically correct sentence:",
    options: [
      "Neither of the boys were present.",
      "Neither of the boys was present.",
      "Neither of the boys have been present.",
      "Neither of the boys are present."
    ],
    correctAnswer: "Neither of the boys was present.",
    explanation: "'Neither of' takes a singular verb when referring to one of two individuals: 'Neither of the boys was present'.",
    rewardXP: 30,
    hint: "'Neither' is singular and requires a singular verb."
  },
  {
    dayIndex: 6, // Saturday
    id: "dc_sat_sci",
    classTarget: [6, 7, 8, 9, 10],
    subject: "Science",
    topic: "Newtonian Physics",
    badge: "🚀 Weekend Rocket Scientist",
    title: "Newton's Force Challenge",
    question: "A rocket engine produces a thrust force of 5000 N on a 500 kg payload in deep space. What is the payload's acceleration?",
    options: ["5 m/s²", "10 m/s²", "25 m/s²", "50 m/s²"],
    correctAnswer: "10 m/s²",
    explanation: "Using Newton's 2nd Law F = m * a => a = F / m = 5000 N / 500 kg = 10 m/s².",
    rewardXP: 40,
    hint: "Use F = m * a."
  }
];
