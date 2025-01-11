/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-color': '#ffffff',
        'primary-color': '#13547a',
        'secondary-color': '#80d0c7',
        'section-bg-color': '#f0f8ff',
        'custom-btn-bg-color': '#80d0c7',
        'custom-btn-bg-hover-color': '#13547a',
        'dark-color': '#000000',
        'p-color': '#717275',
        'border-color': '#7fffd4',
        'link-hover-color': '#13547a',
      },
      fontFamily: {
         'great-vibes': ['Great Vibes', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'script': ['SignatureScript', 'cursive'],
      },
      borderRadius: {
        'large': '100px',
        'medium': '20px',
        'small': '10px',
      },
      fontWeight: {
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
      },
    },
  },
  plugins: [],
}