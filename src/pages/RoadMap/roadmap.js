import { BookLoader } from 'react-awesome-loaders'
import '../Auction/auction.css'

export const Roadmap = () => {
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
      <div className='w-full flex flex-col justify-center items-center ItemCont absolute z-100 h-full mx-auto'>
        <BookLoader />
        <div className='mt-8 text-xl font-medium dark:text-white'>Welcome to Roadmap</div>
      </div>
    </main>
  )
}