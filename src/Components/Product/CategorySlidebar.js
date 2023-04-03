import React from 'react'
import img1 from '../../Assets/images/1.png'
import img2 from '../../Assets/images/2.png'
import img3 from '../../Assets/images/3.png'
import img4 from '../../Assets/images/4.png'
import './CategorySlidebar.css'

const CategorySlidebar = () => {

  const data = [
    {
      id:1,
      categoryimage: img1,
      categoryname : 'Category 1'
    },
    {
      id:2,
      categoryimage: img2,
      categoryname : 'Category 2'
    },
    {
      id:3,
      categoryimage: img3,
      categoryname : 'Category 3'
    },
    {
      id:4,
      categoryimage: img4,
      categoryname : 'Category 4'
    },
    {
      id:5,
      categoryimage: img2,
      categoryname : 'Category 5'
    },
    {
      id:6,
      categoryimage: img1,
      categoryname : 'Category6'
    },
  ]

  return (
    <div className='CategorySlidebar'>
      {
        data.map((item) => {
          return(
            <div className='category'>
              <img src={item.categoryimage} alt='categoryimage'/>
              <h3>{item.categoryname}</h3>
            </div>
          )
        })
      }
    </div>
  )
}

export default CategorySlidebar