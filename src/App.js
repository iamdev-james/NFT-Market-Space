import './App.css';
import { Component } from 'react';

// CSS files for carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Pages to be used
// Home Page
import HomePage from './pages/homepage/homepage'
// Header
import Header from './layouts/Header/Header'
// Footer
import Footer from './layouts/Footer/Footer'

class App extends Component {
  constructor () {
    super();
    this.state = {}
  }

  render () {
    return (
      <main className="overflow-x-hidden">
        <Header />
        <HomePage />
        <Footer />
      </main>
    )
  }
}
export default App;
