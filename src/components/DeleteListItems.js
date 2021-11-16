import React, { useEffect, useState } from 'react';
import { fetchItems } from '../helpers/fetchItems';
import DeleteListItem from './DeleteListItem';

const DeleteListItems = () => {

  const [state, setState] = useState([])

  useEffect(async () => {
    const data = await fetchItems()
    console.log(data)
    setState(data)
  }, [])

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            <th scope="col">Description</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {state.map((item) => (
            <tr key={item.id}>
              <DeleteListItem
                id={item.id}
                name={item.name}
                description={item.description}
                location={item.location} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
 
export default DeleteListItems;