import { Component } from 'react';
import './navbar.scss';

// Jquery
import $ from 'jquery'

class navBar extends Component {
  // Toogle nav class and animations
  componentDidMount () {
    $('.menu-icon-toggle').on('click', function(e) {
      $('main').toggleClass('open');
      e.preventDefault();
    });
  }
  render() {
    return (
      <main>
        <div className='wrapper'>
          <header id="header" className="header">
            <nav className="menu-navigation">
              <p className="menu-icon-toggle"><span></span></p>
              <i className="menu-background top"></i>
              <i className="menu-background middle"></i>
              <i className="menu-background bottom"></i>
              <ul className="menu">
                <li>For Business</li>
                <li>For Personal</li>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          </header>
        </div>
      </main>
    )
  }
}

export default navBar;