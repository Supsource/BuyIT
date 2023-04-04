import React from 'react'
import img1 from '../../Assets/images/1.png'
import img2 from '../../Assets/images/2.png'
import img3 from '../../Assets/images/3.png'
import img4 from '../../Assets/images/4.png'
import ProductCart from './ProductCart'
import './AllProducts.css';


const AllProducts = () => {
  const products =[
    {
      id:1,
      productimgage : img1,
      productname: 'product 1',
      productprice: 100,
      counttype : '1 each',
      discountpercent: 10
    },
    {
      id:2,
      productimgage : img2,
      productname: 'product 2',
      productprice: 100,
      counttype : '1 each',
      discountpercent: 10
    },
    {
      id:3,
      productimgage : img3,
      productname: 'product 3',
      productprice: 100,
      counttype : '1 each',
      discountpercent: 10
    },
    {
      id:4,
      productimgage : img4,
      productname: 'product 4',
      productprice: 100,
      counttype : '1 each',
      discountpercent: 10
    }
  ]
  return (
    <div>AllProducts</div>
  )
}

export default AllProducts