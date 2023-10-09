import React from 'react';
import Banner from './Banner/Banner';
import AboutUs from './AboutUs';

import PopularClasses from './PopularClasses/PopularClasses';

const Home = () => {
  return (
    <div className='py-6'>
      <Banner></Banner>
      <div className='py-20'>
      <PopularClasses />
      <AboutUs></AboutUs></div>
    </div>
  );
};

export default Home;