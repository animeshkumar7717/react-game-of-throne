import React from 'react';
import img from '../logo-got.jpg'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={img} className='logo'  alt='' />
            <ul>
                <NavLink to={"/"} style={{textDecoration:"none", color: "white"}}><li>Home</li></NavLink>
                <NavLink to={"/character"} style={{textDecoration:"none", color: "white"}}><li>Character</li></NavLink>
            </ul>
        </div>
    )
}

export default Navbar;