module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#4745D0'
      },
      textColor: {
        primary: '#7780A1'
      },
      fontSize: {
        '10xl': '98px',
        '9xl': '64px'
      },
      maxWidth: {
        'header': '1600px',
        'body': '1500px'
      },
      maxHeight: {
        'primary':'798px'
      },
      height: {
        'header': '10vh',
        'footer': '450px'
      },
      padding: {
        '80': '12px',
        '81': '24px'
      },
      borderRadius: {
        'header-btn': '12px'
      },
      borderColor: {
        primary: '#7780A1',
        secondary: '#F1F1F1'
      },
      boxShadow: {
        primary: '#0607141A'
      }
    },
  },
  plugins: [],
}
