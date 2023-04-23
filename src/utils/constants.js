/* initialCards - массив объектов с информацией для добавления первых 6 карточек на странице  */
/* export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; */

/* константы для валидации форм */
export const configValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__form-input_type_error',
  errorClass: 'popup__form-input-error_active' 
}

/* ВЫБОРКА DOM-ЭЛЕМЕНТОВ */
export const cardTemplate = '#card-template';
export const cardListSelector = '.cards';
/* элементы открытия попапов */
export const profileEditButton = document.querySelector('.profile__button-edit');
export const cardAddButton = document.querySelector('.profile__button-add');
export const profileAvatarButton = document.querySelector('.profile__button-avatar');
/* элементы форм */
export const profileEditForm = document.forms["edit-profile-form"];
export const inputName = profileEditForm.elements.name;
export const inputCaption = profileEditForm.elements.about;
export const profileAvatarForm = document.forms["avatar-form"];
export const cardAddForm = document.forms["add-card-form"];