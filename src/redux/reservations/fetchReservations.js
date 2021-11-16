export default async (username) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const response = await fetch(
    `http://localhost:3000/api/v1/${username}/reservations`,
    requestOptions,
  );
  const result = await response.json();
  const { reservations } = result;
  return reservations;
};
