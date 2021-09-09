import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import About from './About';
import {useGlobalContext} from './Context';
import Detail from './Shop';
import Home from './Home';

const Navbar = () => {
  const {sidebar, openSidebar} = useGlobalContext();

  const handleOpen = () => {
    openSidebar();
  };
  return (
    <>
      <div onMouseOver={handleOpen} className="navbar">
        <button className="toggle-bar">
          <FaBars />
        </button>
        <h3 className={`liberzen ${sidebar ? 'show' : ''}`}>LIBERZEN</h3>
      </div>
      <div className={`sidebar ${sidebar ? 'show' : ''}`}>
        <ul className="nav-menu">
          <li className="menu-item">
            <Link className="menu-item-active" to="/">
              Home
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-item-active" to="/about">
              About
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-item-active" to="/shop">
              Shop
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
