import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs: "400px",

      xs: "480px",

      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",

      "3xl": "1700px",

      "4xl": "1880px",
    },
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "20px"],
      lg: ["18px", "22px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "32px"],
      "4xl": ["32px", "38px"],
      "5xl": ["40px", "48px"],
      "6xl": ["48px", "58px"],
      "7xl": ["64px", "74px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      colors: {
        "cyan-blue": "#22A9E1",
        "cyan-blue-30": "#22A9E14D",
        "cyan-blue-50": "#22A9E180",
        "ars-primary": "#EDF3F5",
        "ars-cyan": "#0590C8",
        "ars-cyan-60": "#0590C899",
        "ars-gray": "#505B66",
        "ice-blue": "#D7EFF9",
        "deep-blue": "#0B1E59",
        "deep-blue-70": "#0B1E59B3",
        "deep-blue-20": "#0B1E5933",
        "deep-blue-5": "#0B1E590D",
        "midnight-blue": "#030D2D",
        "midnight-purple": "#090712",
        "brand-white": "#F6FBFD",
        "brand-black": "#212529",
      },
    },
  },
  plugins: [],
} satisfies Config;
