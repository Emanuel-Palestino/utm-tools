import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}'
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

export default config