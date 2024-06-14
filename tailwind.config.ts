import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  darkMode: 'class',

  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          50: '#F2EEFC',
          100: '#E6DDF8',
          200: '#CFBFF3',
          300: '#B69CEC',
          400: '#9F7EE7',
          500: '#865CE0',
          600: '#6029D6',
          700: '#471E9F',
          800: '#30146B',
          900: '#170A33',
          950: '#0B051A',
        },
      },
      
    },
  },
};
