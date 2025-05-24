/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bouncing: {
          "0%, 10%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
          "40%, 60%": { transform: "translateY(-7px)" },
        },
      },
      animation: {
        bouncing: "bouncing 0.9s alternate infinite",
      },
    },
  },
  plugins: [],
};
