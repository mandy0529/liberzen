import React from 'react';
import Helmet from 'react-helmet';
import About from './brand/About';
import Detail from './brand/Detail';
import {useGlobalContext} from './Context';

const Brand = () => {
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

export default Brand;
