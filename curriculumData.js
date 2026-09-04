/**
 * StudySpark AI - Complete Curriculum Data for Classes 6 to 10
 * Subjects: Mathematics, Science (Physics, Chemistry, Biology), 
 * Social Studies (History, Geography, Civics, Economics), English, Hindi, Telugu.
 */

export const CURRICULUM = {
  classes: [
    {
      id: 6,
      name: "Class 6",
      badge: "Foundation Level",
      description: "Build strong fundamentals in mathematics, scientific curiosity, language, and society.",
      subjectsCount: 6,
      topicsCount: 42,
      color: "from-blue-500 to-indigo-600",
      accent: "#4f46e5"
    },
    {
      id: 7,
      name: "Class 7",
      badge: "Explorer Level",
      description: "Deepen understanding of physical concepts, algebraic foundations, and world geography.",
      subjectsCount: 6,
      topicsCount: 48,
      color: "from-emerald-500 to-teal-600",
      accent: "#059669"
    },
    {
      id: 8,
      name: "Class 8",
      badge: "Achiever Level",
      description: "Master pre-secondary principles, chemical reactions, cell biology, and rational numbers.",
      subjectsCount: 6,
      topicsCount: 52,
      color: "from-amber-500 to-orange-600",
      accent: "#d97706"
    },
    {
      id: 9,
      name: "Class 9",
      badge: "High School Prep",
      description: "Rigorous physics laws, coordinate geometry, atomic structure, and constitutional design.",
      subjectsCount: 6,
      topicsCount: 58,
      color: "from-purple-500 to-pink-600",
      accent: "#9333ea"
    },
    {
      id: 10,
      name: "Class 10",
      badge: "Board Exam Mastery",
      description: "Complete mastery of board exam topics, trigonometry, life processes, and modern economics.",
      subjectsCount: 6,
      topicsCount: 64,
      color: "from-rose-500 to-red-600",
      accent: "#e11d48"
    }
  ],

  subjects: [
    {
      id: "math",
      name: "Mathematics",
      icon: "📐",
      color: "#6366f1",
      lightBg: "#eef2ff",
      description: "Numbers, Algebra, Geometry, Mensuration, and Problem Solving",
      subcategories: ["Arithmetic", "Algebra", "Geometry", "Mensuration", "Statistics & Probability", "Trigonometry"]
    },
    {
      id: "science",
      name: "Science",
      icon: "🔬",
      color: "#10b981",
      lightBg: "#ecfdf5",
      description: "Explore the physical, chemical, and living world",
      subcategories: ["Physics", "Chemistry", "Biology", "Environmental Science"]
    },
    {
      id: "social",
      name: "Social Studies",
      icon: "🌍",
      color: "#f59e0b",
      lightBg: "#fffbeb",
      description: "Human history, earth systems, democracy, and economic life",
      subcategories: ["History", "Geography", "Civics", "Economics"]
    },
    {
      id: "english",
      name: "English",
      icon: "📚",
      color: "#8b5cf6",
      lightBg: "#f5f3ff",
      description: "Grammar, active vocabulary, reading comprehension, and creative writing",
      subcategories: ["Grammar", "Vocabulary", "Reading Comprehension", "Writing Skills", "Literature"]
    },
    {
      id: "hindi",
      name: "Hindi",
      icon: "✍️",
      color: "#ec4899",
      lightBg: "#fdf2f8",
      description: "Vyakaran (Grammar), Shabdavali (Vocabulary), and Comprehension",
      subcategories: ["व्याकरण (Grammar)", "शब्दावली (Vocabulary)", "पठन एवं बोध (Reading & Comprehension)", "लेखन कौशल (Writing)"]
    },
    {
      id: "telugu",
      name: "Telugu",
      icon: "📖",
      color: "#06b6d4",
      lightBg: "#ecfeff",
      description: "Vyakaranam (Grammar), Padajaalam, and Sahityam",
      subcategories: ["వ్యాకరణం (Grammar)", "పదజాలం (Vocabulary)", "పఠన అవగాహన (Comprehension)", "రచనా నైపుణ్యాలు (Writing)"]
    }
  ],

  // Structured detailed topics database
  topics: {
    // CLASS 6
    "c6_math_integers": {
      id: "c6_math_integers",
      classId: 6,
      subjectId: "math",
      subcategory: "Arithmetic",
      chapter: "Integers & Number Line",
      title: "Introduction to Integers",
      tagline: "Understand positive numbers, negative numbers, and zero with visual rules.",
      duration: "25 mins",
      difficulty: "Easy",
      concept: `
        ### What are Integers?
        Think of integers as a complete family of whole numbers along with their negative twins!
        - **Positive Integers:** $1, 2, 3, 4, 5, \\dots$ (like earning money or climbing up a hill)
        - **Zero ($0$):** Neither positive nor negative (sea level or starting line)
        - **Negative Integers:** $-1, -2, -3, -4, \\dots$ (like spending money, freezing temperatures below $0^\\circ\\text{C}$, or diving underwater)

        ### The Number Line
        On a horizontal number line:
        - Numbers to the **right of 0** are positive and keep getting larger ($+1, +2, +3\\dots$).
        - Numbers to the **left of 0** are negative and keep getting smaller ($-1, -2, -3\\dots$).
        - **Rule of Thumb:** Any number located to the right is ALWAYS greater than any number to its left! For instance, $-2$ is greater than $-5$ because $-2$ is further right.
      `,
      keyPoints: [
        "Integers set $\\mathbb{Z} = \\{\\dots, -3, -2, -1, 0, 1, 2, 3, \\dots\\}$.",
        "Zero is greater than every negative integer, but smaller than every positive integer.",
        "Additive Inverse of a number $a$ is $-a$ (because $a + (-a) = 0$).",
        "Subtracting an integer is the same as adding its additive inverse: $a - b = a + (-b)$."
      ],
      formulas: [
        {
          name: "Addition Rule with Same Signs",
          equation: "(+a) + (+b) = +(a + b) \\quad\\text{and}\\quad (-a) + (-b) = -(a + b)",
          symbols: "a, b = absolute values",
          usage: "When both numbers have identical signs, add their values and keep the common sign.",
          example: "(-4) + (-6) = -(4 + 6) = -10"
        },
        {
          name: "Addition Rule with Opposite Signs",
          equation: "(+a) + (-b) = \\text{Sign of greater absolute value} \\times (|a| - |b|)",
          symbols: "|a|, |b| = distance from zero",
          usage: "When signs are different, subtract the smaller value from the larger value and apply the sign of the larger value.",
          example: "(+9) + (-12) = -(12 - 9) = -3"
        }
      ],
      solvedExamples: [
        {
          question: "Calculate: $(-15) + (+23) + (-8)$",
          steps: [
            "Step 1: Group the negative numbers together: $(-15) + (-8) = -(15 + 8) = -23$.",
            "Step 2: Now add with the positive number: $(-23) + (+23)$.",
            "Step 3: Since they are additive opposites: $-23 + 23 = 0$."
          ],
          answer: "0"
        }
      ],
      commonMistakes: [
        {
          mistake: "Thinking that $-8$ is bigger than $-3$ because $8 > 3$.",
          correction: "With negative numbers, the value with smaller absolute magnitude is greater! $-3 > -8$ (owing $3 is better than owing $8)."
        },
        {
          mistake: "Writing $(-5) - (-3) = -8$.",
          correction: "Two minus signs together turn into a plus: $(-5) - (-3) = -5 + 3 = -2$."
        }
      ],
      quickPractice: [
        {
          q: "What is the additive inverse of $-42$?",
          options: ["-42", "0", "+42", "1/42"],
          correct: 2,
          explanation: "The additive inverse of a negative number $-a$ is its positive counterpart $+a$."
        },
        {
          q: "Evaluate: $7 - (-13)$",
          options: ["-6", "+20", "-20", "+6"],
          correct: 1,
          explanation: "Subtracting a negative number is equivalent to addition: $7 + 13 = 20$."
        }
      ]
    },

    // CLASS 7
    "c7_science_heat": {
      id: "c7_science_heat",
      classId: 7,
      subjectId: "science",
      subcategory: "Physics",
      chapter: "Heat & Temperature",
      title: "Heat Transfer: Conduction, Convection & Radiation",
      tagline: "Discover how thermal energy moves across solids, liquids, gases, and empty space!",
      duration: "30 mins",
      difficulty: "Medium",
      concept: `
        ### Heat vs Temperature
        - **Heat:** A form of energy that naturally flows from a body at a higher temperature to a body at a lower temperature.
        - **Temperature:** The measure of degree of hotness or coldness of an object, measured using a thermometer in Celsius ($^\\circ\\text{C}$), Fahrenheit ($^\\circ\\text{F}$), or Kelvin ($\\text{K}$).

        ### Three Modes of Heat Transfer
        1. **Conduction:** Heat transfer in solids where particles vibrate and pass energy to neighboring particles without leaving their positions (e.g., a metal spoon warming up in hot soup).
        2. **Convection:** Heat transfer in fluids (liquids and gases) where heated particles physically move upward (less dense) and cooler fluid sinks (e.g., boiling water, sea breeze, land breeze).
        3. **Radiation:** Heat transfer that requires **no medium at all** via electromagnetic infrared waves (e.g., heat from the Sun reaching Earth through the vacuum of space).
      `,
      keyPoints: [
        "Conductors allow heat to pass easily (Metals like Copper, Aluminium, Iron).",
        "Insulators / Poor Conductors resist heat flow (Wood, Plastic, Rubber, Air).",
        "Clinical thermometer range: $35^\\circ\\text{C}$ to $42^\\circ\\text{C}$ (contains a kink to prevent mercury backflow).",
        "Dark-colored surfaces absorb and emit radiation better than light-colored shiny surfaces."
      ],
      formulas: [
        {
          name: "Celsius to Fahrenheit Conversion",
          equation: "F = \\frac{9}{5}C + 32",
          symbols: "F = Fahrenheit, C = Celsius",
          usage: "Used to convert temperature measurements between Celsius and Fahrenheit scales.",
          example: "At C = 100°C: F = (9/5 * 100) + 32 = 180 + 32 = 212°F"
        },
        {
          name: "Celsius to Kelvin Conversion",
          equation: "K = C + 273.15",
          symbols: "K = Kelvin (SI unit), C = Celsius",
          usage: "Used to convert Celsius into the absolute SI unit of temperature.",
          example: "At 27°C: K = 27 + 273.15 = 300.15 K"
        }
      ],
      solvedExamples: [
        {
          question: "Convert standard human body temperature ($37^\\circ\\text{C}$) to Fahrenheit.",
          steps: [
            "Step 1: Use formula $F = \\frac{9}{5}C + 32$.",
            "Step 2: Multiply 37 by 9/5: $37 \\times 1.8 = 66.6$.",
            "Step 3: Add 32: $66.6 + 32 = 98.6^\\circ\\text{F}$."
          ],
          answer: "98.6°F"
        }
      ],
      commonMistakes: [
        {
          mistake: "Thinking heat and temperature are the exact same quantity.",
          correction: "Heat is total thermal energy (measured in Joules), while temperature is the average kinetic energy / hotness indicator."
        },
        {
          mistake: "Assuming radiation requires air particles to travel.",
          correction: "Radiation travels through vacuum (empty space) at the speed of light."
        }
      ],
      quickPractice: [
        {
          q: "Which mode of heat transfer is primarily responsible for sea breeze during the daytime?",
          options: ["Conduction", "Convection", "Radiation", "Sublimation"],
          correct: 1,
          explanation: "Land heats up faster than water, causing warm air over land to rise and cool air from the sea to rush in, creating a convection current."
        }
      ]
    },

    // CLASS 8
    "c8_math_algebra": {
      id: "c8_math_algebra",
      classId: 8,
      subjectId: "math",
      subcategory: "Algebra",
      chapter: "Algebraic Expressions & Identities",
      title: "Standard Algebraic Identities",
      tagline: "Master algebraic expansions, factoring formulas, and fast polynomial calculations.",
      duration: "35 mins",
      difficulty: "Medium",
      concept: `
        ### What is an Algebraic Identity?
        An **identity** is an equality that holds true for **all possible values** of the variables involved.
        Unlike a standard equation (which is true only for specific values of $x$), identities are universal mathematical formulas!

        ### The Big Three Identities:
        1. Square of sum: $(a + b)^2 = a^2 + 2ab + b^2$
        2. Square of difference: $(a - b)^2 = a^2 - 2ab + b^2$
        3. Difference of two squares: $(a + b)(a - b) = a^2 - b^2$
        4. Product with common term: $(x + a)(x + b) = x^2 + (a + b)x + ab$
      `,
      keyPoints: [
        "$(a+b)^2$ is NOT simply $a^2 + b^2$; never forget the middle cross-term $+2ab$!",
        "Factoring is the reverse process of expansion: $a^2 - b^2 = (a-b)(a+b)$.",
        "Identities make mental arithmetic incredibly fast (e.g., $103^2 = (100+3)^2$)."
      ],
      formulas: [
        {
          name: "Square of a Binomial Sum",
          equation: "(a + b)^2 = a^2 + 2ab + b^2",
          symbols: "a, b = any real numbers or algebraic terms",
          usage: "Expands the square of a sum of two terms.",
          example: "(2x + 3)^2 = (2x)^2 + 2(2x)(3) + (3)^2 = 4x^2 + 12x + 9"
        },
        {
          name: "Difference of Squares",
          equation: "a^2 - b^2 = (a - b)(a + b)",
          symbols: "a, b = terms with square root values",
          usage: "Used to factorize binomials that are differences between two squares.",
          example: "51^2 - 49^2 = (51 - 49)(51 + 49) = 2 * 100 = 200"
        }
      ],
      solvedExamples: [
        {
          question: "Evaluate $105 \\times 95$ without direct multiplication.",
          steps: [
            "Step 1: Express both numbers around 100: $(100 + 5)(100 - 5)$.",
            "Step 2: Apply difference of squares identity $(a+b)(a-b) = a^2 - b^2$.",
            "Step 3: Calculate $100^2 - 5^2 = 10000 - 25 = 9975$."
          ],
          answer: "9975"
        }
      ],
      commonMistakes: [
        {
          mistake: "Writing $(x + 5)^2 = x^2 + 25$.",
          correction: "Missing the $+2ab$ middle term. The correct answer is $x^2 + 10x + 25$."
        }
      ],
      quickPractice: [
        {
          q: "What is the value of $(3x - 4)^2$?",
          options: ["9x² - 16", "9x² - 12x + 16", "9x² - 24x + 16", "9x² + 24x - 16"],
          correct: 2,
          explanation: "(3x - 4)² = (3x)² - 2(3x)(4) + (4)² = 9x² - 24x + 16."
        }
      ]
    },

    // CLASS 9
    "c9_science_motion": {
      id: "c9_science_motion",
      classId: 9,
      subjectId: "science",
      subcategory: "Physics",
      chapter: "Motion & Kinematics",
      title: "Equations of Uniformly Accelerated Motion",
      tagline: "Learn the three pillars of classical kinematics describing position, velocity, and time.",
      duration: "40 mins",
      difficulty: "Hard",
      concept: `
        ### Understanding Motion
        Motion is the change in position of an object over time with respect to a reference frame.
        - **Distance vs Displacement:** Distance is total path length (Scalar). Displacement is the shortest straight-line vector from initial to final position.
        - **Speed vs Velocity:** Speed is $\\text{Distance}/\\text{Time}$ (Scalar). Velocity is $\\text{Displacement}/\\text{Time}$ (Vector).
        - **Acceleration ($a$):** Rate of change of velocity: $a = \\frac{v - u}{t}$.

        ### The Three Equations of Motion (for constant $a$):
        1. Velocity-Time Relation: $v = u + at$
        2. Position-Time Relation: $s = ut + \\frac{1}{2}at^2$
        3. Position-Velocity Relation: $v^2 = u^2 + 2as$
      `,
      keyPoints: [
        "SI Units: Velocity $\\rightarrow \\text{m/s}$, Acceleration $\\rightarrow \\text{m/s}^2$, Distance $\\rightarrow \\text{m}$.",
        "If a body starts from rest, initial velocity $u = 0$.",
        "If a body comes to a stop/brakes, final velocity $v = 0$.",
        "When an object is thrown upwards, acceleration due to gravity $a = -g = -9.8\\text{ m/s}^2$."
      ],
      formulas: [
        {
          name: "1st Equation of Motion",
          equation: "v = u + at",
          symbols: "v = final velocity, u = initial velocity, a = acceleration, t = time",
          usage: "Finds velocity after time t under constant acceleration.",
          example: "Car starts at 10 m/s with a = 2 m/s² for 5s: v = 10 + (2)(5) = 20 m/s"
        },
        {
          name: "2nd Equation of Motion",
          equation: "s = ut + \\frac{1}{2}at^2",
          symbols: "s = displacement, u = initial velocity, a = acceleration, t = time",
          usage: "Finds distance covered in time t under uniform acceleration.",
          example: "Object dropped from rest (u=0) for 3s (a=10 m/s²): s = 0 + 0.5 * 10 * 9 = 45 m"
        },
        {
          name: "3rd Equation of Motion",
          equation: "v^2 = u^2 + 2as",
          symbols: "v = final velocity, u = initial velocity, a = acceleration, s = displacement",
          usage: "Relates velocities and displacement without needing time.",
          example: "Car brakes from 20 m/s over 40 m: 0 = 400 + 2a(40) => a = -5 m/s²"
        }
      ],
      solvedExamples: [
        {
          question: "A train starts from rest and attains a velocity of $72\\text{ km/h}$ in 5 minutes. Assuming uniform acceleration, find the acceleration and distance traveled.",
          steps: [
            "Step 1: Convert units to SI. $u = 0\\text{ m/s}$. $v = 72 \\times \\frac{5}{18} = 20\\text{ m/s}$. $t = 5 \\times 60 = 300\\text{ s}$.",
            "Step 2: Acceleration $a = \\frac{v - u}{t} = \\frac{20 - 0}{300} = \\frac{1}{15}\\text{ m/s}^2 \\approx 0.067\\text{ m/s}^2$.",
            "Step 3: Distance $s = ut + \\frac{1}{2}at^2 = 0 + \\frac{1}{2} \\times \\frac{1}{15} \\times (300)^2 = \\frac{90000}{30} = 3000\\text{ m} = 3\\text{ km}$."
          ],
          answer: "a = 1/15 m/s², s = 3000 m (3 km)"
        }
      ],
      commonMistakes: [
        {
          mistake: "Plugging km/h directly into formulas where time is in seconds.",
          correction: "Always convert speed to m/s by multiplying by $\\frac{5}{18}$ before using SI equations."
        },
        {
          mistake: "Using $s = v \\times t$ when acceleration is non-zero.",
          correction: "$s = vt$ is only valid for constant velocity ($a = 0$). For accelerated motion, use $s = ut + \\frac{1}{2}at^2$."
        }
      ],
      quickPractice: [
        {
          q: "What is the speed $90\\text{ km/h}$ converted into SI units ($\\text{m/s}$)?",
          options: ["15 m/s", "25 m/s", "30 m/s", "50 m/s"],
          correct: 1,
          explanation: "Multiply by 5/18: 90 * (5/18) = 5 * 5 = 25 m/s."
        }
      ]
    },

    // CLASS 10
    "c10_math_trig": {
      id: "c10_math_trig",
      classId: 10,
      subjectId: "math",
      subcategory: "Trigonometry",
      chapter: "Introduction to Trigonometry",
      title: "Trigonometric Ratios & Fundamental Identities",
      tagline: "Explore the geometry of right-angled triangles, sine, cosine, tangent and Pythagorean identities.",
      duration: "45 mins",
      difficulty: "Hard",
      concept: `
        ### The Right-Angled Triangle Foundation
        In a right triangle with acute angle $\\theta$:
        - **Hypotenuse ($H$):** Longest side, opposite to $90^\\circ$.
        - **Opposite ($P$ or Perpendicular):** Side directly facing angle $\\theta$.
        - **Adjacent ($B$ or Base):** Side adjacent to angle $\\theta$ (between $\\theta$ and $90^\\circ$).

        ### The Six Ratios (SOH CAH TOA):
        - $\\sin\\theta = \\frac{\\text{Perpendicular}}{\\text{Hypotenuse}} = \\frac{P}{H}$
        - $\\cos\\theta = \\frac{\\text{Base}}{\\text{Hypotenuse}} = \\frac{B}{H}$
        - $\\tan\\theta = \\frac{\\text{Perpendicular}}{\\text{Base}} = \\frac{P}{B} = \\frac{\\sin\\theta}{\\cos\\theta}$
        - $\\csc\\theta = \\frac{1}{\\sin\\theta}, \\quad \\sec\\theta = \\frac{1}{\\cos\\theta}, \\quad \\cot\\theta = \\frac{1}{\\tan\\theta}$
      `,
      keyPoints: [
        "$\\sin^2\\theta + \\cos^2\\theta = 1$ for any angle $0^\\circ \\le \\theta \\le 90^\\circ$.",
        "$1 + \\tan^2\\theta = \\sec^2\\theta$.",
        "$1 + \\cot^2\\theta = \\csc^2\\theta$.",
        "Key standard values: $\\sin 30^\\circ = 1/2$, $\\sin 45^\\circ = 1/\\sqrt{2}$, $\\sin 60^\\circ = \\sqrt{3}/2$, $\\tan 45^\\circ = 1$."
      ],
      formulas: [
        {
          name: "Pythagorean Trigonometric Identity",
          equation: "\\sin^2\\theta + \\cos^2\\theta = 1",
          symbols: "\\theta = angle of right triangle",
          usage: "Fundamental identity connecting sine and cosine of an angle.",
          example: "If sin θ = 3/5, cos² θ = 1 - (3/5)² = 1 - 9/25 = 16/25 => cos θ = 4/5"
        },
        {
          name: "Secant-Tangent Identity",
          equation: "\\sec^2\\theta - \\tan^2\\theta = 1",
          symbols: "\\theta \\ne 90^\\circ",
          usage: "Simplifies expressions involving secant and tangent powers.",
          example: "sec² 45° - tan² 45° = (√2)² - (1)² = 2 - 1 = 1"
        }
      ],
      solvedExamples: [
        {
          question: "If $\\tan\\theta = \\frac{4}{3}$, calculate $\\frac{\\sin\\theta + \\cos\\theta}{\\sin\\theta - \\cos\\theta}$.",
          steps: [
            "Step 1: Divide numerator and denominator by $\\cos\\theta$.",
            "Step 2: The expression becomes $\\frac{\\tan\\theta + 1}{\\tan\\theta - 1}$.",
            "Step 3: Substitute $\\tan\\theta = 4/3$: $\\frac{4/3 + 1}{4/3 - 1} = \\frac{7/3}{1/3} = 7$."
          ],
          answer: "7"
        }
      ],
      commonMistakes: [
        {
          mistake: "Writing $\\sin(A + B) = \\sin A + \\sin B$.",
          correction: "Sine is a trigonometric function ratio, not an algebraic multiplying factor!"
        },
        {
          mistake: "Confusing Perpendicular and Base when reference angle $\\theta$ changes.",
          correction: "Perpendicular is ALWAYS the side opposite the specific angle you are considering, not always the vertical line."
        }
      ],
      quickPractice: [
        {
          q: "What is the value of $\\sin^2 30^\\circ + \\cos^2 30^\\circ$?",
          options: ["0", "1/2", "1", "√3/2"],
          correct: 2,
          explanation: "By the fundamental identity sin²θ + cos²θ = 1 for any angle."
        }
      ]
    },

    // CLASS 10 - SCIENCE (Life Processes)
    "c10_science_life": {
      id: "c10_science_life",
      classId: 10,
      subjectId: "science",
      subcategory: "Biology",
      chapter: "Life Processes",
      title: "Nutrition & Photosynthesis in Plants",
      tagline: "Explore autotrophic nutrition, stomata gas exchange, and the light reactions of photosynthesis.",
      duration: "30 mins",
      difficulty: "Medium",
      concept: `
        ### What are Life Processes?
        The basic essential functions performed by living organisms to sustain and maintain their life on earth (Nutrition, Respiration, Transportation, and Excretion).

        ### Autotrophic Nutrition (Photosynthesis)
        Green plants synthesize organic food (glucose) from inorganic raw materials ($CO_2$ and $H_2O$) in the presence of sunlight and chlorophyll.

        $$\\text{Overall Equation: } 6CO_2 + 12H_2O \\xrightarrow[\\text{Chlorophyll}]{\\text{Sunlight}} C_6H_{12}O_6 + 6O_2 + 6H_2O$$

        ### Key Events During Photosynthesis:
        1. **Absorption** of light energy by chlorophyll pigments.
        2. **Conversion** of light energy to chemical energy and **splitting (photolysis)** of water molecules into hydrogen and oxygen.
        3. **Reduction** of Carbon Dioxide ($CO_2$) to Carbohydrates (Glucose).
      `,
      keyPoints: [
        "Stomata are microscopic pores guarded by kidney-shaped Guard Cells that swell (open) or shrink (close).",
        "Extra glucose is stored in plants as Starch and in animals as Glycogen.",
        "Desert plants (CAM plants) take up $CO_2$ at night and prepare an intermediate acid to minimize daytime water loss."
      ],
      formulas: [
        {
          name: "Chemical Equation of Photosynthesis",
          equation: "6CO_2 + 6H_2O \\xrightarrow[\\text{Chlorophyll}]{\\text{Sunlight}} C_6H_{12}O_6 + 6O_2",
          symbols: "CO2 = Carbon Dioxide, H2O = Water, C6H12O6 = Glucose, O2 = Oxygen gas",
          usage: "Summarizes solar energy storage into chemical potential energy.",
          example: "6 moles of CO2 consume sunlight to yield 1 mole of glucose and 6 moles of breathable oxygen."
        }
      ],
      solvedExamples: [
        {
          question: "Why do guard cells swell and open when water flows into them?",
          steps: [
            "Step 1: Water enters guard cells through osmosis.",
            "Step 2: Turgor pressure increases, causing outer thin walls to stretch outward.",
            "Step 3: The thick inner curved walls pull apart, opening the stomatal pore for gas exchange."
          ],
          answer: "Increase in turgor pressure causes curved opening of the pore."
        }
      ],
      commonMistakes: [
        {
          mistake: "Believing that oxygen released in photosynthesis comes from carbon dioxide ($CO_2$).",
          correction: "Isotope experiments proved that oxygen released ($O_2$) comes directly from the splitting of Water ($H_2O$), not $CO_2$!"
        }
      ],
      quickPractice: [
        {
          q: "What is the primary site of photosynthesis in plant cells?",
          options: ["Mitochondria", "Chloroplast", "Ribosome", "Golgi Apparatus"],
          correct: 1,
          explanation: "Chloroplasts contain chlorophyll pigments and thylakoid membranes where light and dark reactions occur."
        }
      ]
    },

    // SOCIAL STUDIES - Class 9 Civics
    "c9_social_civics": {
      id: "c9_social_civics",
      classId: 9,
      subjectId: "social",
      subcategory: "Civics",
      chapter: "Constitutional Design",
      title: "The Making & Values of the Indian Constitution",
      tagline: "Understand the Preamble, Constitutional Assembly, Fundamental Rights, and Sovereign Republic values.",
      duration: "25 mins",
      difficulty: "Easy",
      concept: `
        ### What is a Constitution?
        A Constitution is the supreme law of a country containing fundamental principles, structures of government, and guarantees of citizen rights.

        ### The Indian Constituent Assembly
        - Drafted under the chairmanship of **Dr. B.R. Ambedkar** (Father of the Indian Constitution).
        - Adopted on: **26 November 1949**
        - Came into effect on: **26 January 1950** (Celebrated as Republic Day).

        ### Guiding Values in the Preamble
        - **Sovereign:** Free from external control.
        - **Socialist:** Wealth generated socially should be shared equally.
        - **Secular:** Freedom to practice any religion; no official state religion.
        - **Democratic:** Government formed by free and fair elections.
        - **Republic:** Head of state is elected, not hereditary monarch.
      `,
      keyPoints: [
        "The Preamble is called the 'Soul of the Indian Constitution'.",
        "It provides Justice (Social, Economic, Political), Liberty, Equality, and Fraternity.",
        "The Indian Constitution is the longest written constitution in the world."
      ],
      formulas: [],
      solvedExamples: [
        {
          question: "What makes the Indian Constitution a living document?",
          steps: [
            "Step 1: It can be amended over time via Article 368 to adapt to changing societal needs.",
            "Step 2: Independent judiciary interprets the constitution dynamically while safeguarding its basic structure."
          ],
          answer: "Provisions for amendments and judicial interpretation keep it relevant."
        }
      ],
      commonMistakes: [
        {
          mistake: "Confusing Independence Day (15 Aug 1947) with Republic Day (26 Jan 1950).",
          correction: "Independence Day marks freedom from British rule; Republic Day marks the day the Constitution came into force."
        }
      ],
      quickPractice: [
        {
          q: "Who was the Chairman of the Drafting Committee of the Constituent Assembly?",
          options: ["Mahatma Gandhi", "Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"],
          correct: 1,
          explanation: "Dr. B.R. Ambedkar chaired the drafting committee and is revered as the Chief Architect of the Constitution."
        }
      ]
    },

    // ENGLISH - Class 8 Grammar
    "c8_english_tenses": {
      id: "c8_english_tenses",
      classId: 8,
      subjectId: "english",
      subcategory: "Grammar",
      chapter: "Tenses & Verb Forms",
      title: "Mastering Present, Past & Perfect Tenses",
      tagline: "Unlock clear sentence structuring, auxiliary verbs, and temporal timelines.",
      duration: "25 mins",
      difficulty: "Easy",
      concept: `
        ### The Power of Tenses
        Tenses indicate the exact time when an action takes place in relation to the moment of speaking.

        ### 3 Primary Tenses x 4 Aspects = 12 Tense Forms
        1. **Simple Present:** General truths, habits ($S + V_1 + O$). e.g., "The sun rises in the east."
        2. **Present Continuous:** Action happening right now ($S + \\text{is/am/are} + V_{ing} + O$). e.g., "She is studying math."
        3. **Present Perfect:** Action completed recently with relevance to present ($S + \\text{has/have} + V_3 + O$). e.g., "They have finished the quiz."
        4. **Simple Past:** Completed action at a specific past time ($S + V_2 + O$). e.g., "We visited the museum yesterday."
      `,
      keyPoints: [
        "Use 'has' for singular subjects (he, she, it) and 'have' for plural (they, we, you, I).",
        "Never use two past tense verbs together (Incorrect: 'Did you went?'; Correct: 'Did you go?').",
        "Universal scientific truths are always expressed in the Simple Present Tense."
      ],
      formulas: [
        {
          name: "Present Perfect Structure",
          equation: "\\text{Subject} + (\\text{has / have}) + V_3 (\\text{Past Participle}) + \\text{Object}",
          symbols: "V3 = 3rd form of verb (e.g., eat -> eaten)",
          usage: "Used for actions that happened at an unspecified time before now or ongoing impact.",
          example: "He + has + completed + his homework."
        }
      ],
      solvedExamples: [
        {
          question: "Correct the sentence: 'She did not wrote the letter yesterday.'",
          steps: [
            "Step 1: Identify auxiliary verb 'did' which is already in past tense.",
            "Step 2: The main verb following 'did/did not' must always be in base form ($V_1$).",
            "Step 3: Replace 'wrote' ($V_2$) with 'write' ($V_1$)."
          ],
          answer: "She did not write the letter yesterday."
        }
      ],
      commonMistakes: [
        {
          mistake: "Writing 'I am knowing the answer.'",
          correction: "Stative verbs (know, believe, understand, love) are not used in continuous forms. Correct: 'I know the answer.'"
        }
      ],
      quickPractice: [
        {
          q: "Choose the correct sentence in Present Perfect Continuous tense:",
          options: [
            "He is running since morning.",
            "He has been running since morning.",
            "He was running since morning.",
            "He had ran since morning."
          ],
          correct: 1,
          explanation: "Actions starting in past and continuing now require 'has/have been + V-ing'."
        }
      ]
    }
  }
};
