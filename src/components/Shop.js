import React from 'react';
import {useGlobalContext} from './Context';
import Helmet from 'react-helmet';

const Shop = () => {
  const {closeSidebar} = useGlobalContext();
  return (
    <section onMouseEnter={closeSidebar} className="about">
      <Helmet>
        <title>Liberzen | Shop </title>
      </Helmet>
    </section>
  );
};

export default Shop;
