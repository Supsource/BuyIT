import React from 'react'
import './ProductCart.css'

const ProductCart = ({data}) => {
  return (
    <div className='product'>
        <div className='s1'>
            <img src={data.productimgage} alt={'no img'} />
        </div>
        <div className='s2'>
          <h3>
            {
             data.productprice - (data.productprice * data.discountpercent / 100)
            }
            <span>₹{data.productprice}</span></h3>
        </div>
        <div className='s3'>
          <p>{data.counttype}</p>
        </div>
        <div className='addbtn'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>




        </div>
    </div>
  )
}

export default ProductCart;