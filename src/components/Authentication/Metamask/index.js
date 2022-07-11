import React, { useEffect, useState } from "react";

// React toastify for messages
import { SuccessToastify, NormalToastify } from "../../../Loaders/Toastify";

// Metamask Image
import metamask from '../../../assets/images/metamask.svg'

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
  SuccessToastify('Login Successful')
  NormalToastify('Redirecting...')
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
      {window.sessionStorage.setItem('Payload', JSON.stringify(userAddress))}
     <Reconnect setUserAddress={setUserAddress}/>
    </div>
  ) : (
     <Connect setUserAddress={setUserAddress}/>
  );
}


function Connect({ setUserAddress }) {
  if (isMobileDevice()) {
    const dappUrl = "my-nft-market-demo.netlify.app";
    const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl;
    return (
      <a href={metamaskAppDeepLink}>
         <button className='px-7 py-3 rounded-xl bg-red-500 flex flex-row justify-center items-center text-black text-sm md:text-lg font-bold md:font-medium hover:bg-gray-300'>
         <img className="w-8 h-8 mr-4" src={metamask} alt="metamask" />
            Sign in with MetaMask
        </button>
      </a>
    );
  }

  
  return (
    <button
    onClick={() => connect(setUserAddress)}
    className='px-7 py-3 rounded-xl bg-red-500 flex flex-row justify-center items-center text-black text-sm md:text-lg font-bold md:font-medium hover:bg-gray-300'>
      <img className="w-8 h-8 mr-4" src={metamask} alt="metamask" />
        Sign in with MetaMask
    </button>
  );
}

function Reconnect ({ setUserAddress }) {
  return (
    <button
    onClick={() => connect(setUserAddress)}
    className='px-7 py-3 rounded-xl bg-red-500 flex flex-row justify-center items-center text-black text-sm md:text-lg font-bold md:font-medium hover:bg-gray-300'>
      <img className="w-8 h-8 mr-4" src={metamask} alt="metamask" />
        Reconnect MetaMask
    </button>
  )
}
