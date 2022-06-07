import Logo from '../../assets/images/logo.svg'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

function Footer () {
  return (
    <main className='dark:bg-darkMode max-w-header h-footer py-12 px-20 pt-20'>
      <div className='h-full flex flex-row justify-between items-center border-2 border-solid border-secondary rounded-2xl dark:border-gray-800'>
    {/* Section 1 */}
        <div className='flex-1 py-10 h-full flex flex-col justify-between items-start pl-10'>
          <div className='flex flex-row justify-start items-center'>
            <img src={Logo} alt="Logo" />
            <p className='text-2xl font-bold ml-2 cursor-pointer dark:text-white'>NFT Market</p>
          </div>
          <div className='w-full pr-8 text-primary flex flex-row justify-between items-center'>
            <p className='cursor-pointer'>Support</p>
            <p className='cursor-pointer'>Terms of service</p>
            <p className='cursor-pointer'>License</p>
          </div>
        </div>
    {/* Section 2 */}
        <div className='w-full flex-1 py-10 h-full flex flex-col justify-between items-start pl-10 border-x-2 border-solid border-secondary dark:border-gray-800'>
          <div className='w-full'>
            <div style={{
              lineHeight: '1.9'
            }} className='text-lg font-bold mb-6 dark:text-white'>
              <p className='cursor-pointer'>Auctions</p>
              <p className='cursor-pointer'>Roadmap</p>
              <p className='cursor-pointer'>Discover</p>
              <p className='cursor-pointer'>Community</p>
            </div>
            <div>
              <button className='py-78 px-81 bg-primary rounded-header-btn text-lg text-white font-medium'>My account</button>
            </div>
          </div>
          <div className="w-2/3 text-xl flex flex-row justify-between items-center text-gray-400">
            <FaFacebookSquare className='cursor-pointer' />
            <FaLinkedinIn className='cursor-pointer' />
            <FaGithub className='cursor-pointer' />
            <FaTwitterSquare className='cursor-pointer' />
            <FaInstagram className='cursor-pointer' />
          </div>
        </div>
    {/* Section 3 */}
        <div className='flex-1 py-10 h-full flex flex-col justify-between items-center px-12'>
          <p className='text-core text-primary'>Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis. </p>
          <div style={{
            width: '443px',
            height: '64px',
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 25px 75px rgba(6, 7, 20, 0.1)',
            borderRadius: '16px'
          }} className='flex flex-row justify-between items-center px-12'>
            <input type="text" placeholder='Newsletter' className='h-full w-2/3 outline-none text-primary text-lg' />
            <button className='text-lg text-blue-800 font-bold'>Sign in</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Footer