import React, { useState } from "react";
import api from "../utils/api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({ cards, onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardLike }) {
  // подписываемся на контекст CurrentUserContext
  const currentUser = React.useContext(CurrentUserContext);

/*   const [cards, setCards] = useState([]); 

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }, []);
 */
  return (
    <main className="content">
      {/* профиль */}
      <section className="profile content__profile">
        <div className="profile__info">
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="Аватар"
          />
          <button
            onClick={onEditAvatar}
            className="profile__button-avatar"
            type="button"
            aria-label="Редактировать аватар"
          ></button>
          <div className="profile__inner">
            <h1 className="profile__name">{currentUser.name}</h1>
            <p className="profile__caption">{currentUser.about}</p>
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

      <section aria-label="Список мест в которых стоит побывать">
        <ul className="cards">
          {/* контейнер для карточек */}
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={onCardLike} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
