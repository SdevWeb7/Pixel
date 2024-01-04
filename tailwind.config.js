export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'desktop': {max: '1030px'},
      'mobile': {max: '500px'}
    },
    extend: {
      colors: {
        custom1: 'hsl(300, 24%, 96%)',
        custom2: 'hsl(303, 10%, 53%)',
        custom3: 'hsl(300, 43%, 22%)',
        custom4: 'hsl(333, 80%, 67%)'
      },
      fontFamily: {
        spartan: 'Spartan'
      }
    },
  },
  plugins: [],
}