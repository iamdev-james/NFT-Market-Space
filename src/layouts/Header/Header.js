import Logo from '../../assets/images/logo.svg'

import Toggler from '../../components/ToggleTheme'

import { Link } from 'react-router-dom'

// Account button for authenticatio
import { Account } from '../../components/Authentication/account';
import { Contact } from '../../components/SideShowcase/contact';

// Search icon for mobile search
import { FaSearch } from 'react-icons/fa'

// Nav Bar
import NavBar from '../NavBar/navbar';

// Icons from icon library
import { FaFacebookSquare } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'


function Header () {

  // For mobile search bar
  const searchBar = {
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 25px 75px rgba(6, 7, 20, 0.1)',
    borderRadius: '16px'  
  }

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
          <Contact />
          <Account />
        </div>


      {/* Mobile Nav Bar */}
        <div className="inline lg:hidden flex flex-row items-center">
        <Toggler />
        <NavBar>
          <div>
            <nav className='w-full h-full text-lg font-medium text-primary flex flex-col justify-between items-center'>
              <Link to='/auctions'><nav-item className='cursor-pointer'>Auctions</nav-item></Link>
              <Link to='/roadmap'><nav-item className='cursor-pointer mt-16'>Roadmap</nav-item></Link>
              <Link to='/discover'><nav-item className='cursor-pointer mt-16'>Discover</nav-item></Link>
              <Link to='/community'><nav-item className='cursor-pointer mt-16'>Community</nav-item></Link>
            </nav>
            <div className='flex flex-col justify-between items-center'>
              <Contact />
              <Account />
            </div>
            <div className="w-2/3 m-auto mt-8 text-xl flex flex-row justify-between items-center text-gray-400">
              <FaFacebookSquare className='cursor-pointer' />
              <FaLinkedinIn className='cursor-pointer' />
              <FaGithub className='cursor-pointer' />
              <FaTwitterSquare className='cursor-pointer' />
              <FaInstagram className='cursor-pointer' />
            </div>
            <div style={searchBar} className="m-auto mt-20 w-msearchBar md:w-psearchBar lg:w-searchBar lg:h-searchBar h-msearchBar text-sm lg:text-lg flex flex-row justify-around items-center lg:z-1 z-90">
              <input type="search" placeholder="Items, collections and creators" style={{
                outline: 'none',
              }} className="w-2/3 md:w-1/2 h-full" />
              <select style={{
                borderLeft: '2px solid #7780A1',
                outline: 'none'
              }} className="hidden md:inline text-primary h-1/3 pl-6"> 
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
        </NavBar>
        </div>
      </div>
    </header>
  )
}

export default Header;
