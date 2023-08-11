import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css';

const Header = () => {
    return (
        <>
          <nav className='header'>
            <div>
              <h2><span className='redFont'>Stock</span>Stat</h2>
            </div>
            <ul className='headerNavs'>
              <li>
                <Link className='navItem' to="/">Home</Link>
              </li>
              <li>
                <Link className='navItem' to="/about">About</Link>
              </li>
              <li>
                <Link className='navItem' to="/ip">Ip</Link>
              </li>
            </ul>
            <div>Nataliya: +972-325-35-35</div>
          </nav>
        </>
      )
}

export default Header