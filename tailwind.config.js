/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      colors: {
        'deep-purple': '#3C2066',
        'burnt-red': '#A13121',
        'warm-yellow': '#F4A623',
        'earth-green': '#556B2F',
        'charcoal': '#2B2B2B',
        'cream': '#FAF5E6',
      },
    },
  },
  plugins: [],
};