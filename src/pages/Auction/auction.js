import './auction.css';

import AuctionItem from '../../components/NFTPages/Auctions';

const Auction = props => {
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
    <div className='ItemCont absolute z-100 h-full'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center px-6 md:px-12 lg:x-10 xl:px-20'>
        {props.NFTs.map(Item => {
          return (
            <div key={Item.id}>
              <AuctionItem { ...Item } />
            </div>
            );
          })}
        </div>
      </div>
    </main>
  )
}

export default Auction;