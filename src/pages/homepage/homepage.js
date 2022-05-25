import React, { Component, Suspense } from "react";

// Components to be used in the homepage
// Using Lazy Loader
const HeroSection = React.lazy(()=> import('../../components/HeroSection/HeroSection'));

class Home extends Component {
  render () {
    return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
      </Suspense>
    </div>
    )
  }
}

export default Home;