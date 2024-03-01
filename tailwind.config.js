/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#3D948B',
        secondary: '#943D8C',
        ternary: '#50482B',
        accent: '#F5C518',
        'muted-white': '#FFFBEB',
        background: '#20302E',
      },
      screens: {
        xs: '420px',
      },
    },
  },
  plugins: [],
}
