import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../navbar.css';
import Logo1 from "./images/Logo1.png"

function Navbar() {
  {/*Using react hooks to make the Navbar responsive*/}
  const [click, setClick] = useState(false);
  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className='navbar'>
        {/*When click Logo you are routed to home page// if you are on mobile The mobile menu close*/}
        <Link to='/'  onClick={closeMobileMenu}>
          <img className='navbar-logo' src={Logo1}></img>
        </Link>
        {/* Menu Icon*/}
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        
        {/*Nav links goes to the routes when you click them */}

        {/*Home Link */}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          {/*About Link */}
          <li className='nav-item'>
            <Link
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>

          {/*Contact Us Link */}
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>

          {/*Sign Up Link */}
          <li  className='nav-item'>
            <Link to='/sign-up' id="sign-up" className='nav-links' onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </li>

          {/*Login Link */}
          <li  className='nav-item'>
            <Link to='/login' id="login" className='nav-links' onClick={closeMobileMenu}>
              Login
            </Link>
          </li>

          {/*Create A listings Link */}
          <li>
            <Link
              to='/createListing'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Create A Listing
            </Link>
          </li>

          
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;