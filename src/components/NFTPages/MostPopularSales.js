import { Component } from "react";

// Time formatter to format expiration time
import Time from 'react-time-format'

// Importing react icons
import { BsClockHistory } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'

// NFT Images
import Images1 from '../../assets/images/popular/image1.svg'
import Images2 from '../../assets/images/popular/image2.svg'
import Images3 from '../../assets/images/popular/image3.svg'
import Images4 from '../../assets/images/popular/image4.svg'
import Images5 from '../../assets/images/popular/image5.svg'
import Images6 from '../../assets/images/popular/image6.svg'

class PopularSales extends Component {
  constructor () {
    super();
    this.state= {
      popularSales: [
        {
          id: 'item1',
          name: 'Snakeagone',
          biddingPrice: '1.20',
          expirationTime: 1654186177,
          imgUrl: Images1,
          peopleBidding: '30'
        },
        {
          id: 'item2',
          name: 'Leaflooww',
          biddingPrice: '1.90',
          expirationTime: 1656605973,
          imgUrl: Images2,
          peopleBidding: '500'
        },
        {
          id: 'item3',
          name: 'Banana NFT',
          biddingPrice: '2.20',
          expirationTime: 1656606065,
          imgUrl: Images3,
          peopleBidding: '2'
        },
        {
          id: 'item4',
          name: 'Splasher',
          biddingPrice: '7.20',
          expirationTime: 1656604420,
          imgUrl: Images4,
          peopleBidding: '167'
        },
        {
          id: 'item5',
          name: 'Ilumsonaryfi',
          biddingPrice: '0.20',
          expirationTime: 1669480525,
          imgUrl: Images5,
          peopleBidding: '15'
        },
        {
          id: 'item6',
          name: 'EvolutonFT',
          biddingPrice: '10.90',
          expirationTime: 1656602996,
          imgUrl: Images6,
          peopleBidding: '101'
        }
      ]
    }
  }
  render () {
    return (
      <div className="dark:bg-darkMode max-w-body px-6 md:px-20 pt-24">
        <div className="text-center">
          <div>
            <p className="text-primary text-sm md:text-core">OVERLINE</p>
            <p className="dark:text-white text-2xl md:text-3xl font-bold">Most popular live auctions</p>
          </div>
          <div className="w-full md:w-2/5 mx-auto my-7 flex flex-row justify-around items-center">
            <p className="py-1 px-3 md:px-4 text-xs md:text-core font-medium border-2 border-solid border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-900">Architecture</p>
            <p className="py-1 px-3 md:px-4 text-xs md:text-core font-medium border-2 border-solid border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-900">Photography</p>
            <p className="py-1 px-3 md:px-4 text-xs md:text-core font-medium border-2 border-solid border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-900">Games</p>
            <p className="py-1 px-3 md:px-4 text-xs md:text-core font-medium border-2 border-solid border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-900">Music</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 justify-between items-center">
          {this.state.popularSales.map(Item => {
          return (
            <div key={Item.id}>
              <div className="flex flex-col justify-center items-start mx-4 my-4 lg:my-12">
                <img src={Item.imgUrl} alt={Item.name} style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '20px',
                  boxShadow: '0px 0.2px 5px #333'
                }} />
                <div className="w-full my-4 flex flex-row justify-between items-center">
                  <p className="dark:text-white text-core font-bold">{ Item.name }</p>
                </div>
              {/* Expiration and bidding price entry container */}
                <div className="w-full flex flex-row justify-between items-center">
                {/* Expiration Time Entry */}
                  <div className="flex flex-row justify-between items-center text-sm text-gray-700 font-medium dark:text-primary">
                    <BsClockHistory className="mr-1" />
                    <Time className="mr-1 text-sm" value={ new Date(Item.expirationTime) } format="mm:ss" /> left
                  </div>
                {/* Bidding Price Entry */}
                  <p className="text-sm px-2 bg-gray-200 rounded text-blue-600 font-medium dark:bg-gray-900">{ Item.biddingPrice } Eth</p>
                </div>
                <div className="mt-4 mb-1 bg-[#E2E2ED] dark:bg-gray-800" style={{
                  height: '1px',
                  width: '100%'
                }}>
                </div>
                <div className="w-full flex flex-row justify-between items-center">
                  <div>
                    <p className="text-sm text-primary">{ Item.peopleBidding } people are bidding</p>
                  </div>
                  <div className="flex flex-row justify-start items-center py-2 text-primary hover:text-red-400">
                    <FiHeart />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <button className="text-lg text-primary font-medium my-4 py-2 px-6 rounded-lg border-2 border-solid border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-900 dark:border-gray-700 dark:text-white">Show me more</button>
        </div>
      </div>
    )
  }
}

export default PopularSales;