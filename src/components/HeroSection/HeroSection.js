import { Component } from "react";
import { FaSearch } from 'react-icons/fa'

// Images to be Used
import HeroFrame1 from '../../assets/images/heroframe1.svg'
import HeroFrame2 from '../../assets/images/heroframe2.svg'

// Company Logos
import Ritter from '../../assets/images/herologos/RitterSport.svg'
import Adidas from '../../assets/images/herologos/Adidas.svg'
import Nike from '../../assets/images/herologos/Nike.svg'
import Holland from '../../assets/images/herologos/NewHolland.svg'

// Showcase Hero 
import HeroSquares from '../../assets/images/herosquares.svg'
import LittleCircles from '../../assets/images/HeroLittleCircles.svg'
import Circles from '../../assets/images/herocircles.svg'

class HeroSection extends Component {
  render () {
    const searchBar = {
      width: '643px',
      height: '84px',
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 25px 75px rgba(6, 7, 20, 0.1)',
      borderRadius: '16px'  
    }
    return (
      <main className="max-w-body overflow-x-hidden">
        <img src={HeroSquares} style={{
          zIndex: '-10'
        }} alt="squares" className="absolute top-48" />
        <img src={LittleCircles} style={{
          zIndex: '-50'
        }} alt="squares" className="absolute" />
        <img src={Circles} style={{
          zIndex: '-100'
        }} alt="squares" className="absolute" />
        <div className="2xl:max-h-primary h-screen flex flex-col justify-around items-center">
          <div className="h-3/5 flex flex-col justify-between items-center">
            <div className="flex flex-col justify-between items-center">
              <div>
                <p className="text-lg text-primary">NON FUNGIBLE TOKEN</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row justify-end items-center">
                  <p className="text-10xl font-bold">A new NFT</p>
                  <img src={HeroFrame1} alt='Frame1' />
                </div>
                <div className="flex flex-row justify-start items-center -mt-10 ml-16">
                  <img src={HeroFrame2} alt="Frame2" />
                  <p className="text-10xl font-bold">Experience</p>
                </div>
              </div>
              <div>
                <p className="text-primary text-lg">Discover, collect and sell</p>
              </div>
            </div>
            <div style={searchBar} className="text-lg w-64 flex flex-row justify-around items-center">
              <input type="search" placeholder="Items, collections and creators" style={{
                outline: 'none',
              }} className="w-1/2 h-full" />
              <select style={{
                borderLeft: '2px solid #7780A1',
                outline: 'none'
              }} className="text-primary h-1/3 pl-6"> 
                <option>Category</option>
                <option>NFT</option>
                <option>Nature</option>
                <option>World</option>
                <option>Tech</option>
                <option>Innovation</option>
              </select>
              <FaSearch className="text-blue-800 text-2xl cursor-pointer" />
            </div>
          </div>
          <div className="w-2/5 flex flex-row justify-between items-center">
            <img src={Ritter} alt="Ritter" />
            <img src={Adidas} alt="Adidas" />
            <img src={Nike} alt="Nike" />
            <img src={Holland} alt="NewHolland" />
          </div>
        </div>
      </main>
    )
  }
}

export default HeroSection;