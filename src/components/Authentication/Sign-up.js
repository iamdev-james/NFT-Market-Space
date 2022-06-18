import { GoogleLogin } from '@react-oauth/google';

const SIGN_UP = () => {
  return (
    <main>
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />;
    </main>
  )
}

export default SIGN_UP;