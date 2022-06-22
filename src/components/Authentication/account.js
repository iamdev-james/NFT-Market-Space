// Importing the Auth component Modal
import SIGN_UP from '../../components/Authentication/Sign-up';

// User Profile
import { UserProfile } from './profile';

// Importing Popup library for signin and signup auth
import Popup from 'reactjs-popup';

// User Obj
const userObj = JSON.parse(window.sessionStorage.getItem('AuthInfo'));


export const Account = () => {
  return (
    userObj?
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
        <SIGN_UP />
      </Popup>
    </main>
  )
}