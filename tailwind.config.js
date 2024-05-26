/** @type {import('tailwindcss').Config} */
import { tokens } from '@fluentui/react-components';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...tokens
      }
    },
  },
  plugins: [require('tailwindcss-rtl')],
}