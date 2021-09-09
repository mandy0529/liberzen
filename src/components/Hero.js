import React from 'react';

const Hero = () => {
  return (
    <header className="full-screen">
      <video autoPlay={true} muted loop className="video">
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
        {/* <button className="banner-btn">go shop</button> */}
      </div>
    </header>
  );
};

export default Hero;
