class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  setUserInfo(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(this._checkResponse);
  }

  setUserAvatar(url) {
    // Send the following PATCH request to change the profile picture:
    // PATCH https://around.nomoreparties.co/v1/groupId/users/me/avatar
    // In the request body, pass the JSON with a single property, avatar. This property should contain a link to the new profile picture. In the case that anything other than a link is sent, the server will return an error.
    // When the user hovers over their profile picture, the edit icon should appear on it:
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        avatar: url,
      }),
    }).then(this._checkResponse);
  }

  createCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      headers: this._headers,
      method: "DELETE",
    }).then(this._checkResponse);
  }

  //  _likeCard(cardId) {
  //   return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
  //     headers: this._headers,
  //     method: "PUT",
  //   }).then(this._checkResponse);
  // }

  // _dislikeCard(cardId) {
  //   return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
  //     headers: this._headers,
  //     method: "DELETE",
  //   }).then(this._checkResponse);
  // }

  changeLikeCardStatus(cardId, isLiked) {
    if (isLiked) {
      return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
        headers: this._headers,
        method: "DELETE",
      }).then(this._checkResponse);
    } else {
      return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
        headers: this._headers,
        method: "PUT",
      }).then(this._checkResponse);
    }
  }

 
}

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
  headers: {
    authorization: "47fa02be-b6a6-415a-ad1a-fb244489b961",
    "Content-Type": "application/json",
  },
});

export default api;