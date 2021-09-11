import React from 'react';
import {useGlobalContext} from '../Context';
import Helmet from 'react-helmet';
import ShopItem from './ShopItem';

const Shop = () => {
  const {closeSidebar} = useGlobalContext();
  return (
    <section onMouseEnter={closeSidebar} className="about">
      <Helmet>
        <title>Liberzen | Shop </title>
      </Helmet>
      <ShopItem />
    </section>
  );
};

export default Shop;
