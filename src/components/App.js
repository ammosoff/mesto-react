/* import logo from './logo.svg'; */
/* import './App.css'; */
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  //переменные состояния, отвечающие за видимость попапов. Начальное состояние - false
  //т.е они не видны
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});

  //обработчики видимости попапов
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card)
  }

  // закрытие попапов
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({name: '', link: ''})
  };

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      {/* попап редактирования профиля */}
      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <input
          id="name-input"
          className="popup__form-input"
          type="text"
          name="name"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__form-input-error name-input-error"></span>
        <input
          id="caption-input"
          className="popup__form-input"
          type="text"
          name="about"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__form-input-error caption-input-error"></span>
      </PopupWithForm>

      {/* Попап добавления новой карточки */}
      <PopupWithForm
        name="add-card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText="Создать"
      >
        <input
          id="title-input"
          className="popup__form-input"
          type="text"
          name="name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="popup__form-input-error title-input-error"></span>
        <input
          id="link-input"
          className="popup__form-input"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__form-input-error link-input-error"></span>
      </PopupWithForm>

      {/* попап обновления аватара */}
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <input
          id="avatar-input"
          className="popup__form-input"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__form-input-error avatar-input-error"></span>
      </PopupWithForm>

      {/* попап подтверждения удаления */}
      <PopupWithForm name="confirmation" title="Вы уверены?" buttonText="Да"></PopupWithForm>

      {/* попап открытия картинки с описанием */}
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>
  );
}

export default App;
