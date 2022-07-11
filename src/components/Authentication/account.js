// Importing the Auth component Modal
import SIGN_IN from './SignIn';

// User Profile
import { UserProfile } from './profile';

// Importing Popup library for signin and signup auth
import Popup from 'reactjs-popup';

// User Obj
const Payload = JSON.parse(window.sessionStorage.getItem('Payload'));


export const Account = () => {
  return (
    Payload?
    <main>
      <Popup trigger={ 
        <button className='py-80 px-83 bg-primary rounded-header-btn text-lg text-white ml-2 font-medium'>My Account</button>
      } 
      position='bottom right'
      closeOnDocumentClick>
        <UserProfile />
      </Popup>
    </main>
    :
    <main>
      <Popup trigger={ 
        <button className='py-80 px-83 bg-primary rounded-header-btn text-lg text-white ml-2 font-medium'>My Account</button>
      } modal>
        <SIGN_IN />
      </Popup>
    </main>
  )
}