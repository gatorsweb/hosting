/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
        'brown': '#421f2c',
        'yellow': '#e8a826',
        'light-brown': '#e9d6c5',
        'cream': '#eb5558',
        'black': '#110f0f',
    },
    container:{
        center: true,
        padding: '20px',
    },
    extend: {
      fontFamily:{
        'inter': 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}

