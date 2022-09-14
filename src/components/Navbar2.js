import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Navbar2.css';
import "@fontsource/cooper-hewitt";
import axios from 'axios';

function Navbar2() {
  const [click, setClick] = useState (false);
  const username=JSON.stringify(localStorage.getItem('token'));
  const handleClick = () => setClick(!click);
  const closeMobileMenu= () => setClick(false);
  const [user, setUser] =useState('');
  const getUser = () => {
    axios.get('http://localhost:4000/api/getinfo',{
      params: {
        token: localStorage.getItem('token')
      }})
    .then(res => {
      setUser(res.data);
      console.log(user)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <>
    <nav className="navbar2">
        <div className="navbar-container2">
            <Link to='/Dashboard' className="navbar-logo2">
            <div className="tot-logo2">
                <i class="fa-brands fa-envira"/> 
                  <a>HOPE</a>
                  </div>
                  <div className="small-logo2">
                   Counseling & Psychotherapy
                   </div>
            </Link>
            <div className="menu-icon2" onClick={handleClick}>
              <i className={click? 'fa-solid fa-times': 'fa-solid fa-bars'} /> 
        </div>
        <ul className={click? 'nav-menu2 active': 'nav-menu2'}>
          <li className='nav-item2'>
            <NavLink to = '/about' className={(navData) => navData.isActive ? 'nav-links2 active': 'nav-links2'} onClick={closeMobileMenu}>
              ABOUT
            </NavLink>
          </li>
          <li className='nav-item2'>
            <NavLink to = '/services' className={(navData) => navData.isActive ? 'nav-links2 active': 'nav-links2'} onClick={closeMobileMenu}>
              SERVICES
            </NavLink>
          </li>
          <li className='nav-item2'>
            <NavLink to = '/faq' className={(navData) => navData.isActive ? 'nav-links2 active': 'nav-links2'} onClick={closeMobileMenu}>
              FAQ
            </NavLink>
          </li>
          <li className='nav-item2'>
            <NavLink to = '/resources' className={(navData) => navData.isActive ? 'nav-links2 active': 'nav-links2'} onClick={closeMobileMenu}>
              RESOURCES
            </NavLink>
          </li>
          <li className='nav-item2'>
            <NavLink to = '/contact' className={(navData) => navData.isActive ? 'nav-links2 active': 'nav-links2'} onClick={closeMobileMenu}>
              CONTACT
            </NavLink>
          </li>
        </ul>
        <div className='username'>
        <NavLink to = '/' className='username_link' onClick={getUser}>
              Hello, {user}
        </NavLink>
        </div>
        </div>

    </nav>
      
    </>
  );
}

export default Navbar2;
