export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        legendaryGold: '#FFD700',
      },
      fontFamily: {
        primary: ['Ubuntu', 'ui-sans-serif', 'system-ui'],
        secondary: ['Roboto Condensed', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        '3xl': '6px 5px 12px 0px rgba(90,53,29,1)',
      },
      backgroundImage: {
        'card-texture': "url('/card-bg.webp')",
        'card-bg-water':
          "linear-gradient(rgba(0, 0, 255, 0.5),  rgba(255, 255, 0, 0.5)), url('/card-bg.webp')",
        'card-bg-fire':
          "linear-gradient(rgba(255, 0, 0, 0.5),  rgba(255, 0, 0, 0.5)), url('/card-bg-alt.webp')",
      },
    },
  },
  plugins: [],
};
