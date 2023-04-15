import React from 'react';
import './Nav.css';

function Nav() {
  
  const openMenu = () => {
    location.href='#menu'
  }
  
  return (
    <div>
        <div className='navbar'>
          
          <button className='nav-target' onClick={openMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </button>
          <ul className='nav_links' id='menu'>
            <li>
              <a className='nav_link' href="#inicio">Inicio</a>
            </li>
            <li>
              <a className='nav_link' href="#aboutme">Quien Soy</a>
            </li>
            <li>
              <a className='nav_link' href="#proyect">Proyectos</a>
            </li>
            <li>
              <a className='nav_link' href="#contactme">Contactame</a>
            </li>
          </ul>
        </div>
    </div>
  );
}

export default Nav;
