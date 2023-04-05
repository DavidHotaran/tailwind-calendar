/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '7': 'repeat(7, minmax(200px, 1fr))',
      }
    },
  },
  plugins: [],
}