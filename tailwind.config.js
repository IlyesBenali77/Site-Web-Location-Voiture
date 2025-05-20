/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#282828',
        accent: '#dcdcdc',
        'gray-dark': '#333333',
        'gray-light': '#f5f5f5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'elegant': '0 10px 30px rgba(0, 0, 0, 0.1)',
        'hover': '0 20px 40px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
} 