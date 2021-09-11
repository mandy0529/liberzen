import React from 'react';
import {useGlobalContext} from '../Context';
import Topbar from './Topbar';
import SideBar from './SideBar';

const ControlNavbar = () => {
  const {sidebar, openSidebar} = useGlobalContext();

  return (
    <>
      <div
        onMouseOver={openSidebar}
        className={`navbar ${sidebar ? 'show' : ''}`}
      >
        <Topbar />
        <SideBar />
      </div>
    </>
  );
};

export default ControlNavbar;
