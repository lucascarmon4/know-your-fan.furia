import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      black: "#000000",
      white: "#ffffff",
      purple: {
        600: "#9333ea",
        700: "#7e22ce",
        800: "#6b21a8",
      },
      green: {
        600: "#16a34a",
        700: "#15803d",
      },
      gray: {
        300: "#d1d5db",
      },
      red: {
        600: "#dc2626",
      },
    },
  },
  plugins: [],
};

export default config;
