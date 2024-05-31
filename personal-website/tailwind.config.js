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
      },
      colors: {
        'main-color-gray': "#525252",
      },
      fontFamily: {
        'header': ['public-pixel', 'Roboto mono', 'monoespace'],
        'main': ['chill', 'Roboto mono', 'monoespace'],
      }
    },
  },
  plugins: [],
};
