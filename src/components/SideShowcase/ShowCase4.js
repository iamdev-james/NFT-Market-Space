import { Link } from "react-router-dom";
import { useEffect } from 'react'

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const circleStyle = {
  width: '15px',
  height: '15px',
  borderRadius: '50%',
  backgroundColor: '#BBC0D0',
  marginTop: '35px',
  marginLeft: '10px'
}



function ShowCase4 () {
  const control = useAnimation();
  const [ref, inView] = useInView();
  
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
  }
  return (
    <motion.main 
    ref={ref}
    variants={boxVariant}
    initial="hidden"
    animate={control}
    className="dark:bg-darkMode max-w-body px-6 md:px-12 lg:px-10 xl:px-24 pt-24">
      <div className="flex flex-col justify-start items-start"
      style={{
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
      }}>
        <div className="flex flex-row justify-start items-center pl-3 border-b-30 border-solid border-custom dark:border-[#262840]" style={{
          borderRight: '25px solid transparent',
          borderTopLeftRadius: '10px',
          height: '0',
          width: '240px'
        }}>
          <div style={circleStyle}></div>
          <div style={circleStyle}></div>
          <div style={circleStyle}></div>
        </div>
        <div className="pl-4 md:pl-16 lg:pl-12 xl:pl-32 bg-secondary py-16 rounded-b-xl rounded-tr-xl flex flex-col lg:flex-row justify-between items-center dark:bg-[#262840] mb-4">
          <div className="flex-1 h-full flex flex-col justify-between items-start">
            <p className="text-primary mb-2">OVERLINE</p>
            <p className="text-3xl md:text-5xl leading-semi font-bold mb-8 dark:text-white">Unlimited access with long lasting benefits. Join now</p>
            <p className="w-5/6 text-primary text-justify text-sm md:text-core">Donec volutpat bibendum justo, odio aenean congue est porttitor ut. Mauris vestibulum eros libero amet tincidunt.</p>
            <div className='w-5/6 md:w-3/4 xl:w-2/3 mt-12 flex flex-row justify-between items-center'>
              <Link className='py-80 px-81 md:px-82 bg-primary rounded-header-btn text-sm md:text-lg text-white font-medium' to='/auctions'><button>Get started</button></Link>
              <Link to='/community'><button className='py-80 px-81 md:px-82 rounded-header-btn text-sm md:text-lg border-2 border-solid border-primary text-primary font-medium'>Learn more</button></Link>
            </div>
          </div>
          <div className="flex-1 mt-12 md:mt-0">
            <img src="https://i.im.ge/2022/06/02/r8RoZD.png" alt="customers" />
          </div>
        </div>
      </div>
    </motion.main>
  )
}

export default ShowCase4;