module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#4745D0',
        secondary: '#F2F3F6',
        darkMode: '#000B18'
      },
      backgroundImage: {
        'darkCircles': "url('/src/assets/images/Darkcircles.svg')",
        'Circles': "url('/src/assets/images/herocircles.svg')",
        'Gradient': "url('/src/assets/images/GradientFade.svg')",
        'DarkGradient': "url('/src/assets/images/DarkGradientFade.svg')"
      },
      textColor: {
        primary: '#7780A1'
      },
      fontSize: {
        '10xl': '98px',
        '9xl': '64px'
      },
      borderWidth: {
        '2': '0.5px',
        '30': '30px'
      },
      zIndex: {
        '100': '100',
      },
      maxWidth: {
        'header': '1600px',
        'body': '1500px'
      },
      maxHeight: {
        'primary':'798px'
      },
      width: {
        'searchBar': '943px',
        'psearchBar': '443px',
        'msearchBar': '300px'
      },
      height: {
        'header': '10vh',
        'footer': '450px',
        'searchBar': '84px',
        'msearchBar': '64px'
      },
      padding: {
        '78': '10px',
        '80': '12px',
        '81': '24px',
        '82': '35px'
      },
      borderRadius: {
        'header-btn': '12px'
      },
      borderColor: {
        primary: '#7780A1',
        secondary: '#F1F1F1',
        custom: '#F2F3F6'
      },
      boxShadow: {
        primary: '#0607141A'
      }
    },
  },
  plugins: [],
}
