import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getItemById } from '../../redux/items/items';
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
            <ul className="list">
              <li className="info">
                <span>Type:&nbsp;&nbsp;</span>
                <span>{item.name}</span>
              </li>
              <li className="info">
                <span>Location:&nbsp;&nbsp;</span>
                <span>{item.location}</span>
              </li>
              <li className="info">
                <span>{item.description}</span>
              </li>
            </ul>
            <div className="links">
              <Link to="/" id="more">
                DISCOVER MORE OFFICES
              </Link>
              <br />
              <Link to={`/username/reservation/item/${id}`} id="reserve">
                <button className="reserve-btn" type="button">
                  Reserve
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Details;
