/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        primary: "#ff6a80",
        secondary:"#ffb6c1",
      },
    },
    container:{
      center: true,
      padding:{
        DEFAULT: "1rem",
        sm:"3rem",
        
      }
    }
  },
  plugins: [],
}

