import React from 'react';
import {FaBars} from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar">
      <button className="toggle-bar">
        <FaBars />
      </button>
      <h3 className="liberzen">LIBERZEN</h3>
      <div className="sidebar"></div>
    </div>
  );
};

export default Navbar;
