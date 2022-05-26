import './App.css';
import { Component } from 'react';

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
