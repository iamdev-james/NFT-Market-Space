import { FaArrowRight } from "react-icons/fa"

// Logout users
import { googleLogout } from "@react-oauth/google";

// React toastify for messages
import { SuccessToastify, NormalToastify } from "../../Loaders/Toastify";

const Payload = JSON.parse(window.sessionStorage.getItem('Payload'))

export const UserProfile = () => {
  let logoutUser = () => {
    googleLogout();
    window.sessionStorage.removeItem('Payload');
    SuccessToastify('Logout Sucessful')
    NormalToastify('Redirecting...')
    setTimeout(window.location.reload(), 5000);
  }
  return Payload.userAuth? (
    <main>
      <div className="bg-white pt-12 pb-5 px-6 rounded-xl text-center leading-loose shadow-2xl">
        <img src={Payload.userAuth.picture } alt={Payload.userAuth.given_name } className="m-auto w-20 h-20 rounded-full" />
        <p className="text-xl font-bold py-3">
          {Payload.userAuth.name }</p>
        <p className="text-sm font-medium">{Payload.userAuth.email }</p>
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
      <div className="bg-white pt-12 pb-5 px-6 rounded-xl text-center leading-loose shadow-2xl">
        <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" alt="userimage" className="m-auto w-20 h-20 rounded-full" />
        <p className="text-xl font-bold py-3">
          { Payload.substring(0, 9)}…{Payload.substring(Payload.length - 9) }</p>
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