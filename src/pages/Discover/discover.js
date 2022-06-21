import { CircleLoader } from 'react-awesome-loaders'
import '../Auction/auction.css'

import { FaArrowRight } from 'react-icons/fa'

export const Discover = () => {
  return (
    <main className="main h-auction py-32 overflow-hidden area dark:bg-darkMode">
      <ul className="circles" style={{
      filter: 'blur(3px)'
    }}>
        <li className='bg-custom dark:bg-primary'></li>
        <li className='bg-custom dark:bg-primary'></li>
        <li className='bg-custom dark:bg-primary'></li>
        <li className='bg-custom dark:bg-primary'></li>
        <li className='bg-custom dark:bg-primary'></li>
        <li className='bg-custom dark:bg-primary'></li>
        <li className='bg-custom dark:bg-primary'></li>
        <li className='bg-custom dark:bg-primary'></li>
        <li className='bg-custom dark:bg-primary'></li>
        <li className='bg-custom dark:bg-primary'></li>
      </ul>
      <div className='w-full flex flex-col justify-start items-center ItemCont absolute z-100 h-full mx-auto'>
        <CircleLoader
          meshColor={"#6366F1"}
          lightColor={"#E0E7FF"}
          duration={4.5}
          desktopSize={"90px"}
          mobileSize={"64px"}
        />
        <div className='mt-0 text-3xl font-bold dark:text-white'>DISCOVER!!!</div>
        <p className='font-medium text-sm py-4 dark:text-white'>Click the button below to checkout our whitelisted NFTs</p>
        <button className="flex flex-row justify-center items-center my-3 px-6 sm:px-6 py-3 sm:py-3 rounded-lg bg-primary text-white text-core font-bold hover:bg-blue-900">Check whitelist <FaArrowRight className="ml-4 text-white text-2xl" /></button>
      </div>
    </main>
  )
}