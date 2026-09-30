/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta de Complejo PM: blanco y negro, como el logo
        noche: '#141414',   // negro: texto principal y encabezado
        cancha: {
          DEFAULT: '#2A2A2A', // gris muy oscuro: botones, links, selección
          claro: '#4A4A4A',
          suave: '#E9E9E9',
        },
        vidrio: '#F4F4F4',  // fondo general
        pelota: '#D4D4D4',  // acento: gris claro (pasos completos, destacados)
        red: { DEFAULT: '#B42318' },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'Arial Narrow', 'sans-serif'],
        sans: ['Barlow', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
