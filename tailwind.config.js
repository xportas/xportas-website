/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      blur: {
        xs: '2px',
      },
      boxShadow: {
        'custom': '6px 6px #52525240',
        'custom-hover': '12px 12px 5px 1px #52525240',
        'custom-dark-theme': '6px 6px #78716c',
        'custom-hover-dark-theme': '12px 12px 5px 1px #78716c',
      },
      colors: {
        'main-gray': "#525252",
        'screen-bgcolor': "#140E08"
      },
      fontFamily: {
        'header': ['public-pixel', 'Roboto mono', 'monoespace'],
        'main': ['chill', 'Roboto mono', 'monoespace'],
      },
      keyframes: {
        blink: {
          '0%': { opacity: '1' },
          '40%': { opacity: '1' },
          '60%': { opacity: '0' },
          '100%': { opacity: '0' },
        },
        moveBand: {
          '0%': { 'background-position-y': '0, 0' },
          '100%': { 'background-position-y': '-100vh, -100vh' },
        },
        fadeIn: {
          '0%': { transform: 'translateX(var(--dynamic-translate))', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeOut: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(var(--dynamic-translate))', opacity: '0' },
        },
        'wipe-in-right': {
          '0%': { opacity: '0', 'clip-path': 'inset(0 100% 0 0)' },
          '100%': { opacity: '1', 'clip-path': 'inset(0 0 0 0)' },
        },
        'wipe-out-left': {
          '0%': { opacity: '1', 'clip-path': 'inset(0 0 0 0)' },
          '100%': { opacity: '0', 'clip-path': 'inset(0 100% 0 0)' },
        },
      },
      animation: {
        blink: 'blink .5s linear infinite alternate',
        crtScreen: 'moveBand 3s linear infinite',
        fadeIn: 'fadeIn var(--dynamic-duration) ease-out',
        fadeOut: 'fadeOut var(--dynamic-duration) ease-out forwards',
        'wipe-in-right': 'wipe-in-right 1s cubic-bezier(.25, 1, .30, 1) both',
        'wipe-out-left': 'wipe-out-left 0.75s cubic-bezier(.25, 1, .30, 1) both'
      },
    },
  },
  plugins: [],
};
