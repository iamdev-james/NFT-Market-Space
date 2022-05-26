import Showcase2 from '../../assets/images/ShowcaseImage.svg'

function SideShowcase2 () {
  return (
    <main className='max-w-body overflow-x-hidden flex flex-row justify-start items-center px-20'>
      <div className='flex-1 order-2 h-full flex flex-col justify-around items-start'>
        <div className='mb-8'>
          <p className="text-primary text-lg">OVERLINE</p>
          <p style={{
            lineHeight: '100%',
            letterSpacing: '0.2px'
          }} className='text-9xl font-bold'>Sapien ipsum scelerisque convallis fusce</p>
        </div>
        <p className='text-primary mb-8 text-lg pr-12'>Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
        <div className='flex flex-row justify-start items-center'>
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