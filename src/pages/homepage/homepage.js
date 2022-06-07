import React, { Component, Suspense } from "react";
// Importing Axios for Opensea API calls
import axios from "axios"

// Components to be used in the homepage
import HeroSection from '../../components/HeroSection/HeroSection';
// Using Lazy Loader
const Showcase1 = React.lazy(()=> import('../../components/SideShowcase/SideShowcase'));
const LiveAuction = React.lazy(()=> import('../../components/NFTPages/LiveAuctions'));
const Showcase2 = React.lazy(()=> import('../../components/SideShowcase/SideShowcase2'));
const HotSales = React.lazy(()=> import('../../components/NFTPages/HotSales'));
const PopularSales = React.lazy(()=> import('../../components/NFTPages/MostPopularSales'));
const Showcase3 = React.lazy(()=> import('../../components/SideShowcase/ShowCase3'));
const Showcase4 = React.lazy(()=> import('../../components/SideShowcase/ShowCase4'));

class Home extends Component {
  constructor () {
    super()
    this.state = {
      NFTs: []
    };
  }

  componentDidMount () {
    axios.get('https://testnets-api.opensea.io/wyvern/v1/orders?bundled=false&include_bundled=false&side=1&limit=20&offset=0&order_by=created_date&order_direction=desc')
      .then( res => {
        this.setState({NFTs: res.data.orders})
      })
      .catch(err => {
        console.log('oops, missed that. An error occured')
      })
  }
  render () {
    return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <Suspense fallback={<div>Loading...</div>}>
        <LiveAuction NFTs={this.state.NFTs} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Showcase1 />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <HotSales />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Showcase2 />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="bg-[#E2E2ED] dark:bg-gray-800" style={{
          height: '1px',
          width: '100%'
        }}>
        </div>
        <PopularSales />
        <div className="bg-[#E2E2ED] dark:bg-gray-800" style={{
          height: '1px',
          width: '100%'
        }}>
        </div>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Showcase3 />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Showcase4 />
      </Suspense>
    </div>
    )
  }
}

export default Home;