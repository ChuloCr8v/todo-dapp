/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#777777",
        customBlack: " #262626",
        primary: "#0A96CC",
        primarygreen: "#40b554",
        bordercolor: "#FBFBFB",
        offwhite: "#F8F8F8",
      },
      boxShadow: {
        logincard: "0px 4px 16px 0px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
