import React, {useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {Link, withRouter} from 'react-router-dom';
import {useGlobalContext} from './Context';
import {GrFormClose} from 'react-icons/gr';
import {FaFacebookSquare, FaInstagram} from 'react-icons/fa';

const Navbar = ({location: {pathname}}) => {
  const {sidebar, openSidebar, closeSidebar} = useGlobalContext();
  const [className] = useState('menu-item-active');

  const handleClose = (e) => {
    if (!e.target.classList.contains('sidebar.show')) {
      closeSidebar();
    }
  };

  const handleClick = (e) => {
    e.target.className = 'menu-item-active--hide';
    if (e.target.className) {
      closeSidebar();
    }
    return;
  };
  return (
    <>
      <div
        onMouseOver={openSidebar}
        className={`navbar ${sidebar ? 'show' : ''}`}
      >
        {/* top */}
        <div className={`top ${sidebar ? 'show' : ''}`}>
          <button
            className="toggle-bar"
            style={{
              color: pathname !== '/' ? (sidebar ? 'white' : 'black') : 'white',
            }}
          >
            <FaBars />
          </button>
          <Link to="/">
            <h3
              className="liberzen"
              style={{
                color:
                  pathname === '/' ? (sidebar ? 'black' : '#fbfbfb') : 'black',
              }}
            >
              LIBERZEN
            </h3>
          </Link>
          {sidebar ? (
            <GrFormClose
              onClick={closeSidebar}
              className={`xIcon ${sidebar ? 'show' : ''}`}
            />
          ) : (
            ''
          )}
        </div>
        {/* list */}
        <div
          onMouseLeave={handleClose}
          className={`sidebar ${sidebar ? 'show' : ''}`}
        >
          <ul className="nav-menu">
            <div className="menu-item ">
              <Link
                onClick={handleClick}
                className={`menu-item-active ${className ? '--hide' : ''}`}
                to="/brand"
              >
                Brand
              </Link>
            </div>
            <div className="menu-item ">
              <Link
                onClick={handleClick}
                className={`menu-item-active ${className ? '--hide' : ''}`}
                to="/shop"
              >
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
      </div>
    </>
  );
};

export default withRouter(Navbar);
