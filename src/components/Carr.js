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
  let i = 1;
  while (i < numberSlides) {
    slides[i] = <Carousel.Item key={i}><div className="car-content">{items.slice(j, j + 3).map((item) => (<div className="car-item" key={item.id}><Item item={item} /></div>))}</div></Carousel.Item>;
    j += 3;
    i += 1;
  }

  if (items.length - j !== 0) {
    slides[numberSlides + 1] = <Carousel.Item key={numberSlides + 1}><div className="car-content">{items.slice(j, items.length + 1).map((item) => (<div className="car-item" key={item.id}><Item item={item} /></div>))}</div></Carousel.Item>;
  }

  return (
    <div>

      <Carousel className="Car" indicators={false}>
        {slides}
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
