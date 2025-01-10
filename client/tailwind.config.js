/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["Caveat", 'sans-serif'],
        outfit: ["Outfit", "sans-serif"],
        agu: ["Agu Display", "sans-serif"],
        jersey: ["Jersey 15", "sans-serif"]
      },
    },
  },
  plugins: [],
}
