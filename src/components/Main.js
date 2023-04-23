import React from "react";
import api from "../utils/api";

function Main({onEditAvatar, onEditProfile, onAddPlace}) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cards]) => {
        console.log(cards)
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar)
        setCards(cards);
      })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
  }, [])

  return (
    <main className="content">
      {/* профиль */}
      <section className="profile content__profile">
        <div className="profile__info">
          <img className="profile__avatar" src={userAvatar} alt="Аватар" />
          <button
            onClick={onEditAvatar}
            className="profile__button-avatar"
            type="button"
            aria-label="Редактировать аватар"
          ></button>
          <div className="profile__inner">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__caption">{userDescription}</p>
            <button
              onClick={onEditProfile}
              className="profile__button-edit"
              type="button"
              aria-label="Редактировать профиль"
            ></button>
          </div>
        </div>
        <button
          onClick={onAddPlace}
          className="profile__button-add"
          type="button"
          aria-label="Добавить"
        ></button>
      </section>

      {/* секция с карточками */}
      <section aria-label="Список мест в которых стоит побывать">
        <ul className="cards">
          {/* <!-- контейнер для добавления карточек --> */}
          {cards.map((card) => (
            <li className="card" key={card._id}>
              <img className="card__img" src={card.link} alt={card.name}></img>
              <button className="card__button-delete" type="button" aria-label="Удалить"></button>
              <div className="card__inner">
                <h2 className="card__caption">{card.name}</h2>
                <div className="card__like">
                  <button className="card__button-like" type="button" aria-label="Лайк"></button>
                  <p className="card__amount-like"></p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
