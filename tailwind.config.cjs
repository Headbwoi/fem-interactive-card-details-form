/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1110px",
    },
    container: {
      center: true,
    },
    colors: {
      // gradient
      gradient1: "hsl(249, 99%, 64%)",
      gradient2: "hsl(278, 94%, 30%)",
      White: "hsl(0, 0%, 100%)",
      lightGrayishViolet: "hsl(270, 3%, 87%)",
      darkGrayishViolet: "hsl(279, 6%, 55%)",
      veryDarkViolet: "hsl(278, 68%, 11%)",
      error: "hsl(0, 100%, 66%)",
      /** */
    },
    fontFamily: {
      spaceGrotest: [`"Space Grotesk", "sans-serif"`],
    },
    extend: {},
  },
  plugins: [],
}
