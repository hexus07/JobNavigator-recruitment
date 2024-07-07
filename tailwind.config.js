/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-dark": "#3D52A0",
        "blue-light": "#7091E6",
        "blue-pastel": "#8697C4",
        "blue-steel": "#ADBBDA",
        "background-gray": "#EDE8F5",
        white: "#FFFFFF", // Add white to the custom theme
      },
    },
  },
  plugins: [],
};
