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
import Image1_1 from '../../assets/images/hotsec/Item1-1.svg'
import Image1_2 from '../../assets/images/hotsec/Item1-2.svg'

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
          imgUrl: Image1_1,
          peopleBidding: '30'
        },
        {
          id: 'item2',
          name: 'Leaflooww',
          biddingPrice: '1.15',
          expirationTime: 1656605973,
          imgUrl: Image1_2,
          peopleBidding: '500'
        }
      ]
    }
  }
  render () {
    const circleStyle = {
      width: '15px',
      height: '15px',
      borderRadius: '50%',
      backgroundColor: '#333',
      marginTop: '35px',
      marginLeft: '10px'
    }
    // Classes for NFT items in row
    return (
      <main className="max-w-body px-20 mt-24">
        <div className="flex flex-row justify-between items-center">
        {/* Section 1 */}
          <div className="flex-1 border-2 border-solid border-gray-200 pl-8 py-7 rounded-xl">
            <div className=" h-full flex flex-col justify-between items-start">
              <p className="text-3xl font-bold mb-8 mr-20">Checkout the hottest Sale offers</p>
              <div className="w-full h-1/2 flex flex-row justify-between items-center">
                {this.state.HottestSales.map(Hottest => {
                  return (
                    <div key={Hottest.id}>
                      <div className="mr-4">
                        <img src={Hottest.imgUrl} alt={Hottest.id} className="rounded-lg" />
                        <p className="text-lg font-medium my-1">{Hottest.name}</p>
                        <div className="w-full flex flex-row justify-between items-center">
                          <div className="flex flex-row items-center font-medium">
                            <BsClockHistory className="mr-2" />
                            <Time className="mr-2" value={ new Date(Hottest.expirationTime) } format="mm:ss" />
                          </div>
                          <div className="text-core px-2 bg-gray-200 rounded-lg text-blue-600 font-medium">
                            {Hottest.biddingPrice} Eth
                          </div>
                        </div>
                        <div className="m-1" style={{
                          height: '1px',
                          width: '100%',
                          backgroundColor: '#E2E2ED'
                        }}>
                        </div>
                        <div className="text-primary flex flex-row justify-between items-center">
                          <p className="text-sm">{Hottest.peopleBidding} are bidding </p>
                          <FiHeart />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <button className="w-11/12 mt-6 text-lg font-medium py-3 rounded-lg text-center border-2 border-solid border-gray-300 hover:bg-gray-200">Show me more</button>
            </div>
          </div>
        {/* Section 2 */}
          <div className="mx-6 flex-1 -mt-5">
            <div className="flex flex-row justify-start items-center" style={{
              borderBottom: '22px solid #000',
              borderRight: '25px solid transparent',
              borderTopLeftRadius: '10px',
              height: '0',
              width: '150px'
            }}>
              <div style={circleStyle}></div>
              <div style={circleStyle}></div>
              <div style={circleStyle}></div>
            </div>
            <div className="bg-black rounded-b-xl rounded-tr-xl flex flex-col justify-between items-center text-white py-2">
              <img src={SilverHand} alt="silverHand" className="mt-6" style={{
                height: '370px'
              }} />
              <div className="text-left pl-4 pr-16">
                <p className="text-2xl font-medium">Get started creating & selling your NFTs</p>
                <p className="text-sm text-primary">Nunc gravida faucibus netus feugiat tellus, viverra massa feugiat. Mi est sit.</p>
              </div>
              <button className="w-11/12 mx-4 mt-6 text-xl font-bold py-3 my-10 mx-8 rounded-lg text-center bg-primary hover:bg-blue-900">Get Started</button>
            </div>
          </div>
        {/* Section 3 */}
            <div className="flex-1 border-2 border-solid border-gray-200 px-5 py-10 rounded-xl">
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
                          <div className="text-primary mt-2 w-full flex flex-row justify-between items-center">
                            <p className="text-sm">{CheapItem.peopleBidding} people are bidding</p>
                            <FiHeart />
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <button className="w-11/12 ml-2 mt-6 text-lg font-medium py-3 rounded-lg text-center border-2 border-solid border-gray-300 hover:bg-gray-200">Show me more</button>
            </div>
        </div>
      </main>
    )
  }
}
export default HotNFTSales;