/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b1220",
        sky: {
          50: "#eff7ff",
          100: "#dcedff",
          200: "#b6dbff",
          300: "#7fbfff",
          400: "#4aa3ff",
          500: "#1f86ff",
          600: "#0f6fe6",
          700: "#0b57b3",
          800: "#0a488f",
          900: "#073663",
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(11,18,32,.10)",
        softer: "0 8px 22px rgba(11,18,32,.08)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    },
  },
  plugins: [],
}
