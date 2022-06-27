import { FaHeading } from 'react-icons/fa';

import { GOOGLE_AUTH } from '../../hooks/AuthHooks/googleAuth';


const SIGN_UP = () => {
  return (
    <main>
      <div className='mx-4 sm:mx-0 px-6 md:px-16 pt-20 pb-12 rounded-xl bg-primary text-center text-white'>
        <div>
          <p className='text-4xl font-bold pb-5'>Sign In</p>
          <p className='text-sm font-medium pb-12'>Welcome back, please select a suitable login option below</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div>
            <GOOGLE_AUTH />
          </div>
          <div className='mt-6'>
            <button className='px-7 py-3 rounded-xl bg-secondary flex flex-row justify-center items-center text-black text-sm md:text-lg font-bold md:font-medium hover:bg-gray-300'>
              <FaHeading className='mr-4 text-2xl font-bold text-red-500' />
                Sign in with MetaMask
            </button>
          </div>
        </div>
      <div className='pt-12'>
        <p className='font-medium'>Are you new here? 
          <a className='ml-2 text-black' href='#ededoo'>Create an account</a>
        </p>
      </div>
      </div>
    </main>
  )
}

export default SIGN_UP;