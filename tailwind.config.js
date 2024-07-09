/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['"Geist Sans"', 'sans-serif'],
        'secondary': ['"Geist Mono"', 'monospace'],
      },
      fontSize: {
        '12px': '12px',
        '16px': '16px',
        '64px': '64px',
      },
      letterSpacing: {
        'negative-0.8px': '-0.8px',
        'negative-3.4px': '-3.4px',
      },
      fontWeight: {
        'weight-100': 100,
        'weight-200': 200,
        'weight-300': 300,
        'weight-400': 400,
        'weight-500': 500,
        'weight-600': 600,
        'weight-700': 700,
        'weight-800': 800,
        'weight-900': 900,
      },
      gap: {
        '6px': '6px',
        '8px': '8px',
        '12px': '12px'
      },
      padding: {
        '8px': '8px',
        '12px': '12px',
        '16px': '16px',
        '20px': '20px',
        '24px': '24px',
      },
      borderColor: {
        'gray-6H': '#2E2E2E',
        'gray-9H': '#1A1A1A',
      },
      borderWidth: {
        '2px': '2px',
      },
      borderRadius: {
        '8px': '8px',
        '12px': '12px',
        '16px': '16px',
        '20px': '20px',
      },
      backgroundColor: {
        'gray-6H': '#2E2E2E',
        'gray-9H': '#1A1A1A',
      },
    },
  },
  plugins: [],
}