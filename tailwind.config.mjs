/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mont: "Montserrat"

      },

      colors: {
        background: "#121212",
        accent: "#FF5722",
        offwhite: "#f2f0ef",
      },
    },
  },
  plugins: [  
    require('tailwindcss-animated')
  ],
};
