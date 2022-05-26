import Showcase2 from '../../assets/images/ShowcaseImage.svg'
import Icon2 from '../../assets/images/Icon2.svg'
import Icon1 from '../../assets/images/Icon1.svg'

function SideShowcase2 () {
  return (
    <main className='max-w-body overflow-x-hidden flex flex-row justify-end items-center mt-20 px-20'>
      <div className='flex-1 order-2 h-full flex flex-col justify-around items-start pl-48'>
        <div className='mb-8'>
          <p className="text-primary text-lg">OVERLINE</p>
          <p style={{
            lineHeight: '100%',
            letterSpacing: '0.2px'
          }} className='text-9xl font-bold'>Habitant tristique aliquam in vel scelerisque</p>
        </div>
        <p className='text-primary mb-8 text-lg pr-12'>Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
        <div className='flex flex-row justify-start items-center'>
          <div className="flex flex-col justify-start items-start">
            <img src={Icon1} alt='Icon1' />
            <div className='mt-6'>
              <p className='text-lg font-bold'>Sollicitudin sapien</p>
              <p className='text-primary'>Cursus fermentum</p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start ml-8">
          <img src={Icon2} alt='Icon1' />
            <div className='mt-6'>
              <p className='text-lg font-bold'>Pulvinar metus</p>
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
        <img src={Showcase2} alt="ShowcaseImage" />
      </div>
    </main>
  )
}

export default SideShowcase2