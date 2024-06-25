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
      }
    },
  },
  plugins: [],
};
