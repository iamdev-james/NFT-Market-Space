// Importing link from react router dom
import { Link } from 'react-router-dom';

import Slider from "react-slick";
// Time formatter to format expiration time
import Time from 'react-time-format';

// Importing react icons
import { BsClockHistory } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'

let settings = {
  dots: false,
  arrows: true,
  className: "center",
  centerMode: true,
  centerPadding: "60px",
  infinite: true,
  slidesToShow: 4.5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 3000,
  cssEase: "ease",
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3.5,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const Collections = props => {
  return (
    <div className="dark:bg-darkMode max-w-body -mt-32 md:mt-0 pt-8 md:pt-10 lg:pt-40">
    <p className="dark:text-white text-center text-3xl font-bold mb-12">Latest live auctions</p>
    <Slider {...settings}>
      {props.NFTs.NFTs.map(Item => {
        return (
          <div key={Item.id}>
            <div className="flex flex-col justify-center items-start mx-4 my-12">
              <img src={Item.asset?.image_url || 'https://lh3.googleusercontent.com/0oIfvpJPgWG9vCb_obS0pDmtrzoCuL3f5_tczGjU4s1J88UfU9F2D_fa22T-Z3-WoCKGgIV48wt3QQ7dXrAhR3P1Pw5x78aEpAopEQ'} alt={Item.asset?.name || 'Image not available'} style={{
                width: '100%',
                height: '350px',
                borderRadius: '20px',
                boxShadow: '0px 0.2px 5px #333'
              }} />
              <div className="w-full my-4 flex flex-row justify-between items-center">
                <p className="text-core font-bold dark:text-white">{ Item.asset?.name || 'Item Listed' }</p>
                <p className="text-core px-3 bg-gray-200 rounded-lg text-blue-600 font-medium dark:bg-gray-900">{ parseFloat(Item.payment_token_contract.eth_price * Math.random()).toFixed(2) } Eth</p>
              </div>
              <div className="flex flex-row justify-start items-center font-medium dark:text-primary">
                <BsClockHistory className="mr-3" /> <Time className="mr-2" value={ new Date(Item.expiration_time) } format="hh:mm:ss" /> left
              </div>
              <div className="mt-8 mb-3 bg-[#E2E2ED] dark:bg-gray-800" style={{
                height: '1px',
                width: '100%'
              }}>
              </div>
              <div className="w-full flex flex-row justify-between items-center">
                <div className="flex flex-row justify-start items-center text-sm sm:text-core px-4 sm:px-5 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-primary dark:hover:text-white">
                  <FiHeart className="mr-4" /><p>{(Item.asset?.collection?.opensea_seller_fee_basis_points - (Math.random() * 100)).toFixed(0) || 'N/A'}</p>
                </div>
              {/* Redirecting to the exact product page */}
                {
                  Item.asset?
                  <Link to={'/item/' + Item.asset.token_id }
                    state = {{
                      CONTRACT_ADDRESS: Item.asset.asset_contract.address,
                      ETH_PRICE: parseFloat(Item.payment_token_contract.eth_price * Math.random()).toFixed(2),
                      EXPIRATION_TIME: Item.expiration_time
                    }} 
                  ><button className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-primary text-white text-sm font-bold hover:bg-blue-500">View Details</button></Link>
                  :
                  <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-primary text-white text-sm font-bold hover:bg-blue-500">View Details</button>
                }
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  </div>
)
}

export default Collections;
