import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        "t-only": "inset 0px 80px 30px 0px rgba(0, 0, 0, 0.3)",
      },
      screens: {
        "-md": { max: "768px" },
        "-sm": { max: "640px" },
        la: { min: "930px" },
        "-la": { max: "930px" },
        "-lg": { max: "1024px" },
        "lg+": { min: "1150px" },
        "-lg+": { max: "1150px" },
        "-xl": { max: "1280px" },
        "-2xl": { max: "1536px" },
      },
      colors: {
        primary: "#D51709",
        "primary-end": "#AA0000",
        pale: "#757575",
        prepale: "#e5e7eb",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
