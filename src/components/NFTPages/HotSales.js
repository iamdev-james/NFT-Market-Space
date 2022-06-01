import { Component } from "react";

// Importing react icons
// import { BsClockHistory } from 'react-icons/bs'
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
    return (
      <main className="max-w-body px-20">
        <div>
          <div className="flex flex-row justify-between items-center">
            <div>
              <p>Checkout the hottest Sale offers</p>
              <div>
                
              </div>
              <button>Show me more</button>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-around items-center" style={{
              borderBottom: '50px solid #555',
              borderRight: '25px solid transparent',
              height: '0',
              width: '125px'
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
          <div>
            <div>
              <p>Top NFTs at lower price</p>
              <div>
                {this.state.HotSales.map(CheapItem => {
                  return (
                    <div key={CheapItem.id}>
                      <div>
                        <div>
                          <img src={ CheapItem.imgUrl } alt={CheapItem.name} />
                        </div>
                        <div>
                          <p>{CheapItem.name}</p>
                          <div>
                            <div></div>
                            <div></div>
                          </div>
                          <div>
                            <p>{CheapItem.peopleBidding} people are bidding</p>
                            <FiHeart />
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <button>Show me more</button>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
export default HotNFTSales;