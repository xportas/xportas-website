/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        blink: 'blink .5s linear infinite alternate',
        crtScreen: 'moveBand 3s linear infinite',
        fadeIn: 'fadeIn var(--dynamic-duration) ease-out',
        fadeOut: 'fadeOut var(--dynamic-duration) ease-out forwards',
        rotation: 'rotation 10s infinite linear',
        wipeInRight: 'wipeInRight 1s cubic-bezier(.25, 1, .30, 1) both',
        wipeOutLeft: 'wipeOutLeft 0.75s cubic-bezier(.25, 1, .30, 1) both'
      },
      backgroundImage: {
        'pixel-space': "url('/images/space-pixel-art.jpeg')",
      },
      blur: {
        xs: '2px',
      },
      boxShadow: {
        'custom': '6px 6px #52525240',
        'custom-hover': '12px 12px 5px 1px #52525240',
        'custom-dark-theme': '6px 6px #78716c',
        'custom-hover-dark-theme': '12px 12px 5px 1px #78716c',
        'lang-glow': '0 0 30px 10px #FFAD36',
      },
      colors: {
        'main-gray': "#525252",
        'secondary-gray': "#A8947E",
        'secondary-orange': "#c3751c",
        'retroScreen-bgcolor': "#140E08",
        'retroScreen-txtcolor': "#FFAD36",
      },
      fontFamily: {
        'header': ['public-pixel', 'Roboto mono', 'monoespace'],
        'main': ['chill', 'Roboto mono', 'monoespace'],
      },
      fontSize: {
        'big-heading': 'clamp(30px, 7vw, 80px)',
        'regular-heading': 'clamp(30px, 4vw, 40px)',
        'short-heading': 'clamp(26px, 5vw, 32px)',
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
          '100%': { 'background-position-y': '100vh, 100vh' },
        },
        fadeIn: {
          '0%': { transform: 'translateX(var(--dynamic-translate))', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeOut: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(var(--dynamic-translate))', opacity: '0' },
        },
        rotation: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        wipeInRight: {
          '0%': { opacity: '0', 'clip-path': 'inset(0 100% 0 0)' },
          '100%': { opacity: '1', 'clip-path': 'inset(0 0 0 0)' },
        },
        wipeOutLeft: {
          '0%': { opacity: '1', 'clip-path': 'inset(0 0 0 0)' },
          '100%': { opacity: '0', 'clip-path': 'inset(0 100% 0 0)' },
        },
      },
      listStyleType: {
        square: 'square',
      },
    },
  },
  plugins: [],
};
