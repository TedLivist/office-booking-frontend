import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { getReservations } from '../redux/reservations/reservations';
import '../css/reservations.css';

function Reservations() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.users.username);
  const reservations = useSelector((state) => state.reservations.reservations);

  useEffect(() => {
    dispatch(getReservations(username));
  }, [username, dispatch]);

  return (
    <div className="reservation w-100 container mt-5 pt-5 mt-lg-2">
      <h1 className="res-header font">My Reservations</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {reservations
            && reservations.map((reservation) => (
              <tr key={reservation.id}>
                <td>{reservation.id}</td>
                <td>
                  {' '}
                  {reservation.item.name}
                </td>
                <td>{reservation.startDate}</td>
                <td>{reservation.endDate}</td>
                <td>{reservation.item.location}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Reservations;
