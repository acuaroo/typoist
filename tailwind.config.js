module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'main-mono': ['PT Mono', 'monospace']
      },
      colors: {
        'newspaper': '#f6f7dc',
        'dark-cobalt': '#232329',
        'cobalt': '#2a2a40'
      }
    },
  },
  plugins: [],
};
