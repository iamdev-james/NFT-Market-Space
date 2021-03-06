import { useEffect } from "react";
import { FaSearch } from 'react-icons/fa'

// Using framer and react observeble to check when element is in view port
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Use dark hook to get current
import useDark from '../../hooks/useDark';

// Images to be Used
import HeroFrame1 from '../../assets/images/heroframe1.svg'
import HeroFrame2 from '../../assets/images/heroframe2.svg'

// Company Logos
import Ritter from '../../assets/images/herologos/RitterSport.svg'
import Adidas from '../../assets/images/herologos/Adidas.svg'
import Nike from '../../assets/images/herologos/Nike.svg'
import Holland from '../../assets/images/herologos/NewHolland.svg'

// Showcase Hero 
import HeroSquares from '../../assets/images/herosquares.svg'
import LittleCircles from '../../assets/images/HeroLittleCircles.svg'
import BlurredLogo from '../../assets/images/BluredLogo.svg'
import DarkLittleCircles from '../../assets/images/DarkLittleCircles.svg'
// import GradientFade from '../../assets/images/GradientFade.svg'
// import DarkGradientFade from '../../assets/images/DarkGradientFade.svg'

function HeroSection() {
    const control = useAnimation();
    const [ref, inView] = useInView();
    
    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);
    
    // Animation parameters
    const boxVariant = {
      visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
      hidden: { opacity: 0, scale: 0 }
    }
    const SlideLeftVariant = {
      visible: {
        x: 0, opacity: 1, scale: 1, transition: { duration: 0.45}
      },
      hidden: {
        x: -150, opacity: 0.8, scale: 0.5
      }
    }

    const searchBar = {
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 25px 75px rgba(6, 7, 20, 0.1)',
      borderRadius: '16px'  
    }
    const [colorTheme] = useDark();
    return (
      <main className="bg-Circles dark:bg-darkCircles w-screen md:w-full max-w-body overflow-x-hidden dark:bg-darkMode" style={{
        'backgroundPosition': 'center center'
      }}>
        {/* <div className='h-1/3 bg-Gradient dark:bg-DarkGradient absolute' style={{
          // bottom: '-29%'
        }}></div> */}
        <img src={HeroSquares} style={{
          zIndex: '1'
        }} alt="squares" className="absolute top-48 hidden md:inline" />
        <img src={colorTheme === 'light'? DarkLittleCircles : LittleCircles} style={{
          zIndex: '1'
        }} alt="squares" className="absolute" />
        <img src={BlurredLogo} style={{
          zIndex: '1'
        }} alt="squares" className="absolute" />
        <div className="2xl:max-h-primary lg:h-screen md:h-phero h-screen flex flex-col justify-around items-center mt-32">
          <div className="h-3/6 md:h-3/5 lg:h-3/5 flex flex-col justify-between items-center lg:z-100 z-1">
            <div className="flex flex-col justify-between items-center">
              <motion.div
              ref={ref}
              variants={SlideLeftVariant}
              initial="hidden"
              animate={control}    
              >
                <p className="text-lg text-primary">NON FUNGIBLE TOKEN</p>
              </motion.div>
              <motion.div 
              ref={ref}
              variants={boxVariant}
              initial="hidden"
              animate={control}    
              className="flex flex-col justify-center items-center">
                <div className="flex flex-row justify-end items-center mb-12">
                  <p className="lg:text-10xl md:text-6xl text-5xl font-bold dark:text-white">A new NFT</p>
                  <img src={HeroFrame1} alt='Frame1' className='animate-bounce scale-50 lg:scale-100' />
                </div>
                <div className="flex flex-row justify-start items-center my-10 -mt-10 md:ml-16">
                  <img src={HeroFrame2} alt="Frame2" className='animate-bounce scale-50 lg:scale-100' />
                  <p className="dark:text-white lg:text-10xl md:text-6xl text-5xl font-bold">Experience</p>
                </div>
              </motion.div>
              <div>
                <p className="text-primary text-lg">Discover, collect and sell</p>
              </div>
            </div>
            <div style={searchBar} className="w-msearchBar md:w-psearchBar lg:w-searchBar lg:h-searchBar h-msearchBar text-sm lg:text-lg flex flex-row justify-around items-center lg:z-1 z-90">
              <input type="search" placeholder="Items, collections and creators" style={{
                outline: 'none',
              }} className="w-2/3 md:w-1/2 h-full" />
              <select style={{
                borderLeft: '2px solid #7780A1',
                outline: 'none'
              }} className="hidden md:inline text-primary h-1/3 pl-6"> 
                <option>Category</option>
                <option>NFT</option>
                <option>Nature</option>
                <option>World</option>
                <option>Tech</option>
                <option>Innovation</option>
              </select>
              <FaSearch className="text-blue-800 text-2xl cursor-pointer" />
            </div>
          </div>
          <div className="w-full md:w-4/5 lg:w-2/5 flex flex-row justify-between items-center mt-0 mb-48 md:mb-0 lg:mt-16 z-1 lg:z-100 scale-75 md:scale-100">
            <img src={Ritter} alt="Ritter" />
            <img src={Adidas} alt="Adidas" />
            <img src={Nike} alt="Nike" />
            <img src={Holland} alt="NewHolland" />
          </div>
        </div>
      </main>
    )
  }

export default HeroSection;