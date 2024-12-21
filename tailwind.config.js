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
        dark: "var(--bgd)",
        darkcontato: "url('./src/img/bgdcontato.gif')",
        light: "var(--bgl)",
        lightcontato: "url('./src/img/bglcontato.gif')",
        img1: "url('./src/img/clima.png')",
        img2: "url('./src/img/git.png')",
        img3: "url('./src/img/financing1.png')",
        img4: "url('./src/img/arsha1.png')",
      },
      fontFamily: {
        roboto: ['"Roboto"', "sans-serif"],
        bebas: ['"Bebas Neue"', "sans-serif"],
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
