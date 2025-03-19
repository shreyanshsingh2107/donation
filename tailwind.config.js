module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      tablet: "768px",
      // => @media (min-width: 768px) { ... }
      desktop: "1024px",
      // => @media (min-width: 1024) { ... }
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
