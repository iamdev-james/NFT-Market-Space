import React from 'react';
import { useState, useEffect, Suspense } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import axios from 'axios';

const Item = React.lazy(()=> import('../../components/ItemsSection/SingleItem'))
const Collection = React.lazy(()=> import('../../components/ItemsSection/Collections'))

// Loader 
// import { CircleLoader } from "react-awesome-loaders";

function SingleItem (props) {
  
  // Getting URL params and state to be used to fetch
  const { itemid } = useParams();
  const location = useLocation();

  // React useState to setState and init an empty state
  const [state, setState] = useState([]);

  // React use effect to make API call to get NFT item
  useEffect(() => {
    const fetchItem = async() => {
      await axios(`https://testnets-api.opensea.io/api/v1/asset/${location.state.CONTRACT_ADDRESS}/${itemid}/`)
      .then( res => {
        setState(res.data)
      })
      .catch(err => {
        console.log(`Unable to fetch, an error occured. Here is the err:   ${err}`)
      })
    }
    fetchItem();
  })

  // The props we are passing to the SingleItem child
  let SingleItemProps = {
    state,
    location
  }
// Returning response to end users(we will check if we get a good response here before rendering to the end user)
  // document.onreadystatechange = () => {
  //   if(document.readyState === 'loading' || document.readyState === 'interactive') {
  //     return (
  //       <div>Loading</div>
  //     )
  //   }
        window.scrollTo(0, 0)
      return (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Item { ...SingleItemProps }/>
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Collection className="mt-40 md:mt-16 lg:mt-0" NFTs = {props}/>
          </Suspense>
        </div>
    )
  // }
}

export default SingleItem;