import React, { Suspense } from "react";

import { MainLoader } from '../../Loaders/MainLoader'

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

const Home = props => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <Suspense fallback={
        <MainLoader />
      }>
        <LiveAuction NFTs = { props } />
      </Suspense>
      <Suspense fallback={<MainLoader />}>
        <Showcase1 />
      </Suspense>
      <Suspense fallback={<MainLoader />}>
        <HotSales />
      </Suspense>
      <Suspense fallback={<MainLoader />}>
        <Showcase2 />
      </Suspense>
      <Suspense fallback={<MainLoader />}>
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
      <Suspense fallback={<MainLoader />}>
        <Showcase3 />
      </Suspense>
      <Suspense fallback={<MainLoader />}>
        <Showcase4 />
      </Suspense>
    </div>
  )
}

export default Home;