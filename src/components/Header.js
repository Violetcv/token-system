import React from 'react';
import './header.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div class="logo">Your Logo</div>
      <h3 className='header-h3'>Token Gated Ticketing System</h3>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
          <li><Link to="/booktickets">Book Tickets</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/trackticket">Track Tickets</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
