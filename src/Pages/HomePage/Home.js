import React from 'react';
import BannerSlider from '../../Components/Banners/BannerSlider';
import HomeCatagories from '../../Components/Category/HomeCatagories';
import Navbar from '../../Components/Navbar/Navbar';
import Product_Slidebar from '../../Components/Product/Product_Slidebar';


const Home = () => {
  return (
  <div>
     <Navbar/>
     <BannerSlider/>
     <HomeCatagories/>
     <Product_Slidebar/>
      Home
  </div>
  
  );
}

export default Home;
