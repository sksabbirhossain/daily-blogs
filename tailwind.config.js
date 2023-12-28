/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00AAA1",
        secondary: "#F2F8F7",
        header: "#E8F3F3",
        body: "#E5E5E5",
        textBlack: "#333",
        textGray: "#888888",
      },
    },
  },
  plugins: [],
};
