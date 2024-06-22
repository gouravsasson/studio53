/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      height: {
        '2/5': '40%', // Custom height class
      },


      fontFamily :{
        'Light' : ['Light'],
        'boold': ['bold'],
        'Medium' : ['Medium']

      },
    },
  },
  plugins: [],
});

