import React, {useRef, useState} from 'react';
import {useGlobalContext} from './Context';
import {VscUnmute, VscMute} from 'react-icons/vsc';
import {Link} from 'react-router-dom';

const Hero = () => {
  const {closeSidebar, sidebar} = useGlobalContext();
  const [muted, setMuted] = useState(true);
  const soundRef = useRef();

  const handleClick = () => {
    const isMuted = soundRef.current.muted;
    if (isMuted) {
      soundRef.current.muted = false;
      setMuted(false);
    } else {
      soundRef.current.muted = true;
      setMuted(true);
    }
  };

  return (
    <>
      <header onMouseEnter={closeSidebar} className="full-screen">
        <video ref={soundRef} autoPlay={true} muted loop className="video">
          <source src="./video/li.mp4" />
        </video>
        <div className="banner">
          <img
            src="./img/logo.png"
            alt="logo"
            width="300px"
            className="banner-subtitle"
          />
          <h1 className="banner-title">Live your dream. Wear your passion</h1>
        </div>
        <div onClick={handleClick} className="sound">
          {muted ? (
            <VscMute className="mute-icon" />
          ) : (
            <VscUnmute className="mute-icon" />
          )}
        </div>
        <Link to="/shop" className="go-shop">
          Go shop
        </Link>
      </header>
    </>
  );
};

export default Hero;
