/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Poppins"]
      },
      backgroundImage: {
        "tenis": "url('/src/assets/bg.png')",
      },
      keyframes: {
        floatRight: {
          "0%": { transform: "translatex(0px)" },
          "50%": { transform: "translatex(8px)" },
          "100%": { transform: "translatex(0px)" },
        }
      },
      animation: {
        floatRight: "floatRight 1.5s ease-in-out infinite"
      }
    },
  },
  plugins: [],
}

