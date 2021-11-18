import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getItemById } from '../../redux/items/items';
// import Button from './Button';

import './Details.css';

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const item = useSelector((state) => state.items.item);

  useEffect(() => {
    dispatch(getItemById(id));
  }, []);

  return (
    <section className="details-section">
      {item && (
        <div className="details-container">
          <div className="details-image-container">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="details-info-container">
            <ul>
              <li>
                <span>Type:</span>
                <span>{item.name}</span>
              </li>
              <li>
                <span>Location:</span>
                <span>{item.location}</span>
              </li>
              <li>
                <span>{item.description}</span>
              </li>
            </ul>
            <Link to="/">DISCOVER MORE OFFICES</Link>
            {/* <Button name="RESERVE" clickHandler={() => setModalShow(true)} /> */}
          </div>
        </div>
      )}
    </section>
  );
};

export default Details;
