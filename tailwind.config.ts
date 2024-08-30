import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            code: {
              backgroundColor: "#FEF3D5",
              color: "#DD8501",
              borderRadius: "0.375rem",
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",
              paddingTop: "0.25rem",
              paddingBottom: "0.25rem",
            },
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        Basic: "#9AC5E5",
        Primary: "#7AA7FF",
        Gray: "#888888",
        gray: "#DCDCDD",
        Secondary: "#C294F0",
        Success: "#7EEFAF",
        Warning: "#EDCE7B",
        Danger: "#FF7676",
        Red: "#EF4444",
        Orange: "#F97316",
        Yellow: "#EAB308",
        Green: "#22C55E",
        Blue: "#3B82F6",
        Purple: "#A855F7",
        Pink: "#EC4899",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "spin-fast": "spin 0.5s linear infinite",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "scaleY(0.4)", opacity: "0.5" },
          "50%": { transform: "scaleY(1)", opacity: "1" },
        },
      },
      animation2: {
        bounce: "bounce 1.2s infinite ease-in-out",
      },
      extend: {
        copyButton: {
          "@apply absolute right-0 top-0 mr-1 mt-1 rounded bg-Basic px-2 py-0.5 text-white transform active:scale-95 active:bg-[#679DC3] focus:outline-none focus:ring-2 focus:ring-[#679DC3]":
            {},
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
