export const login = async (username) => {
  const request = await fetch('http://localhost:3000/api/v1/login', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({ username }),
  });
  const response = await request.json();
  if (response) {
    localStorage.setItem('user', JSON.stringify(response));
  }

  return response;
};

export const signUp = async (username) => {
  const request = await fetch('http://localhost:3000/api/v1/users', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({ username }),
  });
  const response = await request.json();
  if (response) {
    localStorage.setItem('user', JSON.stringify(response));
  }

  return response;
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
  }
  return {};
};
