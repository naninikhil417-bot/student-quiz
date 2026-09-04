/**
 * StudySpark AI - Student AI Study Assistant
 * Provides age-appropriate explanations, formula breakdowns, step-by-step guidance,
 * and quick prompt chips for Classes 6-10 students.
 */

import { CURRICULUM } from "../data/curriculumData.js";
import { FORMULA_BANK } from "../data/formulaData.js";
import { StorageManager } from "./storage.js";

export class AIAssistant {
  static getSuggestedPrompts() {
    return [
      "🌱 Explain Photosynthesis simply",
      "⚡ What is the formula for speed and acceleration?",
      "⚖️ What is the difference between mass and weight?",
      "📐 Explain Pythagoras theorem with a real-life example",
      "🔬 Why does ice float on water?",
      "📝 Give me a quick practice question for Class 9 Motion"
    ];
  }

  static getActionChips() {
    return [
      "Explain this simply 🐣",
      "Give me a real example 💡",
      "Explain step-by-step 🪜",
      "Give me a practice question ❓",
      "Why is this important? 🤔"
    ];
  }

  static async askAI(userQuery, studentClass = 9) {
    const q = userQuery.toLowerCase().trim();

    // Simulate intelligent delay for smooth realistic interaction
    await new Promise(resolve => setTimeout(resolve, 600));

    // 1. Photosynthesis query
    if (q.includes("photosynthesis") || q.includes("plant food") || q.includes("chlorophyll")) {
      return `
### 🌱 What is Photosynthesis? (In Simple Words)
Photosynthesis is how green plants **cook their own food** using sunlight!

#### 🪄 The Recipe:
1. **Water ($H_2O$):** Sucked up by roots from the soil.
2. **Carbon Dioxide ($CO_2$):** Taken from air through tiny mouth-like pores on leaves called **Stomata**.
3. **Sunlight:** Trapped by green solar panels inside leaf cells called **Chlorophyll**.

#### 🧪 The Chemical Equation:
$$6CO_2 + 6H_2O \\xrightarrow[\\text{Chlorophyll}]{\\text{Sunlight}} C_6H_{12}O_6 \\text{ (Glucose)} + 6O_2 \\text{ (Oxygen)}$$

> 💡 **Fun Fact for Class ${studentClass}:** The oxygen you are breathing right this second was made by plants splitting water molecules during photosynthesis!
      `;
    }

    // 2. Mass vs Weight query
    if ((q.includes("mass") && q.includes("weight")) || q.includes("difference between mass and weight")) {
      return `
### ⚖️ Mass vs. Weight: What's the Difference?

| Feature | 🪐 Mass ($m$) | 🌍 Weight ($W$) |
| :--- | :--- | :--- |
| **What it means** | The total amount of matter inside your body. | The pull of gravity pulling down on your mass. |
| **Formula** | Constant everywhere | $W = m \\times g$ |
| **SI Unit** | Kilogram ($\\text{kg}$) | Newton ($\\text{N}$) |
| **Does it change on Moon?** | **No!** If you are $40\\text{ kg}$ on Earth, you are still $40\\text{ kg}$ on the Moon. | **Yes!** Gravity on the Moon is $1/6\\text{th}$ of Earth, so you feel 6 times lighter! |

> 🚀 **Takeaway:** If you travel across the galaxy, your **Mass** stays identical, but your **Weight** changes wherever gravity changes!
      `;
    }

    // 3. Speed vs Velocity / Acceleration
    if (q.includes("speed") || q.includes("velocity") || q.includes("acceleration")) {
      return `
### 🚗 Speed, Velocity & Acceleration Explained!

1. **Speed:** How fast you are moving (e.g., $60\\text{ km/h}$). It is a **scalar** (just a number).
   $$\\text{Speed} = \\frac{\\text{Distance}}{\\text{Time}}$$

2. **Velocity:** Speed with a **specific direction** (e.g., $60\\text{ km/h}$ towards North). It is a **vector**.
   $$\\text{Velocity} = \\frac{\\text{Displacement}}{\\text{Time}}$$

3. **Acceleration ($a$):** How quickly your velocity is speeding up or slowing down!
   $$a = \\frac{v - u}{t}$$
   *(where $v$ = final speed, $u$ = starting speed, $t$ = time taken)*

> 🏎️ **Example:** If your bicycle goes from $0\\text{ m/s}$ (rest) to $10\\text{ m/s}$ in $5\\text{ seconds}$, your acceleration is $(10 - 0)/5 = 2\\text{ m/s}^2$!
      `;
    }

    // 4. Pythagoras Theorem
    if (q.includes("pythagoras") || q.includes("hypotenuse") || q.includes("right triangle")) {
      return `
### 📐 Pythagoras Theorem (The Triangle Secret)

For **any right-angled triangle** (where one corner is exactly $90^\\circ$):

$$(\\text{Hypotenuse})^2 = (\\text{Base})^2 + (\\text{Perpendicular})^2$$
$$H^2 = B^2 + P^2$$

#### 🪜 Real-life Example:
Imagine you place a ladder against a wall.
- Distance of ladder base from wall ($B$) = $3\\text{ meters}$
- Height the ladder reaches on the wall ($P$) = $4\\text{ meters}$
- Length of ladder needed ($H$) = $\\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5\\text{ meters}$!
      `;
    }

    // 5. Why does ice float?
    if (q.includes("ice") && (q.includes("float") || q.includes("water") || q.includes("density"))) {
      return `
### 🧊 Why Does Ice Float on Liquid Water?

Most substances shrink and become denser when they freeze into a solid. But water has a **magical special property (Anomalous Expansion)**!

1. When water freezes below $4^\\circ\\text{C}$, its molecules form a hexagonal cage-like crystalline structure with lots of empty air spaces between them.
2. Because of this structure, ice occupies **more volume** than the liquid water it was made from.
3. Since $\\text{Density} = \\frac{\\text{Mass}}{\\text{Volume}}$, increased volume means **ice is less dense than liquid water** ($\\approx 0.92\\text{ g/cm}^3$ vs $1.0\\text{ g/cm}^3$).
4. Because it is lighter/less dense, ice floats!

> 🐟 **Why Nature Did This:** Because ice floats on top of lakes, it acts as an insulating blanket, keeping the liquid water underneath warm so fish and aquatic life can survive harsh winters!
      `;
    }

    // 6. Generic intelligent response based on topic/formula match
    // Check if query matches any formula
    const matchedFormula = FORMULA_BANK.find(f => 
      q.includes(f.name.toLowerCase()) || 
      f.keywords.some(k => q.includes(k.toLowerCase()))
    );

    if (matchedFormula) {
      return `
### 📐 Found Formula: **${matchedFormula.name}**

- **Formula Equation:** \`${matchedFormula.equation}\`
- **Subject:** ${matchedFormula.subject} (Class ${matchedFormula.class})
- **When to Use:** ${matchedFormula.whenToUse}

#### 🔍 Symbol Meanings:
${matchedFormula.variables.map(v => `- **${v.symbol}:** ${v.meaning} (${v.unit})`).join("\n")}

#### 💡 Solved Example:
${matchedFormula.example}
      `;
    }

    // Generic educational coaching response
    return `
### 🎓 StudySpark AI Learning Guide for Class ${studentClass}

Here is a clear breakdown for **"${userQuery}"**:

1. **Core Concept:** In school syllabus, this relates to understanding how fundamental laws and definitions govern numbers, physical objects, and natural phenomena.
2. **Key Rule to Remember:** Always check the given units (like meters, seconds, grams, or centimeters) and convert them to standard SI units before solving.
3. **Student Tip:** Break complex multi-step questions into two questions: "What is given?" and "What formula connects the given information to the final answer?"

Would you like me to give you a step-by-step example or a 1-question quiz on this topic?
    `;
  }
}
