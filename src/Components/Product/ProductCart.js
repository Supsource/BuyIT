import React from 'react'

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
        <div className='s3'></div>
        <div className='addbtn'> </div>
    </div>
  )
}

export default ProductCart