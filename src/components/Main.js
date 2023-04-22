import React from "react";

function Main() {
  return (
    <main className="content">
      <section className="profile content__profile">
        <div className="profile__info">
          <img className="profile__avatar" src="#" alt="Аватар" />
          <button
            className="profile__button-avatar"
            type="button"
            aria-label="Редактировать аватар"
          ></button>
          <div className="profile__inner">
            <h1 className="profile__name"></h1>
            <p className="profile__caption"></p>
            <button
              className="profile__button-edit"
              type="button"
              aria-label="Редактировать профиль"
            ></button>
          </div>
        </div>
        <button
          className="profile__button-add"
          type="button"
          aria-label="Добавить"
        ></button>
      </section>
      <section aria-label="Список мест в которых стоит побывать">
        <ul className="cards">
          {/* <!-- контейнер для добавления карточек --> */}
        </ul>
      </section>
    </main>
  );
}

export default Main;
