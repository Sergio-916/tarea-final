/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '80vh': '80vh',
        '30vh': '30vh',
      },
      height: {
        "460": "460px",
      },
      colors: {
        'title-color': '#ea580c',
        'spec-col': '#b45309',
        'title-dark': '#111827',

      },
      maxWidth: {
        '1440px': '1440px',
      },
    },
  },
  plugins: [],
}

