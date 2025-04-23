import React from 'react'
import Slider from 'react-slick'

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    autoplay:true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <>
      <Slider {...settings}>
      <div class="slide" data-order="1">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/42764/todo-banner.jpg" alt="" />
          
            <h1>Discover</h1>
            <h2>The warm heart of Nordic Beauty</h2>
         \
              <p>The Nordic Countries varied landscapes offer wonderful scenery for any journey, no matter by land or sea.  How you choose to travel will depend on where you go.</p>
              <button>Show regions</button>
     
         </div>


         
        <div class="slide" data-order="2">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/42764/todo-banner.jpg" alt="" />
          
            <h1>To do</h1>
            <h2>Close encounters with nature</h2>
        
              <p>There's never a bad time to visit the Nordic countries! When you should visit will depend on which types of activities or natural phenomena interest you most.</p>
              <button>Activities</button>
          
         </div>


         <div class="slide" data-order="3">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/42764/plan-banner_copy.jpg" alt="" />
          
            <h1>Plan</h1>
            <h2>Top attractions in the nordics</h2>
    
              <p>June, July and August is the best time to travel, this is when you can expect the warmest weather, longest daylight hours and best availability of outdoor activities.</p>
              <button>Reservations</button>
          
         </div>


         <div class="slide" data-order="3">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/42764/plan-banner_copy.jpg" alt="" />
          
            <h1>Plan</h1>
            <h2>Top attractions in the nordics</h2>
    
              <p>June, July and August is the best time to travel, this is when you can expect the warmest weather, longest daylight hours and best availability of outdoor activities.</p>
              <button>Reservations</button>
          
         </div>

         <div class="slide" data-order="3">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/42764/plan-banner_copy.jpg" alt="" />
          
            <h1>Plan</h1>
            <h2>Top attractions in the nordics</h2>
    
              <p>June, July and August is the best time to travel, this is when you can expect the warmest weather, longest daylight hours and best availability of outdoor activities.</p>
              <button>Reservations</button>
          
         </div>
      </Slider>
    </>
  )
}

export default SlickSlider
