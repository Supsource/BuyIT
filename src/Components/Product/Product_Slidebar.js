import React from 'react'
import CategorySlidebar from './CategorySlidebar'
import AllProducts from './AllProducts'
import './Product_Slidebar.css';

const Product_Slidebar = () => {
  return (
    <div className='product_slidebar'>
        <CategorySlidebar/>
        <AllProducts/>
    </div>
  )
}

export default Product_Slidebar