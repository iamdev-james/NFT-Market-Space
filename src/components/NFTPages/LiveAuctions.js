import Slider from "react-slick";
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
  cssEase: "ease"
};

const LiveAuction = props => (
	<div className="mt-48">
    <p className="text-center text-3xl font-bold mb-12">Latest live auctions</p>
    <Slider {...settings}>
      {props.NFTs.map(Item => {
        return (
          <div key={Item.id}>
            <div className="flex flex-col justify-center items-start mx-4 my-12">
              <img src={Item.asset.image_url} alt={Item.asset.name} style={{
                width: '548px',
                height: '350px',
                borderRadius: '20px',
                boxShadow: '0px 0.2px 5px #333'
              }} />
              <div className="w-full my-4 flex flex-row justify-between items-center">
                <p className="text-core font-bold">{ Item.asset.name }</p>
                <p className="text-lg px-3 bg-gray-200 rounded-lg text-blue-600 font-medium">{ parseFloat(Item.payment_token_contract.eth_price).toFixed(2) } Eth</p>
              </div>
              <div className="flex flex-row justify-start items-center">
                <BsClockHistory className="mr-3" /> { Item.expiration_time }
              </div>
              <div className="mt-8 mb-3" style={{
                height: '1px',
                width: '100%',
                backgroundColor: '#E2E2ED'
              }}>
              </div>
              <div className="w-full flex flex-row justify-between items-center">
                <div className="flex flex-row justify-start items-center px-5 py-2 rounded-lg bg-gray-100 hover:bg-gray-200">
                  <FiHeart className="mr-4" /><p>{Item.asset.collection.opensea_seller_fee_basis_points}</p>
                </div>
                <button className="px-7 py-3 rounded-lg bg-primary text-white text-lg font-bold hover:bg-blue-500">View Details</button>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  </div>
)

export default LiveAuction;
