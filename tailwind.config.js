/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // background
        "main-bg": "#2a3447",
        "soft-bg": "#384256",
        "dark-bg": "#222b3c",
        // text
        "main-color": "white",
        "soft-color": "#ddd",
        "dark-color": "#2a3447",
      },
      gridAutoRows: {
        "w-row": "minmax(180px, auto)",
      },
      flex: {
        1: "2 2 50%",
      },
    },
  },
  plugins: [],
};
