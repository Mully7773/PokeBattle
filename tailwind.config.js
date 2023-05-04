export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Ubuntu', 'ui-sans-serif', 'system-ui'],
        secondary: ['Roboto Condensed', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        '3xl': '6px 5px 12px 0px rgba(90,53,29,1)',
      },
    },
  },
  plugins: [],
};
