import React, {useContext, useState} from 'react';
import {useEffect} from 'react/cjs/react.development';
import data from './Brand/data';

const AppContext = React.createContext();

const AppContextProvider = ({children}) => {
  const [sidebar, setSidebar] = useState(false);
  const [muted, setMuted] = useState(true);
  const [play, setPlay] = useState(false);
  const [people] = useState(data);
  const [index, setIndex] = React.useState(0);
  const [scroll, setScroll] = useState({
    x: 0,
    y: 0,
  });

  const handleVolume = (video) => {
    const volume = video.muted;
    if (volume) {
      video.muted = false;
      setMuted(false);
    } else {
      video.muted = true;
      setMuted(true);
    }
  };
  const handlePlay = (video) => {
    if (video.paused) {
      video.play();
      setPlay(true);
    } else {
      video.pause();
      setPlay(false);
    }
  };

  const onScroll = () => {
    setScroll({x: window.scrollX, y: window.scrollY});
  };

  const openSidebar = () => {
    setSidebar(true);
  };
  const closeSidebar = () => {
    setSidebar(false);
  };
  const handleClose = (e) => {
    if (!e.target.classList.contains('sidebar.show')) {
      closeSidebar();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <>
      <AppContext.Provider
        value={{
          sidebar,
          openSidebar,
          closeSidebar,
          setSidebar,
          onScroll,
          scroll,
          muted,
          handleVolume,
          handlePlay,
          play,
          handleClose,
          people,
          index,
          setIndex,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppContextProvider;
