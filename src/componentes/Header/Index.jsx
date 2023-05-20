import React, { useState } from "react"
import "./Header.css"
import { Outlet } from "react-router-dom"
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const [Mobile, setMobile] = useState(false)
    const location = useLocation();
  return (
    <>
      <header>
        <div className='container flexSB'>
          <nav className='flexSB'>
            <div className='logo'>
              <img src='/img/megaflix.png' alt='Megaflix' />
            </div>
            {/*<ul className='flexSB'>*/}
            <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
              <li>
              <a href='/' className={location.pathname === '/' ? 'active' : ''}>Home</a>
              </li>
              <li>
              <a href='/about' className={location.pathname === '/about' ? 'active' : ''}>Series</a>
              </li>
              <li>
              <a href='/movies' className={location.pathname === '/movies' ? 'active' : ''}>Movies</a>
              </li>
              <li>
              <a href='/formCrear' className={location.pathname === '/formCrear' ? 'active' : ''}>Load</a>
              </li>
              <li>
              <a href='/contact' className={location.pathname === '/contact' ? 'active' : ''}>Contacto</a>
              </li>
            </ul>
            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
          <Outlet />
          <div className='account flexSB'>
            <i className='fa fa-search'></i>
            <i class='fas fa-bell'></i>
            <i className='fas fa-user'></i>
            <button>Subscribe Now</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header