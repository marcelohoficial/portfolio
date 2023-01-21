/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {},
      backgroundImage: {
        // galaxy: "url('/background-galaxy.png')",
        webPortfolio: "url('/images/sites.png')",
        "nlw-gradient":
          "linear-gradient(89.86deg, #9572FC 18.08%, #43E7AD 85.94%, #E1D55D 12.57%)",
        "top-gradient":
          "linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(31, 31, 71, 0.99) 67.08%)",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
