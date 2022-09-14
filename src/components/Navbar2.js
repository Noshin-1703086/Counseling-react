import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Navbar2.css';
import "@fontsource/cooper-hewitt";
import axios from 'axios';

function Navbar2() {
  const [show, setShow] = useState(false);
  const [click, setClick] = useState (false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu= () => setClick(false);
  const [user, setUser] =useState('');
  useEffect(() => {
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
  })
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
            <NavLink to = '/about2' className={(navData) => navData.isActive ? 'nav-links2 active': 'nav-links2'} onClick={closeMobileMenu}>
              ABOUT
            </NavLink>
          </li>
          <li className='nav-item2'>
            <NavLink to = '/services2' className={(navData) => navData.isActive ? 'nav-links2 active': 'nav-links2'} onClick={closeMobileMenu}>
              SERVICES
            </NavLink>
          </li>
          <li className='nav-item2'>
            <NavLink to = '/faq2' className={(navData) => navData.isActive ? 'nav-links2 active': 'nav-links2'} onClick={closeMobileMenu}>
              FAQ
            </NavLink>
          </li>
          <li className='nav-item2'>
            <NavLink to = '/resources2' className={(navData) => navData.isActive ? 'nav-links2 active': 'nav-links2'} onClick={closeMobileMenu}>
              RESOURCES
            </NavLink>
          </li>
          <li className='nav-item2'>
            <NavLink to = '/contact2' className={(navData) => navData.isActive ? 'nav-links2 active': 'nav-links2'} onClick={closeMobileMenu}>
              CONTACT
            </NavLink>
          </li>
        </ul>
        <div className='username'>
        <div className='username_link'>
          Hello, {user} <i onClick={() => setShow(!show)} class = "fa-solid fa-caret-down"></i>
        </div>
        </div>
        <NavLink to = '/' className='logout' onClick={()=>localStorage.clear()} >
             {show && <p>Sign Out</p>}
        </NavLink>
        </div>

    </nav>
      
    </>
  );
}

export default Navbar2;
