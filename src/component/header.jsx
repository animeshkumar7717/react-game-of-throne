import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
        <div className='hero'>
        <div className='hero-banner'>
          <h1>Game Of Thrones</h1>
          <p>When people ask you what happened here, tell them the North remembers</p>
          <NavLink to={"/character"} className='hero-btn'>Characters</NavLink>
          </div>
        </div>
        </header>
      )
}

export default Header;