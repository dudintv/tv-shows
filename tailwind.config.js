/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,ts}'],
  theme: {
    extend: {
      screens: {
        xs: '420px',
      },
      fontFamily: {
        display: '"Comfortaa", sans-serif;',
      },
      colors: {
        primary: '#3D948B',
        secondary: '#943D8C',
        ternary: '#50482B',
        accent: '#F5C518',
        'muted-white': '#FFFBEB',
        background: '#20302E',
      },
      spacing: {
        // "clamped" sizes are from https://utopia.fyi
        '3xs': 'clamp(0.31rem, 0.31rem + 0.00vw, 0.31rem)',
        '2xs': 'clamp(0.56rem, 0.54rem + 0.11vw, 0.63rem)',
        xs: 'clamp(0.88rem, 0.85rem + 0.11vw, 0.94rem)',
        sm: 'clamp(1.13rem, 1.08rem + 0.22vw, 1.25rem)',
        md: 'clamp(1.69rem, 1.62rem + 0.33vw, 1.88rem)',
        lg: 'clamp(2.25rem, 2.16rem + 0.43vw, 2.50rem)',
        xl: 'clamp(3.38rem, 3.24rem + 0.65vw, 3.75rem)',
        '2xl': 'clamp(4.50rem, 4.33rem + 0.87vw, 5.00rem)',
        '3xl': 'clamp(6.75rem, 6.49rem + 1.30vw, 7.50rem)',
      },
      fontSize: {
        // "clamped" sizes are from https://utopia.fyi
        xs: 'clamp(0.78rem, 0.77rem + 0.03vw, 0.80rem)',
        sm: 'clamp(0.94rem, 0.92rem + 0.11vw, 1.00rem)',
        base: 'clamp(1.13rem, 1.08rem + 0.22vw, 1.25rem)',
        lg: 'clamp(1.35rem, 1.28rem + 0.37vw, 1.56rem)',
        xl: 'clamp(1.62rem, 1.50rem + 0.58vw, 1.95rem)',
        '2xl': 'clamp(1.94rem, 1.77rem + 0.87vw, 2.44rem)',
        '3xl': 'clamp(2.33rem, 2.08rem + 1.25vw, 3.05rem)',
        '4xl': 'clamp(2.80rem, 2.45rem + 1.77vw, 3.82rem)',
      },
    },
  },
  plugins: [],
};
