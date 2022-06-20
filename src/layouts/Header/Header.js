import Logo from '../../assets/images/logo.svg'

import Toggler from '../../components/ToggleTheme'

import { Link } from 'react-router-dom'

// Importing Popup library for signin and signup auth
import Popup from 'reactjs-popup';

// Importing the Auth component Modal
import SIGN_UP from '../../components/Authentication/Sign-up';

// Nav Bar
import NavBar from '../NavBar/navbar';

// Icons from icon library
import { FaFacebookSquare } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'


function Header () {
  return (
    <header className='2xl:max-w-header py-4 w-screen overflow-hidden absolute z-100'>
      <div className='h-header w-full px-5 md:px-12 lg:px-10 xl:px-20 flex flex-row justify-between items-center'>
        <div className='w-1/8 flex flex-row justify-between items-center'>
          <img src={Logo} alt="Logo" />
          <Link to='/'><p className='dark:text-white text-2xl font-bold ml-2'>NFT Market</p></Link>
        </div>
        <div className='w-1/3 hidden lg:inline'>
          <nav className='w-full text-lg font-medium text-primary flex flex-row justify-between items-center'>
            <Link to='/auctions'><nav-item className='cursor-pointer'>Auctions</nav-item></Link>
            <Link to='/roadmap'><nav-item className='cursor-pointer'>Roadmap</nav-item></Link>
            <Link to='/discover'><nav-item className='cursor-pointer'>Discover</nav-item></Link>
            <Link to='/community'><nav-item className='cursor-pointer'>Community</nav-item></Link>
          </nav>
        </div>
        <div className='lg:flex flex-row justify-between items-center hidden'>
          <Toggler />
          <button className='py-78 px-82 rounded-header-btn text-lg border-2 border-solid border-primary text-primary font-medium'>Contact</button>
          <Popup trigger={ 
            <button className='py-80 px-81 bg-primary rounded-header-btn text-lg text-white ml-6 font-medium'>My Account</button>
           } modal>
            <SIGN_UP />
           </Popup>
        </div>


      {/* Mobile Nav Bar */}
        <div className="inline lg:hidden flex flex-row items-center">
        <Toggler />
        <NavBar>
          <div>
            <nav className='w-full h-full text-lg font-medium text-primary flex flex-col justify-between items-center'>
              <Link to='/auctions'><nav-item className='cursor-pointer'>Auctions</nav-item></Link>
              <Link to='/roadmap'><nav-item className='cursor-pointer mt-10'>Roadmap</nav-item></Link>
              <Link to='/discover'><nav-item className='cursor-pointer mt-10'>Discover</nav-item></Link>
              <Link to='/community'><nav-item className='cursor-pointer mt-10'>Community</nav-item></Link>
            </nav>
            <div className='flex flex-col justify-between items-center'>
              <button className='py-78 px-84 rounded-header-btn text-lg border-2 border-solid border-primary text-primary font-medium mb-6 mt-8'>Contact</button>
              <button className='py-80 px-83 bg-primary rounded-header-btn text-lg text-white font-medium'>My Account</button>
            </div>
            <div className="w-2/3 m-auto mt-8 text-xl flex flex-row justify-between items-center text-gray-400">
              <FaFacebookSquare className='cursor-pointer' />
              <FaLinkedinIn className='cursor-pointer' />
              <FaGithub className='cursor-pointer' />
              <FaTwitterSquare className='cursor-pointer' />
              <FaInstagram className='cursor-pointer' />
            </div>
          </div>
        </NavBar>
        </div>
      </div>
    </header>
  )
}

export default Header;
