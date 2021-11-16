/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { VscSearch } from 'react-icons/vsc';
import DateTimePicker from 'react-datetime-picker';
import '../css/reserve.css';

const Reserve = ({
  item, items, user, details,
}) => {
  const [itm, setItem] = useState({});
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const options = items.map((item) => (<option key={item.id} value={items.indexOf(item)}>{item.name}</option>));

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (details) {
      setItem(item);
    }
  };

  const handleSelect = (value) => {
    setItem(items[value]);
  };

  return (
    <section
      style={{
        backgroundImage: `linear-gradient(#96bf0298, #96bf0298),url(${itm.img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="bg-reserve d-flex flex-column"
    >
      <span className="search-icon">
        <VscSearch />
      </span>
      <div className="div-reserve d-flex flex-column align-items-center">
        <h1 className="reserve-title">
          Book this office
        </h1>
        <p className="reserve-description">{item.description}</p>
        <Form onSubmit={handleSubmit} className="w-lg-60 d-flex flex-column justify-content-around">
          <div className="d-flex flex-column flex-lg-row justify-content-around">
            {details ? (
              <>
                <Form.Group className="mb-3 w-lg-25" controlId="formBasicEmail">
                  <Form.Control className="reserve-input" type="text" value={item.name} />
                </Form.Group>
                <Form.Group className="mb-3 w-lg-25" controlId="formBasicPassword">
                  <Form.Control className="reserve-input" type="text" value={item.location} />
                </Form.Group>
              </>
            ) : (
              <>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                  <Form.Control as="select" className="reserve-input px-lg-5" onChange={(e) => handleSelect(e.target.value)}>
                    <option value="0">Select office</option>
                    {options}
                  </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3 w-lg-25" controlId="formBasicPassword">
                  <Form.Control className="reserve-input" type="text" value={itm.location} />
                </Form.Group>
              </>
            )}
            <Form.Group className="mb-3 w-lg-25" controlId="formBasicPassword">
              <Form.Control className="reserve-input" type="text" value={user.username} />
            </Form.Group>
          </div>
          <div className="d-flex flex-column flex-lg-row justify-content-around">
            <Form.Group className="mb-3 w-lg-25" controlId="formBasicPassword">
              <DateTimePicker className="reserve-input" onChange={setStart} value={start} />
            </Form.Group>
            <Form.Group className="mb-3 w-lg-25" controlId="formBasicPassword">
              <DateTimePicker className="reserve-input" onChange={setEnd} value={end} />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <Button className="w-lg-25 mb-3 reserve-button align-self-center" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
};

Reserve.propTypes = {
  items: PropTypes.arrayOf({
    id: PropTypes.number,
    name: PropTypes.string,
    img: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
  }),
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    img: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
  }),
  user: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
  }),
  details: PropTypes.bool.isRequired,
};

Reserve.defaultProps = {
  items: [{
    id: 1,
    name: 'office1',
    img: 'https://raw.githubusercontent.com/microverseinc/curriculum-final-capstone/main/projects/images/list.png?token=AKNMSTZGJXXSWHX2Y33UV2DBTD27C',
    location: 'Rabat',
    description: 'Nice looking office. Nice looking office. Nice looking office. Nice looking office. ',
  },
  {
    id: 2,
    name: 'office2',
    img: 'https://raw.githubusercontent.com/microverseinc/curriculum-final-capstone/main/projects/images/details.png?token=AKNMSTYILDDE5PZBY4KCICDBTJTNE',
    location: 'casablanca',
    description: 'Nice looking office. Nice looking office. Nice looking office. Nice looking office. ',
  }],
  item: {
    id: 1,
    name: 'office1',
    img: 'https://raw.githubusercontent.com/microverseinc/curriculum-final-capstone/main/projects/images/list.png?token=AKNMSTZGJXXSWHX2Y33UV2DBTD27C',
    location: 'Rabat',
    description: 'Nice looking office. Nice looking office. Nice looking office. Nice looking office. ',
  },
  user: {
    id: '0',
    username: 'username',
  },
};

export default Reserve;
