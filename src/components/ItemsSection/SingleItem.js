import Time from 'react-time-format';

import { FaUser } from 'react-icons/fa'

import ItemGraph from '../../assets/images/itemgraph.svg'

// Alternate image for creator
import Creator from '../../assets/images/popular/image5.svg'



const SingleItem = props => {
  return (
    <main className='pt-40 dark:bg-darkMode'>
      <div>
        <div className='h-auto w-11/12 md:w-5/6 lg:w-9/12 p-4 rounded-lg flex flex-col md:flex-row items-center justify-between m-auto border-2 border-solid border-gray-200 dark:border-gray-800'>
          <div className='md:w-6/12 h-mitem md:h-item md:flex-1'>
            <img src={props.state.image_url? props.state.image_url : 'https://lh3.googleusercontent.com/0oIfvpJPgWG9vCb_obS0pDmtrzoCuL3f5_tczGjU4s1J88UfU9F2D_fa22T-Z3-WoCKGgIV48wt3QQ7dXrAhR3P1Pw5x78aEpAopEQ'} alt={props.state.name} className="w-full h-full rounded-lg" style={{
                boxShadow: '0px 0.2px 5px #333'
            }}/>
          </div>
          <div className='md:flex-1 mt-6 md:mt-0 px-0 md:px-12'>
            <div>
              <p className='text-3xl font-bold mb-2 dark:text-white'>{props.state.name? props.state.name : 'Item Listed'}</p>
              <p className='text-primary my-4 md:my-0'>{props.state.description}</p>
              <div className='w-11/12 md:w-3/4 flex flex-row justify-between items-center py-4'>
                <div className='flex flex-row'>
                  <img src={props.state.owner? props.state.owner.profile_img_url : Creator } alt='profile' className='mr-3 w-12 h-12 rounded-full' />
                  <div className='text-sm'>
                    <p className='text-primary'>Creator</p>
                    <p className='cursor-pointer dark:text-white font-medium'>{props.state?.owner?.user?.username || props.state?.creator?.user?.username ||  'N/A'}</p>
                  </div>
                </div>
                <div className='text-sm flex flex-row justify-between items-center'>
                  <div className='p-3 border-2 border-solid border-gray-300 rounded-full mr-3 dark:border-gray-900'>
                    <FaUser className='dark:text-white text-lg'/>
                  </div>
                  <div>
                    <p className='text-primary'>Collections</p>
                    <p className='dark:text-white font-medium'>Nft Collec</p>
                  </div>
                </div>
              </div>
            </div>
          {/* Pricing section */}
            <div className='flex flex-col justify-between bg-secondary dark:bg-darkBid3 dark:bg-gradient-to-t dark:to-[#333] dark:from-[#060714] rounded-2xl py-3 px-6 my-5 md:my-0'>
              <div className='flex flex-row justify-between items-start'>
                <div>
                  <p className='mb-4 text-primary'>Current price</p>
                  <div className='flex flex-row justify-start items-end dark:text-white'>
                    <p className='text-3xl md:text-4xl lg:text-5xl font-bold'>{ props.location.state.ETH_PRICE } </p> <p className='text-core md:text-xl font-bold ml-1 md:ml-3'> ETH</p>
                  </div>
                </div>
                <div>
                  <p className='mb-4 text-primary'>Time left</p>
                  <p className='dark:text-white text-xl lg:text-2xl font-bold'><Time className="md:mr-2" value={ new Date(props.location.state.EXPIRATION_TIME) } format="mm:ss" /> mins </p>
                  <p className='text-sm text-primary'><Time className="mr-2" value={ new Date(props.location.state.EXPIRATION_TIME) } format="DD:MM:YY hh:mm:ss" /></p>
                </div>
              </div>
              <button className='mt-6 w-full text-lg font-medium text-white py-3 md:py-4 rounded-2xl bg-primary hover:bg-blue-900'>Place a bid</button>
            </div>
            <div>
              <p className='text-primary py-2'>History of bid ( {(Math.random() * 100).toFixed(0)} people are bidding this)</p>
              <img src={ItemGraph} alt="Item graph" />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </main>
  )
}

export default SingleItem;