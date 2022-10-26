const BASE_URL = 'https://register.nomoreparties.co';

export function signUp(email, password) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password: password,
      email: email,
    }),
  });
}

export function signIn(email, password) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password: password,
      email: email,
    }),
  })
    .then((res) =>
      res.ok ? res.json() : Promise.reject(`Error ${res.status}`)
    )
    .then((res) => {
      if (res.token) {
        localStorage.setItem('jwt', res.token);
        return res;
      } else {
        return;
      }
    });
}

export function autoSignIn(jwt) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  }).then((res) =>
    res.ok ? res.json() : Promise.reject(`Error ${res.status}`)
  );
}
