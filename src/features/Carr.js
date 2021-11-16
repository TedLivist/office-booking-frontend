import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

function Carr() {
  
    return (
      <div>

  <Carousel className = 'Car' indicators = {false} >
  <Carousel.Item>
  <div className = 'car-content'>
    <div className='car-item'>
      One
    </div>

    <div className='car-item'>
      Two
    </div>

    <div className='car-item'>
      Three
    </div>

    </div>
  
  </Carousel.Item>
  <Carousel.Item>
    <div className = 'car-content'>
    <div className='car-item'>
      four
    </div>

    <div className='car-item'>
      five
    </div>

    <div className='car-item'>
      six
    </div>

    </div>
  

  
  </Carousel.Item>
  <Carousel.Item>
  
  <div className = 'car-content'>
    <div className='car-item'>
      seven
    </div>

    <div className='car-item'>
      eight
    </div>

    <div className='car-item'>
      nine
    </div>

    </div>
    
  </Carousel.Item>
</Carousel>
  
      </div>
    );
  }
  
  export default Carr;