import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'


const Header = () => {
    return (
        
        <nav className='header-container'>
            <img src={logo} alt=''></img>
            <div className='nav-details'>
                <Link to='/'>Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/inventory'>Inventory</Link>
            </div>
        </nav>
        
    );
};

export default Header;