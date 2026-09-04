/**
 * StudySpark AI - Gamification Engine
 * Sound synthesizer (Web Audio API), Confetti Particle System, Level Calculations, and Badges.
 */

import { StorageManager } from "./storage.js";

export const BADGES = [
  {
    id: "badge_first_step",
    name: "First Step",
    icon: "🌱",
    description: "Completed your first lesson on StudySpark AI",
    category: "Learning"
  },
  {
    id: "badge_first_quiz",
    name: "Quiz Pioneer",
    icon: "🎯",
    description: "Took your first interactive timed quiz",
    category: "Quizzes"
  },
  {
    id: "badge_10_questions",
    name: "Problem Solver",
    icon: "🧩",
    description: "Solved 10+ practice questions correctly",
    category: "Practice"
  },
  {
    id: "badge_streak_3",
    name: "3-Day Dynamo",
    icon: "🔥",
    description: "Maintained a 3-day consecutive study streak",
    category: "Streaks"
  },
  {
    id: "badge_streak_7",
    name: "7-Day Champion",
    icon: "⚡",
    description: "Achieved a full 7-day study streak",
    category: "Streaks"
  },
  {
    id: "badge_formula_master",
    name: "Formula Master",
    icon: "📐",
    description: "Saved 3+ formulas in your Formula Bank",
    category: "Formulas"
  },
  {
    id: "badge_perfect_score",
    name: "Centum 100%",
    icon: "🌟",
    description: "Scored a flawless 100% on any quiz",
    category: "Mastery"
  },
  {
    id: "badge_science_star",
    name: "Science Star",
    icon: "🔬",
    description: "Mastered Science topics with >80% accuracy",
    category: "Subject"
  },
  {
    id: "badge_math_wizard",
    name: "Math Wizard",
    icon: "🧙‍♂️",
    description: "Solved complex Algebra or Trigonometry challenges",
    category: "Subject"
  }
];

// Web Audio API Sound Effects Synthesizer
class SoundEffects {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  playPop() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch (e) {}
  }

  playSuccess() {
    try {
      this.init();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = this.ctx.currentTime + idx * 0.08;
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, startTime);
        gain.gain.setValueAtTime(0.25, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.25);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + 0.25);
      });
    } catch (e) {}
  }

  playLevelUp() {
    try {
      this.init();
      if (!this.ctx) return;
      const fanfare = [392, 523.25, 659.25, 783.99, 1046.50, 1318.51];
      fanfare.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = this.ctx.currentTime + idx * 0.1;
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, startTime);
        gain.gain.setValueAtTime(0.3, startTime);
        gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.4);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + 0.4);
      });
    } catch (e) {}
  }

  playWrong() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(220, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(110, this.ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.2);
    } catch (e) {}
  }
}

export const sound = new SoundEffects();

// Lightweight HTML5 Canvas Confetti System
export function triggerConfetti() {
  let canvas = document.getElementById("studyspark-confetti-canvas");
  if (!canvas) {
    canvas = document.createElement("canvas");
    canvas.id = "studyspark-confetti-canvas";
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999";
    document.body.appendChild(canvas);
  }

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext("2d");

  const particles = [];
  const colors = ["#6366f1", "#ec4899", "#10b981", "#f59e0b", "#06b6d4", "#8b5cf6", "#ef4444"];

  for (let i = 0; i < 90; i++) {
    particles.push({
      x: canvas.width / 2 + (Math.random() * 200 - 100),
      y: canvas.height / 2 - 50 + (Math.random() * 100 - 50),
      vx: (Math.random() - 0.5) * 16,
      vy: Math.random() * -14 - 6,
      size: Math.random() * 8 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 12,
      gravity: 0.45,
      opacity: 1
    });
  }

  let animationFrame;
  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.rotSpeed;
      p.opacity -= 0.012;

      if (p.opacity > 0 && p.y < canvas.height + 50) {
        alive = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
        ctx.restore();
      }
    });

    if (alive) {
      animationFrame = requestAnimationFrame(update);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame);
    }
  }

  update();
}

// Toast notification helper
export function showToast({ title, message, icon = "⭐", type = "info" }) {
  let container = document.getElementById("studyspark-toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "studyspark-toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast-item toast-${type} animate-slide-up`;
  toast.innerHTML = `
    <div class="toast-icon">${icon}</div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-msg">${message}</div>
    </div>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("toast-fadeout");
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// Reward XP helper that integrates toasts, sounds, and level-ups
export function awardStudentXP(amount, reason = "Great work!") {
  const result = StorageManager.addXP(amount);
  sound.playSuccess();

  showToast({
    title: `+${amount} XP Earned!`,
    message: reason,
    icon: "⭐",
    type: "success"
  });

  if (result.leveledUp) {
    setTimeout(() => {
      sound.playLevelUp();
      triggerConfetti();
      showToast({
        title: `🎉 LEVEL UP! Level ${result.level}`,
        message: `You are now a ${result.title}!`,
        icon: "🏆",
        type: "levelup"
      });
    }, 600);
  }

  // Update navbar XP counters live if present in DOM
  const xpBadge = document.getElementById("nav-xp-counter");
  if (xpBadge) xpBadge.textContent = `${result.currentXP} XP`;
  const levelBadge = document.getElementById("nav-level-badge");
  if (levelBadge) levelBadge.textContent = `Lvl ${result.level} • ${result.title}`;
}
