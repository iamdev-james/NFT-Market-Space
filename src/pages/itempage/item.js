import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import axios from 'axios';

import Time from 'react-time-format';

import { FaUser } from 'react-icons/fa'

import ItemGraph from '../../assets/images/itemgraph.svg'

function SingleItem () {
  
  // Getting URL params and state to be used to fetch
  const { itemid } = useParams();
  const location = useLocation();

  // React useState to setState and init an empty state
  const [state, setState] = useState([]);

  // React use effect to make API call to get NFT item
  useEffect(() => {
    const fetchItem = async() => {
      await axios(`https://testnets-api.opensea.io/api/v1/asset/${location.state.CONTRACT_ADDRESS}/${itemid}/`)
      .then( res => {
        setState(res.data)
      })
      .catch(err => {
        console.log(`Unable to fetch, an error occured. Here is the err:   ${err}`)
      })
    }
    fetchItem();
  })
// Returning response to end users
  return (
    <main className='pt-40 dark:bg-darkMode'>
      <div>
        <div className='h-auto w-9/12 p-4 rounded-lg flex flex-row items-center justify-between m-auto border-2 border-solid border-gray-200'>
          <div className='w-6/12 h-item flex-1'>
            <img src={state.image_url} alt={state.name} className="w-full h-full rounded-lg" style={{
                boxShadow: '0px 0.2px 5px #333'
            }}/>
          </div>
          <div className='flex-1 px-12'>
            <div>
              <p className='text-3xl font-bold mb-2 dark:text-white'>{state.name}</p>
              <p className='text-primary'>{state.description}</p>
              <div className='w-3/4 flex flex-row justify-between items-center py-4'>
                <div className='flex flex-row'>
                  <img src={state.owner? state.owner.profile_img_url : 'testing out'} alt='profile' className='mr-3 w-12 h-12 rounded-full' />
                  <div className='text-sm'>
                    <p className='text-primary'>Creator</p>
                    <p className='font-medium'>{state.owner? state.owner.user.username : 'testing out'}</p>
                  </div>
                </div>
                <div>
                  <img src='' alt='' />
                  <FaUser />
                  <div>
                    <p>Collections</p>
                    <p>{}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-between bg-secondary dark:bg-itemDarkBid rounded-2xl py-3 px-6'>
              <div className='flex flex-row justify-between items-start'>
                <div>
                  <p className='mb-4'>Current price</p>
                  <div className='flex flex-row justify-start items-end dark:text-white'>
                    <p className='text-5xl font-bold'>{ location.state.ETH_PRICE } </p> <p className='text-xl font-bold ml-3'> ETH</p>
                  </div>
                </div>
                <div>
                  <p className='mb-4'>Time left</p>
                  <p className='text-2xl font-bold'><Time className="mr-2" value={ new Date(location.state.EXPIRATION_TIME) } format="mm:ss" /> mins </p>
                  <p className='text-sm text-primary'><Time className="mr-2" value={ new Date(location.state.EXPIRATION_TIME) } format="DD:MM:YY hh:mm:ss" /></p>
                </div>
              </div>
              <button className='mt-6 w-full text-lg font-medium text-white py-4 rounded-2xl bg-primary'>Place a bid</button>
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