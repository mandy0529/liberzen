import React, {useEffect, useRef, useState} from 'react';
import {useGlobalContext} from './Context';
import {VscUnmute, VscMute, VscDebugPause} from 'react-icons/vsc';
import {FiPlay} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import Mobile from './Mobile';

const Hero = () => {
  const {closeSidebar} = useGlobalContext();
  const [muted, setMuted] = useState(true);
  const [play, setPlay] = useState(true);
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

  const handlePlay = () => {
    if (soundRef.current.paused) {
      soundRef.current.play();
      setPlay(true);
    } else {
      soundRef.current.pause();
      setPlay(false);
    }
  };

  return (
    <>
      <header onMouseEnter={closeSidebar} className="full-screen">
        {/* BIG screen */}

        <video
          ref={soundRef}
          autoPlay={mobile && false}
          controls={false}
          muted
          loop
          className="video"
        >
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
        <div onClick={handlePlay} className="play">
          {play ? (
            <FiPlay className="play-icon" />
          ) : (
            <VscDebugPause className="play-icon" />
          )}
        </div>

        {/* Mobile */}
        {/* {mobile && <Mobile />} */}
        <Link to="/shop" className="go-shop">
          Go shop
        </Link>
      </header>
    </>
  );
};

export default Hero;
