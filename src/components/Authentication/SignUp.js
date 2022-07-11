import { useGoogleLogin } from '@react-oauth/google';

// Firebase Validations
import { SignUpValidation } from '../../utils/firebase.utils';

// React toastify for messages
import { ErrorToastify } from '../../Loaders/Toastify';

import axios from 'axios';

export const SignUp = () => {
  const signup = useGoogleLogin({
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
      ErrorToastify('Login Failed, try again', 5000)
     })
   }
  
  // Store user data upon confirmation
   const storeUserData = (payload) => {
      SignUpValidation(payload)
  }
  return (
    <main>
        <p className='ml-2 text-black font-medium text-lg cursor-pointer' onClick={() => signup()}>
          Create an account
        </p>
    </main>
  )
}
