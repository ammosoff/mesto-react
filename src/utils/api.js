/* Все запросы к серверу являются методами класса Api */

class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  // проверка ответа от сервера на корректность(используется в остальных методах)
  _getRequestState(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`)  // если ошибка, отклоняем промис
  }

  _request(url, options) {
    return fetch(`${this._baseUrl}${url}`, options).then(this._getRequestState)
  }

  // загрузка информации о пользователе
  getUserInfo() {
    return this._request('/users/me', {
      headers: this._headers
    })
  }

  // загрузка карточек
  getInitialCards() {
    return this._request('/cards', {
      headers: this._headers
    })
  }

  // отправляем на сервер данные о профиле
  setUserInfo(dataProfile) {
    return this._request('/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: dataProfile.name,
        about: dataProfile.about
      })
    })
  }

  // Отправляем на сервер данные новой карточки
  setAdditionCard(dataCard) {
    return this._request('/cards', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: dataCard.name,
        link: dataCard.link
      })
    })
  }

  // Удаляем на сервере данные о карточке 
  setDeleteCard(id) {
    return this._request(`/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
  }

  // добавляем лайк
  setLikeAdd(id) {
    return this._request(`/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
  }

  // удаляем лайк 
  setLikeRemove(id) {
    return this._request(`/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
  }

  // обновление аватара
  setUpdateAvatar(avatarLink) {
    return this._request('/users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarLink,
      })
    })
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-61',
  headers: {
    authorization: '1a85e6a0-72c8-4e52-95ee-9c6b9a58d7e0',
    'Content-Type': 'application/json'
  }
});

export default api;