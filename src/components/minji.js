import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Link, withRouter} from 'react-router-dom';
import {useGlobalContext} from './Context';
import {FaFacebookSquare, FaInstagram} from 'react-icons/fa';

const Minji = ({location: {pathname}}) => {
  console.log(pathname);
  const {sidebar, openSidebar, closeSidebar} = useGlobalContext();

  const handleClose = (e) => {
    if (!e.target.classList.contains('sidebar.show')) {
      closeSidebar();
    }
  };

  return (
    <nav className="navbar-header" onMouseOver={openSidebar}>
      <div className="navbar">
        <button className="toggle-bar">
          <FaBars />
        </button>
        <h3 className={`liberzen ${sidebar ? 'show' : ' '}`}>LIBERZEN</h3>
      </div>
      <div
        onMouseLeave={handleClose}
        className={`sidebar ${sidebar ? 'show' : ''}`}
      >
        <ul className="nav-links">
          <li className="menu-item">
            <Link className="menu-item-active" to="/">
              Home
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-item-active" to="/brand">
              Brand
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-item-active" to="/shop">
              Shop
            </Link>
          </li>
        </ul>
      </div>
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
    </nav>
  );
};

export default withRouter(Minji);
