import { Component } from "react";

// Time formatter to format expiration time
import Time from 'react-time-format'

// Importing react icons
import { BsClockHistory } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'

// NFT images to use
import Image1 from '../../assets/images/hotsec/Item3-1.svg'
import Image2 from '../../assets/images/hotsec/Item3-2.svg'
import Image3 from '../../assets/images/hotsec/Item3-3.svg'
import Image4 from '../../assets/images/hotsec/Item3-4.svg'

// Silver hand
import SilverHand from '../../assets/images/hotsec/hand.svg'


class HotNFTSales extends Component {
  constructor () {
    super();
    this.state= {
      HotSales: [
        {
          id: 'item1',
          name: 'Snakeagone',
          biddingPrice: '1.20',
          expirationTime: 1654186177,
          imgUrl: Image1,
          peopleBidding: '30'
        },
        {
          id: 'item2',
          name: 'Leaflooww',
          biddingPrice: '1.15',
          expirationTime: 1656605973,
          imgUrl: Image2,
          peopleBidding: '500'
        },
        {
          id: 'item3',
          name: 'Banana NFT',
          biddingPrice: '2.03',
          expirationTime: 1656606065,
          imgUrl: Image3,
          peopleBidding: '2'
        },
        {
          id: 'item4',
          name: 'Splasher',
          biddingPrice: '3.36',
          expirationTime: 1656604420,
          imgUrl: Image4,
          peopleBidding: '167'
        }
      ],
      HottestSales: [
        {
          id: 'item1',
          name: 'Snakeagone',
          biddingPrice: '1.20',
          expirationTime: 1654186177,
          imgUrl: Image1,
          peopleBidding: '30'
        },
        {
          id: 'item2',
          name: 'Leaflooww',
          biddingPrice: '1.15',
          expirationTime: 1656605973,
          imgUrl: Image2,
          peopleBidding: '500'
        }
      ]
    }
  }
  render () {
    const circleStyle = {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundColor: '#333'
    }
    // Classes for NFT items in row
    return (
      <main className="max-w-body px-20">
        <div className="flex flex-row justify-between items-center">
        {/* Section 1 */}
          <div className="flex-1">
            <div>
              <p>Checkout the hottest Sale offers</p>
              <div>
                
              </div>
              <button>Show me more</button>
            </div>
          </div>
        {/* Section 2 */}
          <div className="flex-1">
            <div className="flex flex-row justify-around items-center" style={{
              borderBottom: '35px solid #555',
              borderRight: '25px solid transparent',
              borderTopLeftRadius: '10px',
              height: '0',
              width: '85px'
            }}>
              <div style={circleStyle}></div>
              <div style={circleStyle}></div>
              <div style={circleStyle}></div>
            </div>
            <div>
              <img src={SilverHand} alt="silverHand" />
              <p>Get started creating & selling your NFTs</p>
              <p>Nunc gravida faucibus netus feugiat tellus, viverra massa feugiat. Mi est sit.</p>
              <button>Get started</button>
            </div>
          </div>
        {/* Section 3 */}
            <div className="flex-1 border-2 border-solid border-gray-200 px-8 py-10 rounded-xl">
              <p className="text-3xl font-bold mb-10">Top NFTs at lower price</p>
              <div className="h-full">
                {this.state.HotSales.map(CheapItem => {
                  return (
                    <div key={CheapItem.id}>
                      <div className="w-full h-full flex flex-row justify-start items-start my-3">
                        <div>
                          <img src={ CheapItem.imgUrl } alt={CheapItem.name} className="rounded-lg" />
                        </div>
                        <div className="h-full w-full flex flex-col justify-between items-start ml-4">
                          <p className="text-lg font-medium">{CheapItem.name}</p>
                          <div className="mt-1 font-medium w-full flex flex-row justify-between items-center">
                            <div className="flex flex-row justify-between items-center">
                              <BsClockHistory className="mr-3" />
                              <Time className="mr-2" value={ new Date(CheapItem.expirationTime) } format="mm:ss" />
                            </div>
                            <div className="text-core px-2 bg-gray-200 rounded-lg text-blue-600 font-medium">
                              {CheapItem.biddingPrice} Eth
                            </div>
                          </div>
                          <div className="mt-2 w-full flex flex-row justify-between items-center">
                            <p className="text-sm">{CheapItem.peopleBidding} people are bidding</p>
                            <FiHeart />
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <button className="w-full mx-4 mt-6 text-lg font-medium py-3 rounded-lg text-center border-2 border-solid border-gray-300 hover:bg-gray-200">Show me more</button>
            </div>
        </div>
      </main>
    )
  }
}
export default HotNFTSales;