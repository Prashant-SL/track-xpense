/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        max: "375px",
        "95p": "95%",
      },
      height: {
        max: "844px",
      },
      colors: {
        primary: {
          50: "#fbf5ff",
          100: "#f8ebff",
          200: "#ebcfff",
          300: "#dbb3ff",
          400: "#b278ff",
          500: "#7f3dff",
          600: "#6b32e6",
          700: "#5122bf",
          800: "#391599",
          900: "#260d73",
          950: "#14054a",
        },
      },
      borderRadius: {
        50: "50%",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
