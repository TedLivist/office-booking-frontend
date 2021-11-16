import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllItems } from '../redux/items/items';

const Stores = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);

  useEffect(() => {
    if (!items.length) {
      dispatch(getAllItems());
    }
  }, []);

  return <div>Stores</div>;

  // return (
  //   <div>
  //     <ul className="list">
  //       {!reservations.length ? (
  //         <li>NO RESERVATIONS YET</li>
  //       ) : (
  //         reservations.map(({ id, userId, itemId }) => (
  //           <li key={id}>
  //             userId: {userId} itemId: {itemId}
  //           </li>
  //         ))
  //       )}
  //     </ul>
  //   </div>
  // );
};

export default Stores;
