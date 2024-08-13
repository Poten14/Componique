import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        Basic: "#9AC5E5",
        Primary: "#7AA7FF",
        gray: "#DCDCDD",
        Secondary: "#C294F0",
        Success: "#7EEFAF",
        Warning: "#EDCE7B",
        Danger: "#FF7676",
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
    },
  },
  plugins: [],
};
export default config;
