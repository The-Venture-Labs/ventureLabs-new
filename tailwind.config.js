/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        heroBack:'#000415',
        btnColor:'#45C07A',
        bgColor: "#00020E",
      }
    },
  },
  plugins: [],
}