/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "w-pink" : "#EB5757",
        "w-black" : "#333333",
        "w-gray" : "#4F4F4F",
        "w-gray-2" : "w-gray-2",
        "w-gray-3" : "BDBDBD"
      },
      fontFamily:{
        "montserrat" : ["Montserrat", "sans-serif"],
        "muli" : ["Mulish", "sans-serif"]
      }
    },
  },
  plugins: [],
}