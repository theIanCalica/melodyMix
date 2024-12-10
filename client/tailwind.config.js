/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./App.tsx"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primaryColor: "#4A148C",
        accentColor: "#00B0FF",
        backgroundColor: "#121212",
        textColor: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
