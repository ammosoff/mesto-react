/* import logo from './logo.svg'; */
/* import './App.css'; */
import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  //переменные состояния, отвечающие за видимость попапов. Начальное состояние - false
  //т.е они не видны
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: "", link: "" });

  // стейт текушего пользователя
  const [currentUser, setCurrentUser] = useState({});

  // стейт карточки
  const [cards, setCards] = useState([]);

  // делаем запрос к серверу и обновляем стейт-переменную из полученного значения
  React.useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => console.log(err));
  }, []);

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
    setSelectedCard(card);
  };

  // закрытие попапов
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({ name: "", link: "" });
  };

  // функция добавления/снятия лайка
  const handleCardLike = (card) => {
    // Проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.log(err));
  };

  // функция удаления карточки
  const handleCardDelete = (card) => {
    api
      .setDeleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.log(err));
  };

  // функция обновления данных о пользователе
  const handleUpdateUser = ({name, about}) => {
    api.setUserInfo(name, about)
    .then(res => {
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch((err) => console.log(err))
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          cards={cards}
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />

        {/* попап редактирования профиля */}
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>

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
        <PopupWithForm
          name="confirmation"
          title="Вы уверены?"
          buttonText="Да"
        ></PopupWithForm>

        {/* попап открытия картинки с описанием */}
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
