module.exports = {
  purge: {
    enabled: process.env.WEBPACK_DEV_SERVER === 'true' && process.argv.join(' ').indexOf('build') !== -1,
    content: [
      "./src/**/*.{html,ts}",
      "./projects/**/*.{html,ts}"
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'mobile-top': "url('/assets/img/background_mobile_top.png')"
      }),
      colors: {
        'sandberg-ocker': '#F3EAD5',
      },
      fontFamily: {
        'sans': ['nunito', 'Times New Roman', 'Arial', 'sans-serif']
      }
    },
  },
  variants: {},
  plugins: [],
}
