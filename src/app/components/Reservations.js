import React from 'react';
import Table from 'react-bootstrap/Table';

function Reservations() {

const reservations = [
    {
      name: 'Acacia F5r8',
      sdate: '11/13/21',
      edate: '11/13/21',
      city: 'Nairobi'
    },
    {
      name: 'Beacon F5r8',
      sdate: '11/13/21',
      edate: '11/13/21',
      city: 'Nairobi'
    },
    {
      name: 'Comine F5r8',
      sdate: '11/13/21',
      edate: '11/13/21',
      city: 'Nairobi'
    }

  ]
  
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
    <tr>
      <td>1</td>
      <td> {reservation.name}</td>
      <td>{reservation.sdate}</td>
      <td>{reservation.edate}</td>
      <td>{reservation.city}</td>
    </tr>

     ))}
  </tbody>

</Table>



  
      </div>
    );
  }
  
  export default Reservations;