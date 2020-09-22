import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import './Header.css'

const Header = () => {
  
    
    return (
        <div>

<ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#contact">About us</a></li>
</ul>
        </div>
    );
};

export default Header;