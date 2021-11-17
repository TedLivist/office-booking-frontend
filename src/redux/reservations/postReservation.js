/* eslint-disable max-len */
export default async (username, data) => {
  const request = await fetch(`http://localhost:3001/api/v1/${username}/reservations`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  });
  const response = await request.json();
  return response;
};
