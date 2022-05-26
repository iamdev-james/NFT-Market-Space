import Logo from '../../assets/images/logo.svg'


function Header () {
  return (
    <header className='2xl:max-w-header w-screen overflow-hidden'>
      <div className='h-header w-full px-20 flex flex-row justify-between items-center'>
        <div className='w-1/8 flex flex-row justify-between items-center'>
          <img src={Logo} alt="Logo" />
          <p className='text-2xl font-bold ml-2'>NFT Market</p>
        </div>
        <div className='w-1/3'>
          <nav className='w-full text-lg font-medium text-primary flex flex-row justify-between items-center'>
            <nav-item>Auctions</nav-item>
            <nav-item>Roadmap</nav-item>
            <nav-item>Discover</nav-item>
            <nav-item>Community</nav-item>
          </nav>
        </div>
        <div className='flex flex-row justify-between items-center'>
          <button className='py-80 px-81 rounded-header-btn text-lg border-2 border-solid border-primary text-primary font-medium'>Contact</button>
          <button className='py-80 px-81 bg-primary rounded-header-btn text-lg text-white ml-6 font-medium border-2 border-solid border-blue-300'>My Account</button>
        </div>
      </div>
    </header>
  )
}

export default Header;