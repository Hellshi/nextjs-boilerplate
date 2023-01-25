/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.js'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'default-blue': '#06092b'
      }
    }
  },
  plugins: []
}
