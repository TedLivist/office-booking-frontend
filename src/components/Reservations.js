import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { getReservations } from '../redux/reservations/reservations';

function Reservations() {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.reservations);

  useEffect(() => {
    dispatch(getReservations('Peter'));
  }, [dispatch]);

  // const reservations = [
  //     {
  //       name: 'Acacia F5r8',
  //       sdate: '11/13/21',
  //       edate: '11/13/21',
  //       city: 'Nairobi'
  //     },
  //     {
  //       name: 'Beacon F5r8',
  //       sdate: '11/13/21',
  //       edate: '11/13/21',
  //       city: 'Mombasa'
  //     },
  //     {
  //       name: 'Comine F5r8',
  //       sdate: '11/13/21',
  //       edate: '11/13/21',
  //       city: 'Nairobi'
  //     }

  //   ]

  return (
    <div className="reservation">
      <h1 className="res-header">My Reservations</h1>

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
          {reservations.map((reservation) => (
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
