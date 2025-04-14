/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        secondary: "#1E40AF",
        dark: {
          DEFAULT: "#1F2937",
          lighter: "#374151",
          darker: "#111827",
        },
        light: "#F3F4F6",
      },
    },
  },
  plugins: [],
};
