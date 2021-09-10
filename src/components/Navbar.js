import React, {useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {useGlobalContext} from './Context';

const Navbar = () => {
  const {sidebar, openSidebar, closeSidebar} = useGlobalContext();
  const [home, setHome] = useState(true);

  const handleClose = (e) => {
    if (!e.target.classList.contains('sidebar.show')) {
      closeSidebar();
    }
  };

  return (
    <>
      <div onMouseOver={openSidebar} className="navbar">
        <button className="toggle-bar">
          <FaBars />
        </button>
        <h3 className={`liberzen ${sidebar ? 'show' : ' '}`}>LIBERZEN</h3>
      </div>
      <div
        onMouseLeave={handleClose}
        className={`sidebar ${sidebar ? 'show' : ''}`}
      >
        <ul className="nav-menu">
          <li onClick={() => setHome(true)} className="menu-item">
            <Link className="menu-item-active" to="/">
              Home
            </Link>
          </li>
          <li onClick={() => setHome(false)} className="menu-item">
            <Link className="menu-item-active" to="/about">
              About
            </Link>
          </li>
          <li onClick={() => setHome(false)} className="menu-item">
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
