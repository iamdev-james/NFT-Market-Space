import { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Icon Images to be used 
import { FaUserCircle } from 'react-icons/fa'
import { FaBook } from 'react-icons/fa'
import { FaPalette } from 'react-icons/fa'
import { FaArtstation } from 'react-icons/fa'


function ShowCase3 () {
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
    className='dark:bg-darkMode max-w-body px-8 md:px-24 lg:px-64 pt-20'>
      <div className='grid grid-cols-2 md:grid-cols-4 justify-between items-center'>
        <div className='flex flex-col justify-between items-center my-5 md:my-0'>
          <FaUserCircle className='text-gray-500 text-3xl my-2' />
          <p className='text-4xl font-bold dark:text-white'>300k</p>
          <p className='text-primary text-sm mt-1'>Users Active</p>
        </div>
        <div className='flex flex-col justify-between items-center my-5 md:my-0'>
          <FaArtstation className='text-gray-500 text-3xl my-2' />
          <p className='text-4xl font-bold dark:text-white'>52,5k</p>
          <p className='text-primary text-sm mt-1'>Artworks</p>
        </div>
        <div className='flex flex-col justify-between items-center my-5 md:my-0'>
          <FaPalette className='text-gray-500 text-3xl my-2' />
          <p className='text-4xl font-bold dark:text-white'>17,5k</p>
          <p className='text-primary text-sm mt-1'>Artists</p>
        </div>
        <div className='flex flex-col justify-between items-center my-5 md:my-0'>
          <FaBook className='text-gray-500 text-3xl my-2' />
          <p className='text-4xl font-bold dark:text-white'>35.58</p>
          <p className='text-primary text-sm mt-1'>ETH Spent</p>
        </div>
      </div>
    </motion.main>
  )
}

export default ShowCase3;