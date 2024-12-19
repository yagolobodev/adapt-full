/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00174E',
          dark: '#000C2A',
          light: '#002B9D'
        },
        secondary: {
          DEFAULT: '#CF000F',
          dark: '#A30000',
          light: '#FF1A1A'
        }
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      aspectRatio: {
        'video': '16 / 9',
      },
    },
  },
  plugins: [
    (await import('@tailwindcss/forms')).default,
  ],
}
