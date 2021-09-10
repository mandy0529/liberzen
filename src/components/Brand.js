import React from 'react';
import Helmet from 'react-helmet';
import About from './brand/About';
import {useGlobalContext} from './Context';

const Brand = () => {
  const {closeSidebar} = useGlobalContext();
  return (
    <section onMouseEnter={closeSidebar} className="about">
      <About />
    </section>
  );
};

export default Brand;
