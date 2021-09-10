import React, {useEffect, useRef, useState} from 'react';
import {useGlobalContext} from './Context';
import {VscUnmute, VscMute} from 'react-icons/vsc';
import {Link} from 'react-router-dom';
import Mobile from './Mobile';

const Hero = () => {
  const {closeSidebar} = useGlobalContext();
  const [muted, setMuted] = useState(true);
  const [mobile, setMobile] = useState(false);
  const soundRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const inner = window.innerWidth;
      if (inner >= 768) {
        setMobile(false);
      } else {
        setMobile(true);
      }
    };
    window.addEventListener('load', handleScroll);
    return () => window.removeEventListener('load', handleScroll);
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const inner = window.innerWidth;
      if (inner >= 768) {
        setMobile(false);
      } else {
        setMobile(true);
      }
    };
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
    // eslint-disable-next-line
  }, []);

  console.log(mobile, 'what mode now');
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
        {/* BIG screen */}
        {!mobile && (
          <>
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
              <h1 className="banner-title">
                Live your dream. Wear your passion
              </h1>
            </div>
            <div onClick={handleClick} className="sound">
              {muted ? (
                <VscMute className="mute-icon" />
              ) : (
                <VscUnmute className="mute-icon" />
              )}
            </div>
          </>
        )}
        {/* Mobile */}
        {mobile && <Mobile />}
        <Link to="/shop" className="go-shop">
          Go shop
        </Link>
      </header>
    </>
  );
};

export default Hero;
