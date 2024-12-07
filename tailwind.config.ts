import { nextui } from '@nextui-org/theme'
import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/button.js',
    './node_modules/@nextui-org/theme/dist/components/card.js',
    './node_modules/@nextui-org/theme/dist/components/input.js',
    './node_modules/@nextui-org/theme/dist/components/link.js',
    './node_modules/@nextui-org/theme/dist/components/modal.js',
    './node_modules/@nextui-org/theme/dist/components/navbar.js',
    './node_modules/@nextui-org/theme/dist/components/radio.js',
    './node_modules/@nextui-org/theme/dist/components/select.js',
    './node_modules/@nextui-org/theme/dist/components/skeleton.js',
    './node_modules/@nextui-org/theme/dist/components/slider.js',
    './node_modules/@nextui-org/theme/dist/components/toggle.js',
    './node_modules/@nextui-org/theme/dist/components/tabs.js',
  ],
  theme: {
    extend: {
      colors: {
        'utm-on-container': '#e1c54b',
        'utm-container-2': '#ffdcbe',
        'utm-container': '#2d2306',
        'utm-container-3': '#7e2a2c',
        'utm-on-container-3': '#ffdad8',
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#FFFAF2", // the page background color, white
            foreground: "#1A1101", // the page text color, almost black
            //divider: "", // used for divider and single line border, blue
            //overlay: "#1b0209", // used for modal, popover, etc., dark red-brown
            focus: "#E1C54B", // used for focus state outline, red
            //content1: "#FFFAF2", // used for card, modal, popover, etc., olive

            //default: {}, // default color, white
            primary: "#E1C54B", // primary brand color, blue
            secondary: {
              DEFAULT: "#7E2A2C", // secondary color, red
              foreground: "#FFDAD8"
            }, // secondary color, red
            //success: "#7f740c", // success messages, olive
            //warning: "#592726", // warning messages, dark red-brown
            danger: "#7E2A2C", // danger alerts, red
          }
        }
      }
    })
  ],
}

export default config