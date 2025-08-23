/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scrollX: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "scroll-x": "scrollX 30s linear infinite",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
      },
      backgroundImage: {
        contact: "url('/src/assets/images/contact.jpg')",
      },
    },
  },
  plugins: [],
};
