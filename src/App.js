import './App.css';
import { Component } from 'react';

// Pages to be used
// Home Page
import HomePage from './pages/homepage/homepage'
// Header
import Header from './layouts/Header/Header'

class App extends Component {
  constructor () {
    super();
    this.state = {}
  }

  render () {
    return (
      <main className="overflow-x-hidden">
        <Header />
        <HomePage />
      </main>
    )
  }
}
export default App;
