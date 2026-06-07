/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        tivora: {
          navy:  '#1E3A8A',
          blue:  '#2563EB',
          cyan:  '#06B6D4',
          dark:  '#0F172A',
          light: '#F8FAFC',
        },
      },
    },
  },
  plugins: [],
};
