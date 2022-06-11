import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import axios from 'axios';

import Item from '../../components/ItemsSection/SingleItem'

function SingleItem () {
  
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
  let props = {
    state,
    location
  }
// Returning response to end users(we will check if we get a good response here before rendering to the end user)
  return (
    <Item { ...props }/>
  )
}

export default SingleItem;