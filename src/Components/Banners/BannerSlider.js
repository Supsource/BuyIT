import React from 'react';
import Slider from 'react-slick';

const BannerSlider = () => {
    const data = [
        {
             id: 1,
             Image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
             title: 'Fresh Vegetables & Fruits at your doorstep',
             description: 'We deliver fresh Vegetables & Fruits at your doorstep',
             button: 'https://www.google.com'
        },
        {
            id: 2,
             Image: 'https://images.pexels.com/photos/255469/pexels-photo-255469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
             title: 'Fresh Vegetables & Fruits at your doorstep',
             description: 'We offer a convenient and hassle-free way for you to access fresh, high-quality vegetables and fruits',
             button: 'https://www.google.com'
        },
        {
            id: 3,
             Image: 'https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
             title: 'Fresh Vegetables & Fruits at your doorstep',
             description: 'Whether youre looking for leafy greens, juicy fruits, or crisp vegetables, we have got you',
             button: 'https://www.google.com'
        }
    
    ]
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
        
      };

      return (
        <div className="bannerslider">
          <Slider className='bannerslider' {...settings}>
            {
                data.map(item=>{
                    return(
                    <div className='imagecont' key={item.id}>
                    <img src={item.Image} alt='noImg' />
                    <div className='content'>
                          <h1>{item.title}</h1>
                          <p>{item.description}</p>
                          <button>Shop More</button>
                    </div>
                    </div>
                    )
                })      
            }
          </Slider>
        </div>
      );
        
    
}
export default BannerSlider
