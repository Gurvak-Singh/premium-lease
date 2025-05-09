/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#f0f5ff',
          100: '#e0eaff',
          200: '#c7d7fe',
          300: '#a4bbfd',
          400: '#8098fb',
          500: '#6371f6',
          600: '#4f4eea',
          700: '#3a3ad1',
          800: '#1E3A8A', // Primary blue
          900: '#182159',
        },
        amber: {
          500: '#F59E0B', // Accent color
        },
      },
      spacing: {
        '128': '32rem',
      },
      boxShadow: {
        'property': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};