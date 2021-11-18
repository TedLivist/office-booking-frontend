/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { VscSearch } from 'react-icons/vsc';
import { useParams } from 'react-router-dom';
import DateTimePicker from 'react-datetime-picker';
import postReservation from '../redux/reservations/postReservation';
import { getItemById } from '../redux/items/items';
import Thanks from './Thanks';
import Error from './Error';
import '../css/reserve.css';

const Reserve = ({ details }) => {
  const dispatch = useDispatch();
  const [itm, setItem] = useState({});
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [validated, setValidated] = useState(false);
  const items = useSelector((state) => state.items.items);
  const item = useSelector((state) => state.items.item);
  const { username, id } = useParams();
  let options = [];
  const [show, setShow] = useState(false);
  const [showE, setShowE] = useState(false);
  const handleClose = () => setShow(false);
  const handleCloseE = () => setShowE(false);
  useEffect(() => {
    dispatch(getItemById(id));
  }, [dispatch, id]);

  if (!details) {
    options = items.map((item) => (<option key={item.id} value={items.indexOf(item)}>{item.name}</option>));
  }

  const resetForm = () => {
    setItem({});
    setStart(new Date());
    setEnd(new Date());
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    let data = {};
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setShowE(true);
    } else {
      event.preventDefault();
      if (details) {
        setItem(item);
        data = { item_id: item.id, start_date: start, end_date: end };
      } else {
        data = { item_id: itm.id, start_date: start, end_date: end };
      }
      await postReservation(username, data);
      setShow(true);
    }
    setValidated(true);
    resetForm();
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
              <Form.Control className="reserve-input" type="text" value={username} readOnly required />
            </Form.Group>
          </div>
          <div className="d-flex flex-column flex-lg-row justify-content-around">
            <Form.Group className="mb-3 w-lg-25" controlId="formBasicPassword">
              <Form.Label className="reserve-label pe-2">From:</Form.Label>
              <DateTimePicker className="reserve-input" onChange={setStart} minDate={start} maxDate={end} value={start} disableClock required />
            </Form.Group>
            <Form.Group className="mb-3 w-lg-25" controlId="formBasicPassword">
              <Form.Label className="reserve-label pe-3">To:</Form.Label>
              <DateTimePicker className="reserve-input" onChange={setEnd} value={end} minDate={start} disableClock required />
            </Form.Group>
          </div>
          <Button className="w-lg-25 mb-3 reserve-button align-self-center" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <Thanks show={show} handleClose={handleClose} />
      <Error show={showE} handleClose={handleCloseE} />
    </section>
  );
};

Reserve.propTypes = {
  details: PropTypes.bool,
};

Reserve.defaultProps = {
  details: false,
};

export default Reserve;
