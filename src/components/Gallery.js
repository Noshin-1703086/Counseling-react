import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './Gallery.css';

function Gallery() {
  let settings = {
      dot:false,
      infinite:false,
      speed:300,
      slidesToShow:4,
      slidesToScroll:4,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
  }
return (
  <div className='slider-container'>
  <Slider {...settings}>
      <div className='card-wrapper'>
          <div className='card'>
              <div className='card-image'>
                  <img src='/images/img-t1.jpg' alt="therapist 1"/>
              </div>
              <div className='details'>
                  <h2>Noshin Tabassum<span class="job-title">ABC</span></h2>
              </div>
          
          </div>
      </div>
      <div className='card-wrapper'>
          <div className='card'>
              <div className='card-image'>
                  <img src='/images/img-t2.jpg' alt="therapist 2"/>
              </div>
              <div className='details'>
                  <h2>Abcd Efg<span class="job-title">ABC</span></h2>
              </div>
          
          </div>
      </div>
      <div className='card-wrapper'>
          <div className='card'>
              <div className='card-image'>
                  <img src='/images/img-t3.jpg' alt="therapist 3"/>
              </div>
              <div className='details'>
                  <h2>Abcd Efg<span class="job-title">ABC</span></h2>
              </div>
          
          </div>
      </div>
      <div className='card-wrapper'>
          <div className='card'>
              <div className='card-image'>
                  <img src='/images/img-t1.jpg' alt="therapist 4"/>
              </div>
              <div className='details'>
                  <h2>Abcd Efg<span class="job-title">ABC</span></h2>
              </div>
          
          </div>
      </div>
      <div className='card-wrapper'>
          <div className='card'>
              <div className='card-image'>
                  <img src='/images/img-t2.jpg' alt="therapist 5"/>
              </div>
              <div className='details'>
                  <h2>Abcd Efg<span class="job-title">ABC</span></h2>
              </div>
          
          </div>
      </div>
      <div className='card-wrapper'>
          <div className='card'>
              <div className='card-image'>
                  <img src='/images/img-t3.jpg' alt="therapist 6"/>
              </div>
              <div className='details'>
                  <h2>Abcd Efg<span class="job-title">ABC</span></h2>
              </div>
          
          </div>
      </div>
      <div className='card-wrapper'>
          <div className='card'>
              <div className='card-image'>
                  <img src='/images/img-t1.jpg' alt="therapist 7"/>
              </div>
              <div className='details'>
                  <h2>Abcd Efg<span class="job-title">ABC</span></h2>
              </div>
          
          </div>
      </div>
      <div className='card-wrapper'>
          <div className='card'>
              <div className='card-image'>
                  <img src='/images/img-t2.jpg' alt="therapist 8"/>
              </div>
              <div className='details'>
                  <h2>Abcd Efg <span class="job-title">ABC</span></h2>
              </div>
          
          </div>
      </div>
  </Slider>
  </div>
);
}

export default Gallery;

  