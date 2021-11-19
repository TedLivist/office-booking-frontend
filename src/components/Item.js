import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { TiSocialTwitterCircular, TiSocialInstagramCircular, TiSocialFacebookCircular } from 'react-icons/ti';
import '../css/item.css';

const Item = ({ item }) => {
  const page = `/items/${item.id}`;
  return (
    <a className="w-50 text-decoration-none link-dark text-center text-dark" href={page}>
      <Card className="item-card border-0">
        <img src={item.image} className="card-img-top item-img" alt="..." />
        <div className="d-flex justify-content-between align-items-center px-3 pt-2">
          <Card.Title className="item-name">{item.name}</Card.Title>
        </div>
        <Card.Body>
          <Card.Text className="item-description">
            {item.description}
          </Card.Text>
          <ul className="item-icons d-flex">
            <li><TiSocialFacebookCircular /></li>
            <li><TiSocialTwitterCircular /></li>
            <li><TiSocialInstagramCircular /></li>
          </ul>
        </Card.Body>
      </Card>
    </a>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  }),
};

Item.defaultProps = {
  item: {
    id: 'office1',
    name: 'office1',
    image: 'https://source.unsplash.com/rRiAzFkJPMo',
    description: 'Nice looking office. Nice looking office. Nice looking office. Nice looking office. ',
  },
};

export default Item;
