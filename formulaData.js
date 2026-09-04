/**
 * StudySpark AI - Complete Formula Reference Bank
 * Structured across Classes 6-10 with keywords, variables, units, and bookmark support.
 */

export const FORMULA_BANK = [
  // MATHEMATICS FORMULAS
  {
    id: "f_area_circle",
    name: "Area of a Circle",
    equation: "A = \\pi r^2",
    latex: "A = \\pi r^2",
    subject: "Mathematics",
    subjectId: "math",
    category: "Mensuration & Geometry",
    class: 10,
    keywords: ["area", "circle", "radius", "pi", "circumference", "geometry", "round"],
    variables: [
      { symbol: "A", meaning: "Area of the circle", unit: "square units (m², cm²)" },
      { symbol: "π", meaning: "Pi constant", unit: "≈ 22/7 or 3.14159" },
      { symbol: "r", meaning: "Radius of the circle", unit: "linear units (m, cm)" }
    ],
    whenToUse: "Calculate total surface area enclosed within the boundary of any 2D circular shape.",
    example: "If radius $r = 7\\text{ cm}$, then $A = \\frac{22}{7} \\times 7^2 = 22 \\times 7 = 154\\text{ cm}^2$.",
    related: ["Circumference: $C = 2\\pi r$", "Area of Sector: $A = \\frac{\\theta}{360^\\circ} \\pi r^2$"]
  },
  {
    id: "f_circumference",
    name: "Circumference of a Circle",
    equation: "C = 2\\pi r = \\pi d",
    latex: "C = 2\\pi r",
    subject: "Mathematics",
    subjectId: "math",
    category: "Mensuration",
    class: 7,
    keywords: ["circumference", "perimeter", "circle", "diameter", "radius"],
    variables: [
      { symbol: "C", meaning: "Circumference (perimeter)", unit: "m, cm" },
      { symbol: "r", meaning: "Radius", unit: "m, cm" },
      { symbol: "d", meaning: "Diameter ($d = 2r$)", unit: "m, cm" }
    ],
    whenToUse: "Calculate the total boundary length (perimeter) of a circular track, wheel, or ring.",
    example: "For a wheel with radius $r = 14\\text{ cm}$, $C = 2 \\times \\frac{22}{7} \\times 14 = 88\\text{ cm}$.",
    related: ["Area of Circle: $A = \\pi r^2$"]
  },
  {
    id: "f_pythagoras",
    name: "Pythagoras Theorem",
    equation: "H^2 = P^2 + B^2 \\quad (c^2 = a^2 + b^2)",
    latex: "H^2 = P^2 + B^2",
    subject: "Mathematics",
    subjectId: "math",
    category: "Geometry & Trigonometry",
    class: 7,
    keywords: ["pythagoras", "triangle", "hypotenuse", "right angle", "geometry", "triplet"],
    variables: [
      { symbol: "H (c)", meaning: "Hypotenuse (longest side opposite 90°)", unit: "m, cm" },
      { symbol: "P (a)", meaning: "Perpendicular / Altitude side", unit: "m, cm" },
      { symbol: "B (b)", meaning: "Base side", unit: "m, cm" }
    ],
    whenToUse: "Find the missing third side of any right-angled triangle when two sides are known.",
    example: "If $P = 3\\text{ cm}$ and $B = 4\\text{ cm}$, then $H = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5\\text{ cm}$.",
    related: ["Trigonometric Identity: $\\sin^2\\theta + \\cos^2\\theta = 1$"]
  },
  {
    id: "f_quadratic_formula",
    name: "Quadratic Formula (Roots of $ax^2 + bx + c = 0$)",
    equation: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
    latex: "x = \\frac{-b \\pm \\sqrt{D}}{2a}",
    subject: "Mathematics",
    subjectId: "math",
    category: "Algebra",
    class: 10,
    keywords: ["quadratic", "roots", "discriminant", "algebra", "equations", "parabola"],
    variables: [
      { symbol: "x", meaning: "Solutions (roots) of equation", unit: "dimensionless" },
      { symbol: "a, b, c", meaning: "Coefficients with $a \\ne 0$", unit: "constants" },
      { symbol: "D", meaning: "Discriminant ($b^2 - 4ac$)", unit: "D > 0: 2 real, D = 0: 1 real, D < 0: no real" }
    ],
    whenToUse: "Directly solve any quadratic polynomial equation where factoring is difficult or impossible.",
    example: "For $x^2 - 5x + 6 = 0$: $a=1, b=-5, c=6$. $D = 25 - 24 = 1$. Roots $x = (5 \\pm 1)/2 \\implies x = 3 \\text{ or } 2$.",
    related: ["Sum of roots: $\\alpha + \\beta = -b/a$", "Product of roots: $\\alpha\\beta = c/a$"]
  },
  {
    id: "f_surface_area_cylinder",
    name: "Total Surface Area of Cylinder",
    equation: "TSA = 2\\pi r(h + r)",
    latex: "TSA = 2\\pi r h + 2\\pi r^2",
    subject: "Mathematics",
    subjectId: "math",
    category: "Mensuration",
    class: 9,
    keywords: ["cylinder", "surface area", "mensuration", "volume", "curved area", "tsa"],
    variables: [
      { symbol: "TSA", meaning: "Total Surface Area (curved + 2 circular lids)", unit: "m², cm²" },
      { symbol: "r", meaning: "Radius of circular base", unit: "m, cm" },
      { symbol: "h", meaning: "Height of cylinder", unit: "m, cm" }
    ],
    whenToUse: "Calculate material needed to construct or paint a closed solid cylindrical container.",
    example: "If $r = 7\\text{ cm}$ and $h = 10\\text{ cm}$, $TSA = 2 \\times \\frac{22}{7} \\times 7 \\times (10 + 7) = 44 \\times 17 = 748\\text{ cm}^2$.",
    related: ["Curved Surface Area: $CSA = 2\\pi rh$", "Volume: $V = \\pi r^2 h$"]
  },
  {
    id: "f_simple_interest",
    name: "Simple Interest",
    equation: "SI = \\frac{P \\times R \\times T}{100}",
    latex: "SI = \\frac{PRT}{100}",
    subject: "Mathematics",
    subjectId: "math",
    category: "Arithmetic & Financial Math",
    class: 7,
    keywords: ["interest", "principal", "rate", "time", "simple interest", "money", "loan"],
    variables: [
      { symbol: "SI", meaning: "Simple Interest earned or owed", unit: "Currency (₹, $)" },
      { symbol: "P", meaning: "Principal sum borrowed/invested", unit: "Currency" },
      { symbol: "R", meaning: "Annual interest rate", unit: "% per year" },
      { symbol: "T", meaning: "Time duration", unit: "years" }
    ],
    whenToUse: "Calculate linear interest charges without compound calculation.",
    example: "On $P = ₹5000$ at $8\\%$ for 3 years: $SI = (5000 \\times 8 \\times 3)/100 = ₹1200$. Total amount $A = ₹6200$.",
    related: ["Total Amount: $A = P + SI$"]
  },

  // SCIENCE & PHYSICS FORMULAS
  {
    id: "f_speed",
    name: "Speed & Velocity Formula",
    equation: "v = \\frac{s}{t} \\quad (\\text{Speed} = \\frac{\\text{Distance}}{\\text{Time}})",
    latex: "v = \\frac{d}{t}",
    subject: "Science",
    subjectId: "science",
    category: "Physics (Kinematics)",
    class: 6,
    keywords: ["speed", "velocity", "distance", "time", "motion", "rate", "kinematics"],
    variables: [
      { symbol: "v", meaning: "Speed / Velocity", unit: "m/s or km/h" },
      { symbol: "s (d)", meaning: "Distance / Displacement", unit: "meters (m)" },
      { symbol: "t", meaning: "Time elapsed", unit: "seconds (s)" }
    ],
    whenToUse: "Calculate average speed of a traveling vehicle, runner, or celestial body.",
    example: "A car covers $150\\text{ meters}$ in $5\\text{ seconds}$: $v = 150/5 = 30\\text{ m/s}$ ($108\\text{ km/h}$).",
    related: ["Acceleration: $a = \\frac{v - u}{t}$", "Distance: $s = v \\times t$"]
  },
  {
    id: "f_newton_second_law",
    name: "Newton's Second Law of Motion (Force)",
    equation: "F = m \\cdot a \\quad (\\text{Force} = \\text{Mass} \\times \\text{Acceleration})",
    latex: "F = m \\cdot a",
    subject: "Science",
    subjectId: "science",
    category: "Physics (Dynamics)",
    class: 9,
    keywords: ["force", "newton", "mass", "acceleration", "motion", "laws of motion"],
    variables: [
      { symbol: "F", meaning: "Net Unbalanced Force", unit: "Newton (N) or kg·m/s²" },
      { symbol: "m", meaning: "Mass of body", unit: "Kilograms (kg)" },
      { symbol: "a", meaning: "Acceleration produced", unit: "m/s²" }
    ],
    whenToUse: "Determine the magnitude of force required to accelerate a given mass at an exact rate.",
    example: "To accelerate an $800\\text{ kg}$ car at $2.5\\text{ m/s}^2$: $F = 800 \\times 2.5 = 2000\\text{ N}$ (2 kN).",
    related: ["Momentum: $p = m \\cdot v$", "Impulse: $J = F \\cdot \\Delta t = \\Delta p$"]
  },
  {
    id: "f_kinetic_energy",
    name: "Kinetic Energy",
    equation: "KE = \\frac{1}{2}mv^2",
    latex: "KE = \\frac{1}{2}mv^2",
    subject: "Science",
    subjectId: "science",
    category: "Physics (Work & Energy)",
    class: 9,
    keywords: ["kinetic energy", "energy", "velocity", "work", "joules", "speed", "power"],
    variables: [
      { symbol: "KE", meaning: "Kinetic Energy", unit: "Joules (J)" },
      { symbol: "m", meaning: "Mass of moving object", unit: "kg" },
      { symbol: "v", meaning: "Speed of moving object", unit: "m/s" }
    ],
    whenToUse: "Compute the mechanical energy possessed by an object due to its motion.",
    example: "A $2\\text{ kg}$ ball moving at $6\\text{ m/s}$: $KE = 0.5 \\times 2 \\times (6)^2 = 36\\text{ Joules}$.",
    related: ["Potential Energy: $PE = mgh$", "Work-Energy Theorem: $W = \\Delta KE$"]
  },
  {
    id: "f_potential_energy",
    name: "Gravitational Potential Energy",
    equation: "PE = m \\cdot g \\cdot h",
    latex: "PE = mgh",
    subject: "Science",
    subjectId: "science",
    category: "Physics (Work & Energy)",
    class: 9,
    keywords: ["potential energy", "gravity", "height", "energy", "joules", "work"],
    variables: [
      { symbol: "PE", meaning: "Gravitational Potential Energy", unit: "Joules (J)" },
      { symbol: "m", meaning: "Mass of body", unit: "kg" },
      { symbol: "g", meaning: "Acceleration due to gravity", unit: "≈ 9.8 m/s² (or 10 m/s²)" },
      { symbol: "h", meaning: "Vertical height above reference ground", unit: "m" }
    ],
    whenToUse: "Calculate stored energy in an elevated object raised to a height $h$.",
    example: "A $5\\text{ kg}$ brick on a roof at $10\\text{ m}$: $PE = 5 \\times 9.8 \\times 10 = 490\\text{ Joules}$.",
    related: ["Kinetic Energy: $KE = \\frac{1}{2}mv^2$"]
  },
  {
    id: "f_ohms_law",
    name: "Ohm's Law (Electricity)",
    equation: "V = I \\cdot R",
    latex: "V = I \\cdot R",
    subject: "Science",
    subjectId: "science",
    category: "Physics (Electricity)",
    class: 10,
    keywords: ["ohm", "voltage", "current", "resistance", "electricity", "circuit", "amperes"],
    variables: [
      { symbol: "V", meaning: "Potential Difference (Voltage)", unit: "Volts (V)" },
      { symbol: "I", meaning: "Electric Current", unit: "Amperes (A)" },
      { symbol: "R", meaning: "Electrical Resistance", unit: "Ohms (Ω)" }
    ],
    whenToUse: "Relate current, voltage, and resistance in steady electrical circuits.",
    example: "A lamp with resistance $20\\ \\Omega$ connected to a $220\\text{V}$ supply draws: $I = 220 / 20 = 11\\text{ Amperes}$.",
    related: ["Electric Power: $P = V \\cdot I = I^2 R = \\frac{V^2}{R}$", "Resistors in series: $R_s = R_1 + R_2$"]
  },
  {
    id: "f_density",
    name: "Density Formula",
    equation: "\\rho = \\frac{m}{V} \\quad (\\text{Density} = \\frac{\\text{Mass}}{\\text{Volume}})",
    latex: "\\rho = \\frac{m}{V}",
    subject: "Science",
    subjectId: "science",
    category: "Physics & Chemistry",
    class: 8,
    keywords: ["density", "mass", "volume", "buoyancy", "float", "sink", "fluid"],
    variables: [
      { symbol: "ρ (rho)", meaning: "Density", unit: "kg/m³ or g/cm³" },
      { symbol: "m", meaning: "Mass", unit: "kg or grams" },
      { symbol: "V", meaning: "Volume occupied", unit: "m³ or cm³" }
    ],
    whenToUse: "Determine compactness of matter or predict whether an object floats or sinks in water ($1\\text{ g/cm}^3$).",
    example: "An iron block has mass $780\\text{ g}$ and volume $100\\text{ cm}^3$: $\\rho = 780/100 = 7.8\\text{ g/cm}^3$ (sinks in water).",
    related: ["Relative Density = $\\rho_{\\text{substance}} / \\rho_{\\text{water}}$"]
  }
];
