import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        "barlow-regular": ["Barlow-Regular", "sans-serif"],
        "barlow-semibold": ["Barlow-SemiBold", "sans-serif"],
        "barlow-extralight": ["Barlow-ExtraLight", "sans-serif"],
        "barlow-medium": ["Barlow-Medium", "sans-serif"],
        "barlow-thin": ["Barlow-Thin", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
