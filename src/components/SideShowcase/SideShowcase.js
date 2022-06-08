
function SideShowcase () {
  return (
    <main className='dark:bg-darkMode max-w-body overflow-x-hidden flex flex-col lg:flex-row justify-start items-center pt-24 px-6 md:px-20'>
      <div className='flex-1 order-1 h-full flex flex-col justify-around items-start pr-0 md:pr-32 lg:pr-48'>
        <div className='mb-8'>
          <p className="text-primary text-lg">OVERLINE</p>
          <p style={{
            lineHeight: '100%',
            letterSpacing: '0.2px'
          }} className='text-4xl md:text-9xl font-bold dark:text-white'>Sapien ipsum scelerisque convallis fusce</p>
        </div>
        <p className='text-primary mb-8 text-sm md:text-lg pr-12'>Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
        <div className='flex flex-row justify-start items-center'>
          <button className='text-sm md:text-lg text-white font-medium rounded-header-btn mr-8 py-80 px-81 bg-primary'>Get Started</button>
          <button className='text-sm md:text-lg font-medium text-primary rounded-header-btn py-80 px-81 border-2 border-priamry'>Learn more</button>
        </div>
      </div>
      <div className='flex-1 order-2'>
        <img src="https://i.im.ge/2022/06/02/r88EOr.png" alt="ShowcaseImage" />
      </div>
    </main>
  )
}

export default SideShowcase