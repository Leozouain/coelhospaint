/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", " './node_modules/tw-elements/dist/js/**/*.js'",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'custom': 'repeat(auto-fit, minmax(300px, 1fr))',
        'custom2': 'repeat(auto-fit, minmax(110px, 1fr))',
        
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
