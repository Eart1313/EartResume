/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#b11560",
      secondary: "#5e6eff",
    },
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        mansalva: ["Mansalva", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
