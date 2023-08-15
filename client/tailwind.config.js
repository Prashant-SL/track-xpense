/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        max: "375px",
      },
      height: {
        max: "812px",
      },
    },
  },
  plugins: [],
};
