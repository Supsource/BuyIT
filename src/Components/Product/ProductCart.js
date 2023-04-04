import React from 'react'

const ProductCart = ({data}) => {
  return (
    <div className='product'>
        <div className='s1'>
            <img src={data.productimgage} alt={'no img'} />
        </div>
        <div className='s2'></div>
        <div className='s3'></div>
        <div className='addbtn'> </div>
    </div>
  )
}

export default ProductCart