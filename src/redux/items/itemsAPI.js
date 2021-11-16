export const fetchAllItems = async () => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const response = await fetch(
    'http://localhost:3001/api/v1/items',
    requestOptions,
  );
  const items = await response.json();
  return items;
};

export const fetchItemById = async (id) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const response = await fetch(
    `http://localhost:3001/api/v1/items/${id}`,
    requestOptions,
  );
  const item = await response.json();
  return item;
};
