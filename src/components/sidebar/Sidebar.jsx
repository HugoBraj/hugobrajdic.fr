import React from 'react';
import "./sidebar.css";
import Logo from "../../assets/logo.svg"

const Sidebar = () => {
  return (
    <aside className='aside'>
      <a href='#home' className='nav__logo'>
        <img alt='logo' src={Logo}/>  
      </a>

      <nav className='nav'>
        <div className='nav__menu'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <a href='#home' className='nav__link' title='Accueil'>
                <i className="icon-home"></i>
              </a>
            </li>
            <li className='nav__item'>
              <a href='#about' className='nav__link' title='A propos'>
              <i className="icon-user"></i>
              </a>
            </li>
            <li>
              <a href='#skills' className='nav__link' title='Compétences'>
              <i className="icon-energy"></i>
              </a>
            </li>
            <li className='nav__item'>
              <a href='#portfolio' className='nav__link' title='Portfolio'>
              <i className="icon-docs"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="nav__footer">
        <span className="copyright">&copy; 2023-2024</span>
      </div>
    </aside>
  )
}

export default Sidebar