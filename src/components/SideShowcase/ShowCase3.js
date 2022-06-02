// Icon Images to be used 
import users from '../../assets/images/showcase3/UserIcon.svg'
import artiste from '../../assets/images/showcase3/ArtistsIcon.svg'
import artworks from '../../assets/images/showcase3/ArtworksIcon.svg'
import wallet from '../../assets/images/showcase3/WalletIcon.svg'

function ShowCase3 () {
  return (
    <main className='max-w-body px-64 mt-20'>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-col justify-between items-center'>
          <img src={ users } alt="users" />
          <p className='text-4xl font-bold'>300k</p>
          <p className='text-primary text-sm mt-1'>Users Active</p>
        </div>
        <div className='flex flex-col justify-between items-center'>
          <img src={ artworks } alt="artworks" />
          <p className='text-4xl font-bold'>52,5k</p>
          <p className='text-primary text-sm mt-1'>Artworks</p>
        </div>
        <div className='flex flex-col justify-between items-center'>
          <img src={ artiste } alt="artiste" />
          <p className='text-4xl font-bold'>17,5k</p>
          <p className='text-primary text-sm mt-1'>Artists</p>
        </div>
        <div className='flex flex-col justify-between items-center'>
          <img src={ wallet } alt="wallet" />
          <p className='text-4xl font-bold'>35.58</p>
          <p className='text-primary text-sm mt-1'>ETH Spent</p>
        </div>
      </div>
    </main>
  )
}

export default ShowCase3;