import React from 'react';
import {Link} from 'react-router-dom';
import {FaFacebookSquare, FaInstagram} from 'react-icons/fa';
import {useGlobalContext} from '../Context';

const SideBar = () => {
  const {sidebar, closeSidebar, handleClose} = useGlobalContext();
  return (
    <div
      onMouseLeave={handleClose}
      className={`sidebar ${sidebar ? 'show' : ''}`}
    >
      <ul className="nav-menu">
        <div className="menu-item ">
          <Link onClick={closeSidebar} className="menu-item-active" to="/">
            Home
          </Link>
        </div>
        <div className="menu-item ">
          <Link onClick={closeSidebar} className="menu-item-active" to="/brand">
            Brand
          </Link>
        </div>
        <div className="menu-item ">
          <Link onClick={closeSidebar} className="menu-item-active" to="/shop">
            Shop
          </Link>
        </div>
      </ul>
      <div className="navbar-info">
        <div className="navbar-info_icon">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/Liberzen/?ref=nf&hc_ref=ARSUhTBLxKht4m1rAoNEy8wIGe0d_vvtd99aVgyJ31CY6nDFRfsuJOipFv39oN8aEP0&__tn__=%3C-R"
          >
            <FaFacebookSquare className="navbar-info_icon facebook" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/liberzen/"
          >
            <FaInstagram className="navbar-info_icon insta" />
          </a>
        </div>
        <div className="navbar-container">
          <h3 className="navbar-info_name"> Liberzen</h3>
          <h3 className="navbar-info_tel">T : 02-2254-2361</h3>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
