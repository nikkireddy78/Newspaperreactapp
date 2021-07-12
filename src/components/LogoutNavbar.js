import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "reactstrap";
import './Navbar.css';

function LogoutNavbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='navbar-logo'>
            <i class='fab fa-typo3' />

             ADs Management

          </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                <i class="fa fa-home"></i>&nbsp;
                  HOME
              </Link>
            </li>


            <li className='nav-item'>
              <Link
                to="/show-advertisements"
                className='nav-links'
                onClick={closeMobileMenu}>
                <i class="fas fa-ad" aria-hidden="true"></i>&nbsp;
                  View Ads
              </Link>
            </li>

            <Link to="/Logout" className='logout-btn'><Button>LOGOUT</Button></Link>

          </ul>


        </div>
      </nav>
    </>
  );
}

export default LogoutNavbar;
