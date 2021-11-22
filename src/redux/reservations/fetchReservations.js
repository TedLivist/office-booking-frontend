import { authHeader } from '../users/usersAPI';

const fetchReservations = async (username) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: authHeader(),
  };
  const response = await fetch(
    `http://localhost:3000/api/v1/${username}/reservations`,
    requestOptions,
  );
  const result = await response.json();
  const { reservations } = result;
  return reservations;
};

export default fetchReservations;
