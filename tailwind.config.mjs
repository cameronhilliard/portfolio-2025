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
        background: "#0F0F10",
        accent: "#C86A2A",
        offwhite: "#f2f0ef",
        extra: "#F2EFEA"
      },
    },
  },
  plugins: [  
    require('tailwindcss-animated')
  ],
};
