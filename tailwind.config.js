/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,vue,ts,tsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '120px',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {},
  },
  plugins: [],
}
