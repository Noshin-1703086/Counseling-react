import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar3.css';
import "@fontsource/cooper-hewitt";

function Navbar3() {
  const [click, setClick] = useState (false);
  const closeMobileMenu= () => setClick(false);
  return (
    <>
    <nav className="navbar3">
        <div className="navbar-container3">
            <div className="navi">
                <h3>NAVIGATION</h3>     
            </div>
        <ul className= "nav-menu3">
          <li className='nav-item3'>
            <NavLink to = '/Dashboard_C' className={(navData) => navData.isActive ? 'nav-links3 active': 'nav-links3'} onClick={closeMobileMenu}>
              SESSION INFORMATION
            </NavLink>
          </li>
          <li className='nav-item3'>
            <NavLink to = '/report' className={(navData) => navData.isActive ? 'nav-links3 active': 'nav-links3'} onClick={closeMobileMenu}>
              IPA REPORT
            </NavLink>
          </li>
          <li className='nav-item3'>
            <NavLink to = '/dailytracker' className={(navData) => navData.isActive ? 'nav-links3 active': 'nav-links3'} onClick={closeMobileMenu}>
              DAILY UPDATE
            </NavLink>
          </li>
          <li className='nav-item3'>
            <NavLink to = '/sessiontracker' className={(navData) => navData.isActive ? 'nav-links3 active': 'nav-links3'} onClick={closeMobileMenu}>
              SESSION UPDATE
            </NavLink>
          </li>
          <li className='nav-item3'>
            <NavLink to = '/notes' className={(navData) => navData.isActive ? 'nav-links3 active': 'nav-links3'} onClick={closeMobileMenu}>
              NOTES
            </NavLink>
          </li>
          <li className='nav-item3'>
            <NavLink to = '/journal' className={(navData) => navData.isActive ? 'nav-links3 active': 'nav-links3'} onClick={closeMobileMenu}>
              GRATITUDE JOURNAL
            </NavLink>
          </li>
          <li className='nav-item3'>
            <NavLink to = '/breathing' className={(navData) => navData.isActive ? 'nav-links3 active': 'nav-links3'} onClick={closeMobileMenu}>
              BREATHING EXERCISE
            </NavLink>
          </li>
          <li className='nav-item3'>
            <NavLink to = '/book_r' className={(navData) => navData.isActive ? 'nav-links3 active': 'nav-links3'} onClick={closeMobileMenu}>
              BOOK REGULAR SESSION
            </NavLink>
          </li>
        </ul>
        </div>

    </nav>
      
    </>
  );
}

export default Navbar3;
