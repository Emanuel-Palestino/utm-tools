/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'utm-background': '#221b00',
        'utm-container': '#2d2306',
        'utm-on-container': '#e1c54b',
        'utm-container-2': '#ffdcbe',
        'utm-on-container-2': '#5a3200',
        'utm-container-2-dark': '#8b5000',
        'utm-container-3': '#7e2a2c',
        'utm-on-container-3': '#ffdad8',
      },
    },
  },
  plugins: [],
}

