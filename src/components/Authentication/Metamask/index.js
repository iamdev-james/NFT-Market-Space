import React, { useEffect, useState } from "react";
import { FaHeading } from 'react-icons/fa';

// React toastify for messages
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function isMobileDevice() {
  return 'ontouchstart' in window || 'onmsgesturechange' in window;
}

async function connect(onConnected) {
  if (!window.ethereum) {
    alert("Get MetaMask!");
    return;
  }

  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  // Successful login
  toast.success('Login Successful', {
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

  onConnected(accounts[0]);
}

async function checkIfWalletIsConnected(onConnected) {
  if (window.ethereum) {
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    if (accounts.length > 0) {
      const account = accounts[0];
      onConnected(account);
      return;
    }

    if (isMobileDevice()) {
      await connect(onConnected);
    }
  }
}


export default function MetaMaskAuth({ onAddressChanged }) {
  const [userAddress, setUserAddress] = useState("");

  useEffect(() => {
    checkIfWalletIsConnected(setUserAddress);
  }, []);

  return userAddress ? (
    <div>
      <ToastContainer />
      {window.sessionStorage.setItem('AuthInfo', JSON.stringify(userAddress))}
     <Reconnect setUserAddress={setUserAddress}/>
    </div>
  ) : (
     <Connect setUserAddress={setUserAddress}/>
  );
}


function Connect({ setUserAddress }) {
  if (isMobileDevice()) {
    const dappUrl = "metamask-auth.ilamanov.repl.co"; // TODO enter your dapp URL. For example: https://uniswap.exchange. (don't enter the "https://")
    const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl;
    return (
      <a href={metamaskAppDeepLink}>
         <button className='px-7 py-3 rounded-xl bg-secondary flex flex-row justify-center items-center text-black text-sm md:text-lg font-bold md:font-medium hover:bg-gray-300'>
          <FaHeading className='mr-4 text-2xl font-bold text-red-500' />
            Sign in with MetaMask
        </button>
      </a>
    );
  }

  
  return (
    <button
    onClick={() => connect(setUserAddress)}
    className='px-7 py-3 rounded-xl bg-secondary flex flex-row justify-center items-center text-black text-sm md:text-lg font-bold md:font-medium hover:bg-gray-300'>
      <FaHeading className='mr-4 text-2xl font-bold text-red-500' />
        Sign in with MetaMask
    </button>
  );
}

function Reconnect ({ setUserAddress }) {
  return (
    <button
    onClick={() => connect(setUserAddress)}
    className='px-7 py-3 rounded-xl bg-secondary flex flex-row justify-center items-center text-black text-sm md:text-lg font-bold md:font-medium hover:bg-gray-300'>
      <FaHeading className='mr-4 text-2xl font-bold text-red-500' />
        Reconnect MetaMask
    </button>
  )
}
