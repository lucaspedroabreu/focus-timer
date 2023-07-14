/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          gradient: {
            '1': '#FF9BC6',
            '2': '#F66CB1',
            '3': '#EB6BB7',
            '4': '#DC6BC0',
            '5': '#D26AC6',
            '6': '#C369CF',
            '7': '#AE69DC',
            '8': '#9968E8',
            '9': '#8567F4',
            '10': '#7466FF'
          },
          gray: {
            '100': '#E1E1E6',
            '300': '#C4C4CC',
            '400': '#8D8D99',
            '500': '#7C7C8A',
            '600': '#323238',
            '700': '#29292E',
            '800': '#202024',
            '900': '#121214',
          },
          green: {
            '300': '#00B37E',
            '500': '#00875F',
            '700': '#015F43',
          },
          red: {
            '500': '#AB222E',
            '700': '#7A1921',
          },
          yellow: {
            '500': '#FBA94C',
          }
        }
      },
      boxShadow: {
        'focus': '0 0 0 2px'
      },
    },
    fontFamily: {
      "roboto": ['Roboto', 'sans-serif'],
      "roboto-mono": ['"Roboto Mono"', 'monospace'],
      "handwriting": ['Pacifico', 'cursive']
    }
  },
  plugins: [],
}

