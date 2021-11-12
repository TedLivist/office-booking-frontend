import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const Item = ({ item }) => {
  const page = `/details/${item.id}`;
  return (
    <a className="w-50 text-decoration-none link-dark text-center text-dark" href={page}>
      <Card className="w-50">
        <img src={item.img} className="card-img-top" alt="..." />
        <div className="d-flex justify-content-between align-items-center px-3 pt-2">
          <Card.Title>{item.name}</Card.Title>
        </div>
        <Card.Body>
          <Card.Text>
            {item.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    img: PropTypes.string,
    description: PropTypes.string,
    services: PropTypes.string,
  }),
};

Item.defaultProps = {
  item: {
    id: 'name',
    name: 'Lola',
    img: 'https://user-images.githubusercontent.com/43698511/141481667-1e961fd1-d3ca-43a5-86ba-8b3d48be7c11.png',
    description: 'Test ',
    services: '',
  },
};

export default Item;
