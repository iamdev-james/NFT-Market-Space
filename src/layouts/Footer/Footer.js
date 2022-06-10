import { Link } from 'react-router-dom'

import Logo from '../../assets/images/logo.svg'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

function Footer () {
  return (
    <main className='dark:bg-darkMode max-w-header h-auto lg:h-footer py-12 px-6 md:px-12 lg:px-20 pt-20'>
      <div className='h-full flex flex-col lg:flex-row justify-between items-start lg:items-center border-2 border-solid border-secondary rounded-2xl dark:border-gray-800'>
    {/* Section 1 */}
        <div className='flex-1 w-5/6 md:w-3/5 lg:w-auto py-10 h-full flex flex-col justify-between items-start pl-5 lg:pl-10'>
          <div className='flex flex-row justify-start items-center mb-20 lg:mb-0'>
            <img src={Logo} alt="Logo" />
            <Link to="/"><p className='text-2xl font-bold ml-2 cursor-pointer dark:text-white'>NFT Market</p></Link>
          </div>
          <div className='w-full pr-0 md:pr-8 text-primary flex flex-row justify-between items-center'>
            <p className='cursor-pointer'>Support</p>
            <p className='cursor-pointer'>Terms of service</p>
            <p className='cursor-pointer'>License</p>
          </div>
        </div>
    {/* Section 2 */}
        <div className='w-full flex-1 py-10 h-full flex flex-col justify-between items-start pl-5 lg:pl-10 lg:border-x-2 border-y-2 border-solid border-secondary dark:border-gray-800'>
          <div className='w-full'>
            <div style={{
              lineHeight: '1.9'
            }} className='text-lg font-bold mb-6 dark:text-white'>
              <p className='cursor-pointer'>Auctions</p>
              <p className='cursor-pointer'>Roadmap</p>
              <p className='cursor-pointer'>Discover</p>
              <p className='cursor-pointer'>Community</p>
            </div>
            <div className='mb-6 lg:mb-0'>
              <button className='py-78 px-81 bg-primary rounded-header-btn text-lg text-white font-medium'>My account</button>
            </div>
          </div>
          <div className="w-2/3 md:w-1/2 lg:w-2/3 text-xl flex flex-row justify-between items-center text-gray-400">
            <FaFacebookSquare className='cursor-pointer' />
            <FaLinkedinIn className='cursor-pointer' />
            <FaGithub className='cursor-pointer' />
            <FaTwitterSquare className='cursor-pointer' />
            <FaInstagram className='cursor-pointer' />
          </div>
        </div>
    {/* Section 3 */}
        <div className='flex-1 py-10 h-full flex flex-col justify-between items-center px-3 md:px-12'>
          <p className='text-sm md:text-core text-primary mb-12 lg:mb-0'>Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis. </p>
          <div style={{
            height: '64px',
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 25px 75px rgba(6, 7, 20, 0.1)',
            borderRadius: '16px'
          }} className='flex flex-row justify-between items-center px-12 w-fmsearchBar md:w-psearchBar'>
            <input type="text" placeholder='Newsletter' className='h-full w-2/3 outline-none text-primary text-lg' />
            <button className='text-lg text-blue-800 font-bold'>Sign in</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Footer