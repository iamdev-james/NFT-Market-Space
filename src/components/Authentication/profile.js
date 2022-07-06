import { FaArrowRight } from "react-icons/fa"

// Logout users
import { googleLogout } from "@react-oauth/google";

// React toastify for messages
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const userObj = JSON.parse(window.sessionStorage.getItem('AuthInfo'))

export const UserProfile = () => {
  let logoutUser = () => {
    googleLogout();
    window.sessionStorage.removeItem('AuthInfo');
    toast.success('Logout Successful', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    toast('Redirecting...', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    setTimeout(window.location.reload(), 5000);
  }
  return userObj.userInfo? (
    <main>
      <ToastContainer />
      <div className="bg-white pt-12 pb-5 px-6 rounded-xl text-center leading-loose shadow-2xl">
        <img src={userObj.userInfo.picture } alt={userObj.userInfo.given_name } className="m-auto w-20 h-20 rounded-full" />
        <p className="text-xl font-bold py-3">
          {userObj.userInfo.name }</p>
        <p className="text-sm font-medium">{userObj.userInfo.email }</p>
        <p className="text-sm font-medium">LoggedIn: true</p>
        <div className="bg-[#E2E2ED] dark:bg-gray-300 my-4" style={{
          height: '1px',
          width: '100%'
        }}>
        </div>
        <button className="m-auto flex flex-row justify-center items-center text-sm font-medium px-6 py-2 border-2 border-solid border-gray-300 rounded-lg transition-all duration-2000 hover:w-40 hover:bg-gray-200" onClick={logoutUser}>Logout <FaArrowRight className="ml-4" /></button>
      </div>
    </main>
  ) :
  (
    <main>
      <ToastContainer />
      <div className="bg-white pt-12 pb-5 px-6 rounded-xl text-center leading-loose shadow-2xl">
        <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" alt="userimage" className="m-auto w-20 h-20 rounded-full" />
        <p className="text-xl font-bold py-3">
          { userObj.substring(0, 9)}…{userObj.substring(userObj.length - 9) }</p>
        <p className="text-sm font-medium">LoggedIn: true</p>
        <div className="bg-[#E2E2ED] dark:bg-gray-300 my-4" style={{
          height: '1px',
          width: '100%'
        }}>
        </div>
        <button className="m-auto flex flex-row justify-center items-center text-sm font-medium px-6 py-2 border-2 border-solid border-gray-300 rounded-lg transition-all duration-2000 hover:w-40 hover:bg-gray-200" onClick={logoutUser}>Logout <FaArrowRight className="ml-4" /></button>
      </div>
    </main>
  )
}