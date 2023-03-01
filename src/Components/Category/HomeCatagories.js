import React from 'react';
import './HomeCatagories.css'
import img1 from '../../Assets/images/1.png'
import img2 from '../../Assets/images/2.png'
import img3 from '../../Assets/images/3.png'
import img4 from '../../Assets/images/4.png'

const HomeCatagories = () => {
  return (
    <div className='homecatagories'>
      <div className='container'>
      <img src={img1} alt='img1'/>
      <div className='content'>
        <h1>
            Vagetables at your doorstep
        </h1>
<p>Shop vegetables now</p>
      </div>
      </div>
      <div className='container'>
      <img src={img2} alt='img2'/>
      <div className='content'>
        <h1>
            Vagetables at our doorstep
        </h1>
        <p>Shop vegetables now</p>
      </div>
      </div>
      <div className='container'>
      <img src={img3} alt='img3'/>
      <div className='content'>
        <h1>
            Vagetables at your doorstep
        </h1>
        <p>Shop vegetables now</p>
      </div>
      </div>
      <div className='container'>
      <img src={img4} alt='img4'/>
      <div className='content'>
        <h1>
            Vagetables at your doorstep
        </h1>
        <p>Shop vegetables now</p>
      </div>
      </div>
    </div>
  );
}

export default HomeCatagories;
