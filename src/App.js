import './App.css';
import { Component } from 'react';
import { Route, Routes } from 'react-router-dom'

// CSS files for carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Pages to be used
// Home Page
import HomePage from './pages/homepage/homepage'
// Item Page
import ItemPage from './pages/itempage/item'
// Header
import Header from './layouts/Header/Header'
// Footer
import Footer from './layouts/Footer/Footer'
// 404 page
import NotFound from './pages/NotFound/404'

class App extends Component {
  constructor () {
    super();
    this.state = {}
  }

  render () {
    return (
      <main className="overflow-x-hidden">
        <Header />
        <Routes>
          <Route path='/' element = { <HomePage /> } />
          <Route path='/item/:itemid' element = { <ItemPage /> } />
          <Route path='*' element = { <NotFound /> } />
        </Routes>
        <Footer />
      </main>
    )
  }
}
export default App;
