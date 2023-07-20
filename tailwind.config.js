module.exports = {
  important: true,
  prefix: 'tw-',
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '750px',
      lg: '990px',
      xlg: '1440px',
      x2lg: '1920px',
      pageMaxWidth: '1440px',
    },
    extend: {
      fontFamily: {
        heading: 'var(--font-heading-family)',
      },
    },
    extend: {
      colors: {
        lightblue: {
          50: '#EBFAFF',
          100: '#D1F4FF',
          200: '#99E6FF',
          300: '#52D4FF',
          400: '#00BBFA',
          500: '#0099CC',
          600: '#008AB8',
          700: '#00779E',
          800: '#006385',
          900: '#00455C',
          950: '#003647',
        },
        darkblue: {
          50: '#F0F7FF',
          100: '#DBEDFF',
          200: '#ADD5FF',
          300: '#7ABAFF',
          400: '#248EFF',
          500: '#0054AC',
          600: '#004A99',
          700: '#00438A',
          800: '#003670',
          900: '#002752',
          950: '#001933',
        },
      },
    },
  },
  plugins: [],
};
