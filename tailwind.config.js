import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["var(--font-nunito)"],
        title: ["var(--font-title)"],
      },
      screens: {
        xs: "475px",
      },
      colors: {
        primary: "#FFA50E",
        secondary: "#3B3E41",
        "black-primary": "#524F4B",
        "black-secondary": "#888888",
        "white-primary": "#FFFFFF",
        "white-secondary": "#FFF4E0",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
