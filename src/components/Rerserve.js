/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { VscSearch } from 'react-icons/vsc';
import DateTimePicker from 'react-datetime-picker';
import postReservation from '../redux/reservations/postReservation';
import '../css/reserve.css';

const Reserve = ({
  item, user, details,
}) => {
  const [itm, setItem] = useState({});
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [validated, setValidated] = useState(false);
  const items = useSelector((state) => state.items.items);
  let options = [];

  if (!details) {
    options = items.map((item) => (<option key={item.id} value={items.indexOf(item)}>{item.name}</option>));
  }

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      if (details) {
        setItem(item);
        await postReservation(user.username, { item_id: item.id, start_date: start, end_date: end });
      } else {
        await postReservation(user.username, { item_id: itm.id, start_date: start, end_date: end });
      }
    }
    setValidated(true);
  };

  const handleSelect = (value) => {
    setItem(items[value]);
  };

  return (
    <section
      style={{
        backgroundImage: `linear-gradient(#96bf0298, #96bf0298),url(${details ? item.image : itm.image})`,
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
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="w-lg-60 d-flex flex-column justify-content-around">
          <div className="d-flex flex-column flex-lg-row justify-content-around">
            {details ? (
              <>
                <Form.Group className="mb-3 w-lg-25" controlId="formBasicEmail">
                  <Form.Control className="reserve-input" type="text" value={item.name} readOnly />
                </Form.Group>
              </>
            ) : (
              <>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                  <Form.Control as="select" className="reserve-input px-lg-5" onChange={(e) => handleSelect(e.target.value)} required>
                    <option value="" disabled selected>Select office</option>
                    {options}
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Please select an office.
                  </Form.Control.Feedback>
                </Form.Group>
              </>
            )}
            <Form.Group className="mb-3 w-lg-25" controlId="formBasicPassword">
              <Form.Control className="reserve-input" type="text" value={details ? item.location : itm.location} readOnly required />
            </Form.Group>
            <Form.Group className="mb-3 w-lg-25" controlId="formBasicPassword">
              <Form.Control className="reserve-input" type="text" value={user.username} readOnly required />
            </Form.Group>
          </div>
          <div className="d-flex flex-column flex-lg-row justify-content-around">
            <Form.Group className="mb-3 w-lg-25" controlId="formBasicPassword">
              <Form.Label className="reserve-label">From:</Form.Label>
              <DateTimePicker className="reserve-input" onChange={setStart} minDate={start} maxDate={end} value={start} disableClock required />
            </Form.Group>
            <Form.Group className="mb-3 w-lg-25" controlId="formBasicPassword">
              <Form.Label className="reserve-label">To:</Form.Label>
              <DateTimePicker className="reserve-input" onChange={setEnd} value={end} minDate={start} disableClock required />
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
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
  }),
  user: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
  }),
  details: PropTypes.bool,
};

Reserve.defaultProps = {
  item: {
    id: 26,
    name: 'office1',
    image: 'https://raw.githubusercontent.com/microverseinc/curriculum-final-capstone/main/projects/images/list.png?token=AKNMSTZGJXXSWHX2Y33UV2DBTD27C',
    location: 'Rabat',
    description: 'Nice looking office. Nice looking office. Nice looking office. Nice looking office. ',
  },
  user: {
    id: '0',
    username: 'Lameck',
  },
  details: false,
};

export default Reserve;
