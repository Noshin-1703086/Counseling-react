import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import "@fontsource/cooper-hewitt";

function Navbar() {
  const [click, setClick] = useState (false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu= () => setClick(false);
  

  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to='/' className="navbar-logo">
            <div className="tot-logo">
                <i class="fa-brands fa-envira"/> 
                  <a>HOPE</a>
                  </div>
                  <div className="small-logo">
                   Counseling & Psychotherapy
                   </div>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click? 'fa-solid fa-times': 'fa-solid fa-bars'} /> 
        </div>
        <ul className={click? 'nav-menu active': 'nav-menu'}>
          <li className='nav-item'>
          <NavLink  to="/" className={(navData) => navData.isActive ? 'nav-links active': 'nav-links'} onClick={closeMobileMenu}>
            HOME
          </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to = '/about' className={(navData) => navData.isActive ? 'nav-links active': 'nav-links'} onClick={closeMobileMenu}>
              ABOUT
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to = '/services' className={(navData) => navData.isActive ? 'nav-links active': 'nav-links'} onClick={closeMobileMenu}>
              SERVICES
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to = '/faq' className={(navData) => navData.isActive ? 'nav-links active': 'nav-links'} onClick={closeMobileMenu}>
              FAQ
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to = '/resources' className={(navData) => navData.isActive ? 'nav-links active': 'nav-links'} onClick={closeMobileMenu}>
              RESOURCES
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to = '/contact' className={(navData) => navData.isActive ? 'nav-links active': 'nav-links'} onClick={closeMobileMenu}>
              CONTACT
            </NavLink>
          </li>
        </ul>
        </div>

    </nav>
      
    </>
  );
}

export default Navbar;
