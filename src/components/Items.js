import React, { useEffect, useState } from 'react';
import { fetchItems } from '../helpers/fetchItems';
import Item from './Item';

const Items = () => {

  const [state, setState] = useState([])

  useEffect(async () => {
    const data = await fetchItems()
    console.log(data)
    setState(data)
  }, [])

  return (
    <div>
      <p>Haha</p>
      <div>{state.map((item) => {
        return (
          <div key={item.id}>
            <Item
              id={item.id}
              name={item.name}
              description={item.description}
              location={item.location} />
          </div>
        )
      })}</div>
    </div>
  );
}
 
export default Items;