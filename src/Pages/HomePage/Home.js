import React from 'react';
import BannerSlider from '../../Components/Banners/BannerSlider';
import HomeCatagories from '../../Components/Category/HomeCatagories';
import Navbar from '../../Components/Navbar/Navbar';


const Home = () => {
  return (
  <div>
     <Navbar/>
     <BannerSlider/>
     <HomeCatagories/>
      Home
  </div>
  
  );
}

export default Home;
