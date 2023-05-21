/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        rectBase: 'linear-gradient(336.65deg, #FF763B 16.88%, rgba(255, 118, 59, 0) 74.5%)'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif']
      },
      colors: {
        defaultBg: "#F5F5F5",
        defaultText1: "#363636",
        defaultText2: "#FF763B"
      },
      boxShadow: {
        defaultBox: '5px 6px 6px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
