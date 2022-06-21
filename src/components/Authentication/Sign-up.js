import { useGoogleLogin } from '@react-oauth/google';

import { FaGoogle, FaHeading } from 'react-icons/fa'


const SIGN_UP = () => {
  const login = useGoogleLogin({
   onSuccess: tokenResponse => console.log(tokenResponse),
   onError: err => console.log(err),
  });
  return (
    <main>
      <div className='px-16 pt-20 pb-12 rounded-xl bg-primary text-center text-white'>
        <div>
          <p className='text-4xl font-bold pb-5'>Sign In</p>
          <p className='text-sm font-medium pb-12'>Welcome back, please select a suitable login option below</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div>
            <button className='px-10 py-3 rounded-xl bg-secondary flex flex-row justify-center items-center text-black text-lg font-medium hover:bg-gray-300' onClick={() => login()}>
              <FaGoogle className='mr-4 text-2xl font-bold text-red-500' />
              Sign in with Google
            </button>
          </div>
          <div className='mt-6'>
            <button className='px-7 py-3 rounded-xl bg-secondary flex flex-row justify-center items-center text-black text-lg font-medium hover:bg-gray-300' onClick={() => login()}>
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