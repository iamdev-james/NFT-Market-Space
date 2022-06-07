// Icons to be used
import { FaPalette } from 'react-icons/fa'
import { FaArtstation } from 'react-icons/fa'

function SideShowcase2 () {
  return (
    <main className='dark:bg-darkMode max-w-body overflow-x-hidden flex flex-row justify-end items-center pt-24 px-20 pb-12'>
      <div className='flex-1 order-2 h-full flex flex-col justify-around items-start pl-32'>
        <div className='mb-8'>
          <p className="text-primary text-lg">OVERLINE</p>
          <p style={{
            lineHeight: '100%',
            letterSpacing: '0.2px'
          }} className='text-9xl font-bold dark:text-white'>Habitant tristique aliquam in vel scelerisque</p>
        </div>
        <p className='text-primary mb-8 text-lg pr-12'>Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
        <div className='flex flex-row justify-start items-center'>
          <div className="flex flex-col justify-start items-start">
          <FaArtstation className='dark:text-white text-3xl' />
            <div className='mt-6'>
              <p className='text-lg font-bold dark:text-white'>Sollicitudin sapien</p>
              <p className='text-primary'>Cursus fermentum</p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start ml-8">
          <FaPalette className='dark:text-white text-3xl' />
            <div className='mt-6'>
              <p className='text-lg font-bold dark:text-white'>Pulvinar metus</p>
              <p className='text-primary'>Nunc sed</p>
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-start items-center mt-10'>
          <button className='text-lg text-white font-medium rounded-header-btn mr-8 py-80 px-81 bg-primary'>Get Started</button>
          <button className='text-lg font-medium text-primary rounded-header-btn py-80 px-81 border-2 border-priamry'>Learn more</button>
        </div>
      </div>
      <div className='flex-1 order-1'>
        <img src="https://i.im.ge/2022/06/02/r88xjW.png" alt="ShowcaseImage" />
      </div>
    </main>
  )
}

export default SideShowcase2