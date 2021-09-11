import React from 'react';
import Helmet from 'react-helmet';
import About from './About';
import Detail from './Detail';
import {useGlobalContext} from '../Context';

const ControlBrand = () => {
  const {closeSidebar} = useGlobalContext();
  return (
    <section onMouseEnter={closeSidebar} className="about">
      <Helmet>
        <title>Liberzen | Brand</title>
      </Helmet>
      <About />
      <Detail />
    </section>
  );
};

export default ControlBrand;
