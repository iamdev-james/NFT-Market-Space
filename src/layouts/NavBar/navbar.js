import { useState } from 'react';
import './navbar.css';

// logo
import Logo from '../../assets/images/logo.svg'

// Jquery
const NavBar = props => {
    const [menuActive, setActive] = useState(false);

    const toggleClass = () => {
      setActive(!menuActive);
    };
    return (
     <div className='burger-main'>
       {/* MENU OVERLAY */}
       <div className={menuActive? 'overlay-slide-right z-150 overlay dark:bg-darkMode bg-custom': 'overlay-slide-left z-150 overlay bg-transparent'} id="overlay">
        <div className='px-4 py-6 w-full flex flex-row justify-between items-center'>
          <div className='w-1/8 flex flex-row justify-between items-center'>
            <img src={Logo} alt="Logo" />
            <p className='dark:text-white text-2xl font-bold ml-2'>NFT Market</p>
          </div>
          <div onClick={toggleClass} className='active z-150 hamburger-menu mr-0' id="hamburger-menu">
            <div className="menu-bar1 bg-black dark:bg-secondary"></div>
            <div className="menu-bar2 bg-black dark:bg-secondary"></div>
            <div className="menu-bar3 bg-black dark:bg-secondary"></div>
          </div>
        </div>
         {/* <!-- MENU ITEMS --> */}
         {props.children}
       </div>
       {/* HAMBURGER MENU */}
       <div onClick={toggleClass} className='z-150 hamburger-menu' id="hamburger-menu">
         <div className="menu-bar1 bg-black dark:bg-secondary"></div>
         <div className="menu-bar2 bg-black dark:bg-secondary"></div>
         <div className="menu-bar3 bg-black dark:bg-secondary"></div>
       </div>
     </div>
   )
  }

export default NavBar;