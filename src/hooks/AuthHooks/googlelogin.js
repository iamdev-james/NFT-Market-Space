import React from "react";

// Importing google login library 
import { useGoogleLogin } from "react-google-login";

// Importing refresh token 
import { refreshTokenSetup } from '../../utils/googletokenrefresh';

const clientId = process.env.GOOGLE_CLIENT_ID;

function GoogleLoginHooks () {
  const onSuccess = (res) => {
    console.log('Login Successfully: current user: ' + res.profileObj);
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Hey bro, this beans get stone: ' + res.error)
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline'
  });

  // returning the button that triggers all the events
  return (
    <button onClick={ signIn } className='my-6 py-80 px-81 bg-primary rounded-header-btn text-lg text-white font-medium'>Login with Google</button>
  )
}

export default GoogleLoginHooks;