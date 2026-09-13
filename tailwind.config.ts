import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef1f8",
          100: "#dbe2f0",
          600: "#1e3a75",
          700: "#162a58",
          800: "#0f1f42",
          900: "#0a1730",
        },
        khaki: {
          50: "#f7f3ea",
          100: "#ece3cd",
          400: "#c7a76a",
          500: "#b3925a",
        },
        gold: {
          400: "#f4c430",
          500: "#f2b705",
          600: "#e0a800",
        },
        maroon: {
          600: "#8a2432",
          700: "#6e1c27",
        },
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        heading: ["var(--font-anton)", "Impact", "sans-serif"],
        hand: ["var(--font-caveat)", "cursive"],
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;