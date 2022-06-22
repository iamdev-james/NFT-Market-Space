import { useGoogleLogin } from '@react-oauth/google';

import { FaGoogle, FaHeading } from 'react-icons/fa';

import axios from 'axios';


const SIGN_UP = () => {
  const login = useGoogleLogin({
   onSuccess: tokenResponse => getDetails(tokenResponse.access_token),
   onError: err => console.log(err),
  });

// Get users details on successful token generation
  const getDetails = async(access_token) => {
    await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: {
        'Authorization' : `Bearer ${access_token}`
      }
    })
    .then(res => storeUserData(res.data))
    .catch(error => console.log(error))
  }

// Store user data upon confirmation
  const storeUserData = (userInfo) => {
    const authInfo = {
      userIsLoggedIn: true,
      userInfo
    };
    window.localStorage.setItem('authStatus', authInfo)
  }
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