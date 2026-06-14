/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0F0E0C",
        obsidian2: "#16140F",
        gold: "#C9A05A",
        spark: "#FFE3B8",
        ivory: "#F3EEE4",
        stone: "#8B847A",
        midnight: "#191D2A",
        dawn: "#E2A988",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "serif"],
        sans: ["Inter", "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      keyframes: {
        breathe: {
          "0%, 100%": { opacity: "0.55", transform: "scale(0.94)" },
          "50%": { opacity: "1", transform: "scale(1.06)" },
        },
        breatheSlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.12)" },
        },
        driftDown: {
          "0%": { transform: "translateY(0)", opacity: "0.6" },
          "100%": { transform: "translateY(10px)", opacity: "1" },
        },
      },
      animation: {
        breathe: "breathe 5s ease-in-out infinite",
        breatheSlow: "breatheSlow 7s ease-in-out infinite",
        driftDown: "driftDown 1.6s ease-in-out infinite alternate",
      },
      boxShadow: {
        glow: "0 0 60px 12px rgba(201,160,90,0.30)",
        glowSm: "0 0 24px 6px rgba(201,160,90,0.45)",
        sparkGlow: "0 0 90px 24px rgba(255,227,184,0.22)",
        cardGlow: "0 0 0 1px rgba(201,160,90,0.15), 0 20px 60px -20px rgba(0,0,0,0.6)",
      },
      letterSpacing: {
        widest2: "0.35em",
      },
    },
  },
  plugins: [],
};
