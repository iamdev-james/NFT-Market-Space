// import { FaHeading } from 'react-icons/fa';

import { GOOGLE_AUTH } from '../../hooks/AuthHooks/googleAuth';
import  MetaMaskAuth  from './Metamask/index'

import { SignUp } from './SignUp';


const SIGN_IN = () => {
  return (
    <main className='flex flex-col items-center justify-center'>
      <div className='mx-4 sm:mx-0 px-6 md:px-16 pt-20 pb-12 rounded-xl bg-primary text-center text-white'>
        <div>
          <p className='text-4xl font-bold pb-5'>Sign In</p>
          <p className='text-sm font-medium pb-12'>Welcome back, please select a suitable login option below</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div>
            <GOOGLE_AUTH />
          </div>
        </div>
      <div className='pt-8 flex flex-row items-center justify-center'>
        <p className='font-medium'>Are you new here? 
        </p>
        <SignUp />
      </div>
      <div>
        <div
        className='bg-custom mt-2 mb-6'
        style={{
          width: '100%',
          height: '1px',
          borderRadius: '8px'
        }}>          
        </div>
        <p className='text-black font-medium text-sm'>Alternatively, Sign In with</p>
      </div>
      <div className='flex flex-col justify-center items-center mt-6'>
        <MetaMaskAuth />
      </div>
      </div>
    </main>
  )
}

export default SIGN_IN;