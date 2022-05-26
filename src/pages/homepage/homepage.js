import React, { Component, Suspense } from "react";

// Components to be used in the homepage
// Using Lazy Loader
const HeroSection = React.lazy(()=> import('../../components/HeroSection/HeroSection'));
const Showcase1 = React.lazy(()=> import('../../components/SideShowcase/SideShowcase'));
const Showcase2 = React.lazy(()=> import('../../components/SideShowcase/SideShowcase2'));

class Home extends Component {
  render () {
    return (
    <div className="overflow-x-hidden">
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Showcase1 />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Showcase2 />
      </Suspense>
    </div>
    )
  }
}

export default Home;