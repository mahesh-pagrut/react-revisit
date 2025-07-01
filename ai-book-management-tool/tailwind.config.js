/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: "#F8F9FA",
        indigoPrimary: "#7C3AED",
        amberAccent: "#FBBF24",
    },
  },
},
  plugins: [],
}