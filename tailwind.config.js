/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bio-verde': '#3c644d',
        'bio-rojo': '#8c3f3f',
        'bio-terra': '#be8260',
        'bio-amarillo': '#f2d129', // Amarillo Chichi
        'bio-fondo': '#f9f9f7',
      },
      fontFamily: {
        // Títulos: Eras Demi ITC
        eras: ['"Eras Demi ITC"', 'sans-serif'], 
        // Subtítulos/Cuerpo: Cambria
        cambria: ['Cambria', 'serif'],
      },
    },
  },
  plugins: [],
}