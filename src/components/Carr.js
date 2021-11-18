import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Item from './Item';

function Carr() {
  return (
    <div>

      <Carousel className="Car" indicators={false}>
        <Carousel.Item>
          <div className="car-content">
            <div className="car-item">
              <Item />
            </div>

            <div className="car-item">
              <Item />
            </div>

            <div className="car-item">
              <Item />
            </div>

          </div>

        </Carousel.Item>
        <Carousel.Item>
          <div className="car-content">
            <div className="car-item">
              <Item />
            </div>

            <div className="car-item">
              <Item />
            </div>

            <div className="car-item">
              <Item />
            </div>

          </div>

        </Carousel.Item>
        <Carousel.Item>

          <div className="car-content">
            <div className="car-item">
              <Item />
            </div>

            <div className="car-item">
              <Item />
            </div>

            <div className="car-item">
              <Item />
            </div>

          </div>

        </Carousel.Item>
      </Carousel>

      <div className="Car-min">

        <div className="car-content">
          <div className="car-item">
            <Item />
          </div>

          <div className="car-item">
            <Item />
          </div>

          <div className="car-item">
            <Item />
          </div>

        </div>
      </div>

    </div>
  );
}

export default Carr;
