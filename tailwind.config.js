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
        primary: "#9BBEC8",
        secondary:"#164863",
        next: "#161616",
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

