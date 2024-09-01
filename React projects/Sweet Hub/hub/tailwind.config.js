/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3AA6B9',
        secondary: '#FF9EAA',
        plight: "#92CCD6",
        slight: "#FFC4CB",
        dark: "#000",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
        },
      },
    }
  },
  plugins: [],
}
