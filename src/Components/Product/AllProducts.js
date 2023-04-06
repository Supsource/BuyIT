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
      discountpercent: 12
    },
    {
      id:2,
      productimgage : img2,
      productname: 'product 2',
      productprice: 100,
      counttype : '1 each',
      discountpercent: 12
    },
    {
      id:3,
      productimgage : img3,
      productname: 'product 3',
      productprice: 100,
      counttype : '1 each',
      discountpercent: 12
    },
    {
      id:4,
      productimgage : img4,
      productname: 'product 4',
      productprice: 100,
      counttype : '1 each',
      discountpercent: 12
    },
    {
      id:5,
      productimgage : img1,
      productname: 'product 5',
      productprice: 100,
      counttype : '1 each',
      discountpercent: 12
    },
    {
      id:6,
      productimgage : img2,
      productname: 'product 6',
      productprice: 100,
      counttype : '1 each',
      discountpercent: 12
    },
    {
      id:7,
      productimgage : img3,
      productname: 'product 7',
      productprice: 100,
      counttype : '1 each',
      discountpercent: 12
    },
    {
      id:8,
      productimgage : img4,
      productname: 'product 8',
      productprice: 100,
      counttype : '1 each',
      discountpercent: 12
    },
    {
      id:9,
      productimgage : img1,
      productname: 'product 9',
      productprice: 100,
      counttype : '1 each',
      discountpercent: 12
    },
    {
      id:10,
      productimgage : img2,
      productname: 'product 10',
      productprice: 100,
      counttype : '1 each',
      discountpercent: 12
    },
    {
      id:11,
      productimgage : img3,
      productname: 'product 11',
      productprice: 100,
      counttype : '1 each',
      discountpercent: 12
    },
    {
      id:12,
      productimgage : img4,
      productname: 'product 12',
      productprice: 100,
      counttype : '1 each',
      discountpercent: 12
    }
  ]
  return (
    <div className='allproducts'>
      <h1>Trending Products</h1>
      <div className='products'>
        {
      products.map((item) => {
        return(
           <ProductCart data={item} key={item.id}/>
        )
      })
    }
      </div>
    </div>
  )
}

export default AllProducts