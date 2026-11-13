/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ['./index.html', './componentes.html'],
  theme: {
    extend: {
      colors: {
        'verde-ruta': '#1e7a4f',
        'naranja-pedal': '#f39a2b',
        'azul-noche': '#14213d',
        'crema': '#faf6ef',
        'gris-asfalto': '#5b6470',
        'amarillo-farol': '#FFD166',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'open-sans': ['"Open Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
