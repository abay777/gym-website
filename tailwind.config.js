/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'sm':'640px',
      'md':'768px',
      'lg': '1200px',
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      backgroundImage: {
        'bannerMain': "url('./assets/mainPageBanner.jpg')",
       
      }
   
    },
  },
  plugins: [],
}