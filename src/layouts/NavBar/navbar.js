import { useState } from 'react';
import './navbar.css';

// Jquery
function NavBar () {
    const [menuActive, setActive] = useState(false);

    const toggleClass = () => {
      setActive(!menuActive);
    };
    return (
     <div className='burger-main'>
       {/* MENU OVERLAY */}
       <div className={menuActive? 'overlay-slide-right z-150 overlay': 'overlay-slide-left z-150 overlay'} id="overlay">
         {/* <!-- MENU ITEMS --> */}
          <h1 className='text-white'>Hello World</h1>
       </div>
       {/* HAMBURGER MENU */}
       <div onClick={toggleClass} className={menuActive? 'active z-150 hamburger-menu': 'z-150 hamburger-menu'} id="hamburger-menu">
         <div className="menu-bar1 bg-black dark:bg-secondary"></div>
         <div className="menu-bar2 bg-black dark:bg-secondary"></div>
         <div className="menu-bar3 bg-black dark:bg-secondary"></div>
       </div>
     </div>
   )
  }

export default NavBar;