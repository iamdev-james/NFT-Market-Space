import './App.css';
import { Component } from 'react';
import { Route, Routes } from 'react-router-dom'

// Importing Axios for Opensea API calls
import axios from "axios"


// CSS files for carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Pages to be used
// Home Page
import HomePage from './pages/homepage/homepage'
// Item Page
import ItemPage from './pages/itempage/item'
// Auction
import Auctions from './pages/Auction/auction'
// Discover
import { Discover } from './pages/Discover/discover';
// Community
import { Community } from './pages/Community/community';
// Roadmap
import { Roadmap } from './pages/RoadMap/roadmap';
// Header
import Header from './layouts/Header/Header'
// Footer
import Footer from './layouts/Footer/Footer'
// 404 page
import NotFound from './pages/NotFound/404'


class App extends Component {
  constructor () {
    super();
    this.state = {
      NFTs: []
    }
  }

  componentDidMount () {
    axios.get('https://testnets-api.opensea.io/wyvern/v1/orders?bundled=false&include_bundled=false&side=1&limit=20&offset=0&order_by=created_date&order_direction=desc')
      .then( res => {
        this.setState({NFTs: res.data.orders})
        console.log(res)
      })
      .catch(err => {
        console.log('oops, missed that. An error occured')
      })
  }

  render () {
    return this.state.NFTs ? (
      <main className="overflow-x-hidden dark:bg-darkMode">
        <Header />
        <Routes>
          <Route path='/' element = { <HomePage  NFTs= {this.state.NFTs} /> } />
          <Route path='/item/:itemid' element = { <ItemPage NFTs= {this.state.NFTs} /> } />
          <Route path='/auctions' element = { <Auctions NFTs = {this.state.NFTs} /> } />
          <Route path='/discover' element = { <Discover /> } />
          <Route path='/roadmap' element = { <Roadmap /> } />
          <Route path='/community' element = { <Community /> } />
          <Route path='*' element = { <NotFound /> } />
        </Routes>
        <Footer />
      </main>
    ) :
    (
      <div>
        Something went wrong
      </div>
    )
  }
}
export default App;
