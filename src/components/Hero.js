import React, {useRef} from 'react';
import {useGlobalContext} from './Context';
import {VscUnmute, VscMute, VscDebugPause} from 'react-icons/vsc';
import {FiPlay} from 'react-icons/fi';
import {Link} from 'react-router-dom';

const Hero = () => {
  const {scroll, handleVolume, muted, handlePlay, play} = useGlobalContext();

  const soundRef = useRef();
  const {y} = scroll;

  return (
    <main>
      <section className="video-box">
        <video
          className="video"
          autoPlay={true}
          muted={true}
          loop
          playsInline
          src="./video/li.mp4"
          ref={soundRef}
        />
        <div className="banner">
          <img
            src="./img/logo.png"
            alt="logo"
            width="300px"
            className="banner-subtitle"
          />
          <h1 className="banner-title">Live your dream. Wear your passion</h1>
        </div>
      </section>
      <div className="minji-box">
        <div className="photo-item first-item">
          <img src="img/1.png" className="minji-img" alt="pho" />
        </div>
        <div className="photo-item second-item">
          <img src="img/3.png" className="minji-img" alt="pho" />
        </div>
        <div className="photo-item third-item">
          <img src="img/5.png" className="minji-img" alt="pho" />
        </div>
      </div>
      <div onClick={() => handleVolume(soundRef.current)} className="sound">
        {muted ? (
          <VscMute className="mute-icon" />
        ) : (
          <VscUnmute className="mute-icon" />
        )}
      </div>
      <div onClick={() => handlePlay(soundRef.current)} className="play">
        {play ? (
          <VscDebugPause className="play-icon" />
        ) : (
          <FiPlay className="play-icon" />
        )}
      </div>
      <Link
        to="/shop"
        className="go-shop"
        style={{
          opacity: y > 50 ? '0' : '1',
        }}
      >
        Go shop
      </Link>
    </main>
  );
};

export default Hero;
