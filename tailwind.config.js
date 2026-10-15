/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    container: false, // Use our master luxury .container in index.css
  },
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F5F2EC',
          light: '#FAF8F5',
          dark: '#E8E3D9',
        },
        charcoal: {
          DEFAULT: '#22221F',
          dark: '#161715',
          light: '#2E2F2C',
        },
        bronze: {
          DEFAULT: '#A88B67',
          light: '#C4AD88',
          dark: '#8C6F4D',
        },
        taupe: {
          DEFAULT: '#A69A89',
          light: '#DDD7CE',
          dark: '#7A6F60',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      maxWidth: {
        'site': '1240px',
      },
    },
  },
  plugins: [],
}
