import { useEffect } from "react";
import { Link } from "react-router-dom"

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function SideShowcase () {
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
    animate={control} transition={{ duration: 0.5 }}
    className='dark:bg-darkMode max-w-body overflow-x-hidden flex flex-col lg:flex-row justify-start items-center pt-24 px-6 md:px-20 lg:px-10 xl:px-20'>
      <div className='flex-1 order-1 h-full flex flex-col justify-around items-start pr-0 md:pr-32 lg:pr-6 xl:pr-48'>
        <div className='mb-8'>
          <p className="text-primary text-lg">OVERLINE</p>
          <p style={{
            lineHeight: '100%',
            letterSpacing: '0.2px'
          }} className='text-4xl md:text-7xl xl:text-9xl font-bold dark:text-white'>Unlimited non-fungible tokens and top notch collectibles</p>
        </div>
        <p className='text-primary mb-8 text-sm md:text-lg pr-12'>Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
        <div className='flex flex-row justify-start items-center'>
          <Link to='/auctions'><button className='text-sm md:text-lg text-white font-medium rounded-header-btn mr-8 py-80 px-81 bg-primary'>Get Started</button></Link>
          <Link to='/community'><button className='text-sm md:text-lg font-medium text-primary rounded-header-btn py-80 px-81 border-2 border-priamry'>Learn more</button></Link>
        </div>
      </div>
      <div className='flex-1 order-2'>
        <img src="https://i.im.ge/2022/06/02/r88EOr.png" alt="ShowcaseImage" />
      </div>
    </motion.main>
  )
}

export default SideShowcase