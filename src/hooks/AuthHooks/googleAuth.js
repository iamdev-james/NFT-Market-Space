import { useGoogleLogin } from '@react-oauth/google';

// Firebase Validations
import { LoginValidation } from '../../utils/firebase.utils';

// React toastify for messages
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';

import { FaGoogle } from 'react-icons/fa'

export const GOOGLE_AUTH = () => {
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
     .then(res => {
      storeUserData(res.data)
     })
     .catch(error => {
      console.log(error);
      toast.error('Login Failed, try again', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
     })
   }
  
  // Store user data upon confirmation
   const storeUserData = (payload) => {
      LoginValidation(payload)
  }
  return (
    <main>
      <ToastContainer />
        <button className='px-10 py-3 rounded-xl bg-secondary flex flex-row justify-center items-center text-black text-sm md:text-lg font-bold md:font-medium hover:bg-gray-300' onClick={() => login()}>
          <FaGoogle className='mr-4 text-2xl font-bold text-red-500' />
          Sign in with Google
        </button>
    </main>
  )
}
