import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import '../css/reserve.css';

const Reserve = ({ item, user }) => (
  <section
    style={{
      backgroundImage: `linear-gradient(#96bf0298, #96bf0298),url(${item.img})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}
    className="bg-reserve d-flex flex-column align-items-center"
  >
    <h1 className="reserve-title">
      {user.username}
      Book this office
    </h1>
    <p className="reserve-description">{item.description}</p>
    <Form className="w-50 d-flex justify-content-around">
      <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
        <Form.Control className="reserve-input" type="text" value={item.name} />
      </Form.Group>
      <Form.Group className="mb-3 w-25" controlId="formBasicPassword">
        <Form.Control className="reserve-input" type="text" value={item.location} />
      </Form.Group>
      <Form.Group className="mb-3 w-25" controlId="formBasicPassword">
        <Form.Control className="reserve-input" type="text" value={user.username} />
      </Form.Group>
      <Button className="mb-3 reserve-button" type="submit">
        Submit
      </Button>
    </Form>
  </section>
);

Reserve.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    img: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
  }),
  user: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
  }),
};

Reserve.defaultProps = {
  item: {
    id: 'office1',
    name: 'office1',
    img: '',
    location: 'Rabat',
    description: 'Nice looking office. Nice looking office. Nice looking office. Nice looking office. ',
  },
  user: {
    id: '0',
    username: 'username',
  },
};

export default Reserve;
