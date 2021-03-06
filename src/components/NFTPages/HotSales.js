import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

function HotNFTSales (){

// Hard coded datas
   const [HotSales] = useState([
       {
         id: 'item1',
         name: 'Manaricuta',
         biddingPrice: '1.20',
         expirationTime: 1654186177,
         imgUrl: Image1,
         peopleBidding: '30'
       },
       {
         id: 'item2',
         name: 'Enpilocos',
         biddingPrice: '1.15',
         expirationTime: 1656605973,
         imgUrl: Image2,
         peopleBidding: '500'
       },
       {
         id: 'item3',
         name: 'Intestitial',
         biddingPrice: '2.03',
         expirationTime: 1656606065,
         imgUrl: Image3,
         peopleBidding: '2'
       },
       {
         id: 'item4',
         name: 'Rashmord',
         biddingPrice: '3.36',
         expirationTime: 1656604420,
         imgUrl: Image4,
         peopleBidding: '167'
       }
     ])
   
     const [HottestSales] = useState([
       {
         id: 'item1',
         name: 'Epilosco',
         biddingPrice: '1.20',
         expirationTime: 1654186177,
         imgUrl: Image1_1,
         peopleBidding: '30'
       },
       {
         id: 'item2',
         name: 'Indignable',
         biddingPrice: '1.15',
         expirationTime: 1656605973,
         imgUrl: Image1_2,
         peopleBidding: '500'
       }
     ])
// Framer Parameters
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);

    // Animation parameters
    const boxVariant = {
      visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
      hidden: { opacity: 0, scale: 0 }
    }
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
      <main
      className="dark:bg-darkMode max-w-body px-6 md:px-20 lg:px-10 xl:px-20 pt-24">
        <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* Section 1 */}
          <div
          className="flex-1 border-2 border-solid border-gray-200 pl-8 py-7 rounded-xl dark:border-gray-700">
            <div className=" h-full flex flex-col justify-between items-start">
              <p className="text-2xl md:text-3xl font-bold mb-8 mr-20 dark:text-white">Checkout the hottest Sale offers</p>
              <div className="w-full h-1/2 flex flex-row justify-between items-center">
                {HottestSales.map(Hottest => {
                  return (
                    <div key={Hottest.id}>
                      <div className="mr-4">
                        <img src={Hottest.imgUrl} alt={Hottest.id} className="rounded-lg" />
                        <p className="text-lg font-medium my-1 dark:text-white">{Hottest.name}</p>
                        <div className="w-full flex flex-row justify-between items-center">
                          <div className="flex flex-row items-center font-medium dark:text-primary">
                            <BsClockHistory className="mr-2" />
                            <Time className="mr-2" value={ new Date(Hottest.expirationTime) } format="mm:ss" />
                          </div>
                          <div className="text-core px-2 bg-gray-200 rounded-lg text-blue-600 font-medium dark:bg-gray-900">
                            {Hottest.biddingPrice} Eth
                          </div>
                        </div>
                        <div className="m-1 bg-[#E2E2ED] dark:bg-gray-800" style={{
                          height: '1px',
                          width: '100%'
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
              <Link className="w-11/12 mt-6 text-lg font-medium py-3 rounded-lg text-center border-2 border-solid border-gray-300 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-900 dark:border-gray-700" to='/auctions'><button>Show me more</button></Link>
            </div>
          </div>
        {/* Section 2 */}
          <motion.div 
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
          className="mx-0 lg:mx-6 flex-1 my-8 lg:my-0 lg:-mt-5">
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
              <Link className="w-11/12 mx-4 mt-6 text-xl font-bold py-3 my-10 mx-8 rounded-lg text-center bg-primary hover:bg-blue-900" to='/community'><button>Get Started</button></Link>
            </div>
          </motion.div>
        {/* Section 3 */}
            <div     
            className="w-auto md:w-11/12 lg:w-auto flex-1 border-2 border-solid border-gray-200 px-7 py-10 rounded-xl dark:border-gray-700">
              <p className="text-2xl md:text-3xl font-bold mb-10 dark:text-white">Top NFTs at lower price</p>
              <div className="h-full">
                {HotSales.map(CheapItem => {
                  return (
                    <div key={CheapItem.id}>
                      <div className="w-full h-full flex flex-row justify-start items-start my-3">
                        <div>
                          <img src={ CheapItem.imgUrl } alt={CheapItem.name} className="rounded-lg" />
                        </div>
                        <div className="h-full w-full flex flex-col justify-between items-start ml-4">
                          <p className="text-lg font-medium dark:text-white">{CheapItem.name}</p>
                          <div className="mt-1 font-medium w-full flex flex-row justify-between items-center">
                            <div className="flex flex-row justify-between items-center dark:text-primary">
                              <BsClockHistory className="mr-3" />
                              <Time className="mr-2" value={ new Date(CheapItem.expirationTime) } format="mm:ss" />
                            </div>
                            <div className="text-core px-2 bg-gray-200 rounded-lg text-blue-600 font-medium dark:bg-gray-900">
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
              <Link to='/auctions'><button className="w-11/12 ml-2 mt-6 text-lg font-medium py-3 rounded-lg text-center border-2 border-solid border-gray-300 hover:bg-gray-200 dark:text-white dark:border-gray-700 dark:hover:bg-gray-900">Show me more</button></Link>
            </div>
        </div>
      </main>
    )
  }
export default HotNFTSales;
