import { RoadMap } from '../../components/NFTPages/roadmap'

import '../Auction/auction.css'

export const Roadmap = () => {
  return (
    <main className="main h-auction py-14 overflow-hidden area dark:bg-darkMode">
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
      <div className='w-full flex flex-col justify-center items-center ItemCont absolute z-100 h-full mx-auto'>
        <RoadMap />
      </div>
    </main>
  )
}