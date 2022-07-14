import firebase from 'firebase/compat/app'

import 'firebase/compat/firestore'

// toast
import { SuccessToastify, ErrorToastify, NormalToastify } from '../Loaders/Toastify'

const config = {
  apiKey: "AIzaSyBeDRp9oua2NuKRwV3pUPwPQv_aL81HcKc",
  authDomain: "nft-market-353510.firebaseapp.com",
  projectId: "nft-market-353510",
  storageBucket: "nft-market-353510.appspot.com",
  messagingSenderId: "1051892736821",
  appId: "1:1051892736821:web:3bdabaf072b4f2fd9c627c"
}

firebase.initializeApp(config)
// Exporting firestore

export const firestore = firebase.firestore()

export const LoginValidation = async(userAuth) => {

  const userRef = firestore.doc(`users/${userAuth.sub}`)

  NormalToastify('Loading... Please wait', 4000)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    ErrorToastify('User does not exist', 7000)
  } else {
    const payload = {
      userIsLoggedIn: true,
      userAuth
    };
    window.sessionStorage.setItem('Payload', JSON.stringify(payload));

    SuccessToastify('Authenticated')
    NormalToastify('Redirecting...')
    // Redirecting users after successful validation
    setTimeout(window.location.reload(), 5000);
  }
}

export const SignUpValidation = async (userAuth) => {
  
  const userRef = firestore.doc(`users/${userAuth.sub}`)

  NormalToastify('Loading... Please wait', 4000)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { email, given_name } = userAuth
    const Created_At = new Date()

    try {
      await userRef.set({
        email,
        given_name,
        Created_At
      })
      const payload = {
        userIsLoggedIn: true,
        userAuth
      };
      window.sessionStorage.setItem('Payload', JSON.stringify(payload));
  
      SuccessToastify('Authenticated')
      NormalToastify('Redirecting...')
      // Redirecting users after successful validation
      setTimeout(window.location.reload(), 5000);
    } catch (error) {
      console.log(error)
      ErrorToastify('An error Occured')
    }
  } else {
    NormalToastify('User already exist')
  }
}


export default firebase;