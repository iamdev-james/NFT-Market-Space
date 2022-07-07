// Importing the Auth component Modal
import  MetaMaskAuth  from '../Metamask/index'


// Importing Popup library for signin and signup auth
import Popup from 'reactjs-popup';

export const MetaAccount = () => {
  return (
    <main>
      <Popup trigger={ 
        <button className='px-7 py-3 rounded-xl bg-secondary flex flex-row justify-center items-center text-black text-sm md:text-lg font-bold md:font-medium hover:bg-gray-300'>
        <FaHeading className='mr-4 text-2xl font-bold text-red-500' />
          Sign in with MetaMask
      </button>
      } 
      position='bottom right'
      closeOnDocumentClick>
        <MetaMaskAuth />
      </Popup>
    </main>
  )
}