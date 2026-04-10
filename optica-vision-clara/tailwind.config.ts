import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f5fa",
          100: "#dce6f0",
          800: "#0f2744",
          900: "#0a1a2e",
          950: "#061018",
        },
        teal: {
          soft: "#5ec4c4",
          muted: "#7eb8c9",
        },
        accent: {
          DEFAULT: "#c9a227",
          light: "#e4c86a",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 4px 24px -4px rgba(15, 39, 68, 0.08), 0 8px 16px -8px rgba(15, 39, 68, 0.06)",
        "card-hover": "0 12px 40px -8px rgba(15, 39, 68, 0.12), 0 4px 16px -4px rgba(15, 39, 68, 0.08)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        float: "float 5s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
