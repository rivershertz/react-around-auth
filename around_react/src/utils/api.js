class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _reaquringRequest(url, headers) {
    fetch(url, headers).then((res) =>
      res.ok ? res.json() : Promise.reject(res.statusText)
    );
  }

  getInitialCards() {
    return this._reaquringRequest(`${this._baseUrl}/cards`, {
      headers: this._headers,
    });
  }

  getUserInfo() {
    return this._reaquringRequest(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    });
  }

  setUserInfo(name, about) {
    return this._reaquringRequest(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    });
  }

  setUserAvatar(link) {
    return this._reaquringRequest(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: link,
      }),
    });
  }

  createCard({ imageName, link }) {
    return this._reaquringRequest(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: imageName,
        link: link,
      }),
    });
  }

  getLikes(cardId) {
    return this._reaquringRequest(`${this._baseUrl}/cards/${cardId}`, {
      headers: this._headers,
    });
  }

  deleteCard(cardId) {
    return this._reaquringRequest(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  addLike(cardId) {
    return this._reaquringRequest(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._headers,
    });
  }

  removeLike(cardId) {
    return this._reaquringRequest(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }
}

export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
  headers: {
    authorization: "47fa02be-b6a6-415a-ad1a-fb244489b961",
    "Content-Type": "application/json",
  },
});
