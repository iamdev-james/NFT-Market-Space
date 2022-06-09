import { Component } from "react";
// import axios from "axios";

class SingleItem extends Component {
  constructor () {
    super()
    this.state = {
      ItemObject: []
    }
  }

  // Fetch Item Object
  // componentDidMount () {
  //   axios.get(`https://testnets-api.opensea.io/api/v1/asset/${}/${}/`)
  // }

  render () {
    return (
      <main>
        <p>Hello world</p>
      </main>
    )
  }
}

export default SingleItem;