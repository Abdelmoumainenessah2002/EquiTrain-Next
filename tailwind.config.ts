import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enables dark mode using a class
  theme: {
    extend: {
      colors: {
        background: {
          light: "#f3f4f6", // Light mode background
          dark: "#121212", // Dark mode background
        },
        text: {
          light: "#111827", // Light mode text
          dark: "#f9fafb", // Dark mode text
        },
      },
      screens: {
        "max-lg": { max: "1024px" },
      },
    },
  },
  plugins: [],
};

export default config;
