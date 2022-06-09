import Logo from '../../assets/images/logo.svg'

import Toggler from '../../components/ToggleTheme'

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
      <div className='h-header w-full px-5 md:px-12 lg:px-20 flex flex-row justify-between items-center'>
        <div className='w-1/8 flex flex-row justify-between items-center'>
          <img src={Logo} alt="Logo" />
          <p className='dark:text-white text-2xl font-bold ml-2'>NFT Market</p>
        </div>
        <div className='w-1/3 hidden lg:inline'>
          <nav className='w-full text-lg font-medium text-primary flex flex-row justify-between items-center'>
            <nav-item className='cursor-pointer'>Auctions</nav-item>
            <nav-item className='cursor-pointer'>Roadmap</nav-item>
            <nav-item className='cursor-pointer'>Discover</nav-item>
            <nav-item className='cursor-pointer'>Community</nav-item>
          </nav>
        </div>
        <div className='lg:flex flex-row justify-between items-center hidden'>
          <Toggler />
          <button className='py-78 px-82 rounded-header-btn text-lg border-2 border-solid border-primary text-primary font-medium'>Contact</button>
          <button className='py-80 px-81 bg-primary rounded-header-btn text-lg text-white ml-6 font-medium'>My Account</button>
        </div>
        <div className="inline lg:hidden flex flex-row items-center">
        <Toggler />
        <NavBar>
          <div>
            <div className='flex flex-col justify-between items-center'>
              <button className='py-78 px-84 rounded-header-btn text-lg border-2 border-solid border-primary text-primary font-medium mb-6 mt-12'>Contact</button>
              <button className='py-80 px-83 bg-primary rounded-header-btn text-lg text-white font-medium'>My Account</button>
            </div>
            <div className="w-2/3 m-auto mt-16 text-xl flex flex-row justify-between items-center text-gray-400">
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
