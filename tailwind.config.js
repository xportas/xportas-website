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
        rotation: 'rotation 15s infinite linear',
        rotationLoader: 'rotationLoader 4s linear infinite reverse',
        shuttingOffAnimation: 'shrinkToLine 0.84s forwards, shrinkToDot 0.35s 0.84s forwards',
        turnOnAnimation: 'growFromDot 0.17s 0.84s forwards, growFromLine 0.44s forwards',
        wipeInRight: 'wipeInRight 1.3s cubic-bezier(.25, 1, .30, 1) both',
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
      cursor: {
        retroPointer: "url(../../public/images/pointer.webp), pointer"
      },
      fontFamily: {
        'header': ['public-pixel', 'Roboto mono', 'monoespace'],
        'main': ['chill', 'gopixel', 'Cursive', 'monoespace'],
      },
      fontSize: {
        'big-heading': 'clamp(33px,7vw,80px)',
        'footer-name': 'clamp(44px, 10vw, 147px)',
        'regular-heading': 'clamp(26px, 5vw, 32px)',
        'responsive-section-heading': 'clamp(23px, 4vw, 40px)',
        'short-heading': 'clamp(7px, 4vw, 40px)',
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
          '0%': { transform: 'translateY(var(--dynamic-translate))', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeOut: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(var(--dynamic-translate))', opacity: '0' },
        },
        growFromLine: {
          '0%': { 'border-radius': '3%', opacity: '0.5', transform: 'scaleY(0.01)' },
          '50%': { 'opacity': '1' },
          '100%': { 'border-radius': '0%', opacity: '0', transform: 'scaleY(1)' }
        },
        growFromDot: {
          '0%': { 'border-radius': '5%', opacity: '0', transform: 'scaleY(0) scaleX(1)' },
          '33%': { opacity: '1' },
          '100%': { transform: 'scaleY(0.01) scaleX(1)' }
        },
        rotation: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        rotationLoader: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        shrinkToDot: {
          '0%': { opacity: '1', transform: 'scaleY(0.01) scaleX(1)' },
          '100%': { 'border-radius': '5%', opacity: '0', transform: 'scaleY(0) scaleX(0)' },
        },
        shrinkToLine: {
          '0%': { transform: 'scaleY(1)' },
          '100%': { transform: 'scaleY(0.01)' },
        },
        wipeInRight: {
          '0%': { opacity: '0', 'clip-path': 'inset(0 100% 0 0)', filter: 'blur(5px)' },
          '100%': { opacity: '1', 'clip-path': 'inset(0 0 0 0)', filter: 'blur(0)' },
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
