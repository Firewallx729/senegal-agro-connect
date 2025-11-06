/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'naatal-green': {
          light: '#A3D4A0',
          DEFAULT: '#4CAF50',
          dark: '#2E7D32',
        },
        'naatal-yellow': {
          light: '#FFF59D',
          DEFAULT: '#FFC107',
          dark: '#FBC02D',
        },
      },
    },
  },
  plugins: [],
}