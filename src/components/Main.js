import React from "react";

function Main({onEditAvatar, onEditProfile, onAddPlace}) {

  return (
    <main className="content">
      {/* профиль */}
      <section className="profile content__profile">
        <div className="profile__info">
          <img className="profile__avatar" src="#" alt="Аватар" />
          <button
            onClick={onEditAvatar}
            className="profile__button-avatar"
            type="button"
            aria-label="Редактировать аватар"
          ></button>
          <div className="profile__inner">
            <h1 className="profile__name"></h1>
            <p className="profile__caption"></p>
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
        </ul>
      </section>
    </main>
  );
}

export default Main;
