import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import './Header.css'

const Header = () => {
  
    
    return (
        <div>

<ul>
  <li><Link  to="/home">Home</Link></li>
  <li><Link to="/booking/">Booking</Link></li>
  <li><Link to="/login ">Login</Link></li>
  <li><Link to="/hotelDetail">Hotel</Link></li>
</ul>
        </div>
    );
};

export default Header;