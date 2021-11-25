import React from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import Item from './Item';
import '../css/carr.css';

function Carr() {
  const items = useSelector((state) => state.items.items);
  const numberSlides = items.length > 3 ? Math.ceil(items.length / 3) : 1;
  const slides = [];
  let j = 0;
  let i = 0;
  while (i < numberSlides - 1) {
    slides[i] = (
      <Carousel.Item key={i}>
        <div className="car-content">
          {items.slice(j, j + 3).map((item) => (
            <div className="car-item" key={item.id}>
              <Item item={item} />
            </div>
          ))}
        </div>
      </Carousel.Item>
    );
    j += 3;
    i += 1;
  }

  if (items.length - j !== 0) {
    slides[numberSlides] = (
      <Carousel.Item key={numberSlides + 1}>
        <div className="car-content">
          {items.slice(j, items.length + 1).map((item) => (
            <div className="car-item" key={item.id}>
              <Item item={item} />
            </div>
          ))}
        </div>
      </Carousel.Item>
    );
  }

  return (
    <div>
      <Carousel className="Car" indicators={false}>
        {slides}
      </Carousel>

      <div className="Car-min">
        <div className="car-content">
          {items.map((item) => (
            <div key={item.id} className="car-item">
              <Item item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carr;
