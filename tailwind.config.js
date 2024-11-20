/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',  
  ],
  theme: {
    extend: {
      colors:{
      customGray: 'rgb(210, 218, 218)', 
    },
    },
  },
  plugins: [],
}

