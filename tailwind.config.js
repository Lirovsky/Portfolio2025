/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        text: "rgb(var(--text))",
      },
      backgroundImage: {
        dark: "var(--bgdark)",
        darkcontato: "var(--darkcontato)",
        light: "var(--bglight)",
        lightcontato: "var(--lightcontato)",
        img1: "var(--img1)",
        img2: "var(--img2)",
        img3: "var(--img3)",
        img4: "var(--img4)",
      },
      fontFamily: {
        roboto: "var(--roboto)",
        bebas: "var(--bebas)",
      },
      boxShadow: {
        cyan: "0 0 10px #06b6d4,0 0 10px #06b6d4,0 0 10px #06b6d4,0 0 10px #06b6d4;",
        orange:
          "0 0 10px #f97316,0 0 10px #f97316,0 0 10px #f97316,0 0 10px #f97316;",
      },
      borderRadius: {
        banner: "48px",
      },
      fontSize: {
        "12xl": "150px",
      },
      lineHeight: {
        11: "65px",
        12: "80px",
        13: "130px",
        14: "180px",
      },
    },
  },
  plugins: [flowbite.plugin()],
  darkMode: "selector",
};
