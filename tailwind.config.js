/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: "#192026",
          100: "#0f1215",
          200: "#0e0e11",
        },
        sky: {
          100: "#1db2f3",
        },
      },
    },
  },
  plugins: [require("daisyui")],
}
