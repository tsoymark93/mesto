import Card from './Card.js'
import FormValidator from './FormValidator.js';
import {initialCards, selectors} from './constants.js';
// Объявление констант
// Константы связанные с Popup Edit
const popupEdit = document.querySelector('.popup_type_edit');
const popupEditOpen = document.querySelector('.profile__edit-btn');
const popupEditClose = popupEdit.querySelector('.popup__close-btn');
const popupEditForm = popupEdit.querySelector('.popup__edit-form');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const inputEditName = popupEdit.querySelector('#profile-name');
const inputEditProfession = popupEdit.querySelector('#profile-profession');
// Константы связанные с Popup Add
const popupAdd = document.querySelector('.popup_type_add');
const popupAddOpen = document.querySelector('.profile__add-btn');
const popupAddClose = popupAdd.querySelector('.popup__close-btn');
const popupAddForm = popupAdd.querySelector('.popup__add-form');
const inputAddNameError = popupAdd.querySelector('.gallery-name-error')
const inputAddLinkError = popupAdd.querySelector('.gallery-link-error') 
// Константы связанные с Gallery массивом
const inputAddName = popupAdd.querySelector('#gallery-name');
const inputAddLink = popupAdd.querySelector('#gallery-link');
const gallerySection = document.querySelector('.gallery');

// Константы связанные с Popup FullScreen
const popupFs = document.querySelector('.popup_type_img');
const popupFsClose = popupFs.querySelector('.popup__close-btn');

      // Объявление функций 
// Функция открытия Попапов
const openPopup = (popup) => {
  popup.classList.add('popup_opened')
  document.addEventListener('keydown', closeByEsc);
  document.addEventListener('mousedown', closeByOverlayClick);
};
// Функция закрытия попапов 
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
  document.removeEventListener('mousedown', closeByOverlayClick);
};
//Функция закрытия по оверлей
const closeByOverlayClick = (event) => {
  const popup = event.target.closest('.popup_opened');
  if (event.target == popup) {
    closePopup(popup)};
  }
//Функция закрытия по ESC
const closeByEsc =  (evt) => {
  const popup = document.querySelector('.popup_opened')
  if (evt.key == 'Escape') {
    closePopup(popup)
  }
};

//Функции связанные с попапом редактирования
const clickPopupEditOpen = () => {
  inputEditName.value  =  profileName.textContent;
  inputEditProfession.value  =  profileProfession.textContent;
  openPopup(popupEdit)
  inputEditName.dispatchEvent(new Event('input'));
  inputEditProfession.dispatchEvent(new Event('input'));
};
const clickPopupEditClose = () => {
  closePopup(popupEdit);
};
const editSubmit = (evt) => {
  evt.preventDefault();                                              
  profileName.textContent = inputEditName.value;
  profileProfession.textContent = inputEditProfession.value;
  closePopup(popupEdit);
  };

//Функции связанные с попапом добавления
const resetAddCard = () => {
  popupAddForm.reset();
  inputAddLink.dispatchEvent(new Event('input'));
  inputAddName.dispatchEvent(new Event('input'));
  inputAddName.classList.remove('popup__input_type_error');
  inputAddLink.classList.remove('popup__input_type_error');
  inputAddNameError.textContent = '';
  inputAddLinkError.textContent = '';
}
const clickPopupAddOpen = () => {
  openPopup(popupAdd);
  resetAddCard();
};
const clickPopupAddClose = () => {
  closePopup(popupAdd);
}
const addSubmit = (evt) => {
  evt.preventDefault();
  const card = {};
  renderCard(gallerySection, card, '#gallery-template');
  popupAddForm.reset();
  closePopup(popupAdd);
}

//Функции связанные с массивом
const renderCard = (gallerySection, data, cardSelector) => {
  const card = new Card(data, cardSelector);
  const galleryElement = card.generateCard();
  gallerySection.prepend(galleryElement);
};

//Валидация 
const enableValidationForms = () => {
  const forms = Array.from(document.forms);
  forms.forEach(form => {
    const formValidator = new FormValidator(selectors, form);
    formValidator.enableValidation();
  });
};

      //Слушатели нажатия на клик
//Слушатели попапа редактирования
popupEditOpen.addEventListener('click', clickPopupEditOpen);
popupEditClose.addEventListener('click', clickPopupEditClose);
popupEditForm.addEventListener('submit', editSubmit);
//Слушатели попапа добавления
popupAddOpen.addEventListener('click', clickPopupAddOpen);
popupAddClose.addEventListener('click', clickPopupAddClose);
popupAddForm.addEventListener('submit', addSubmit);
//Слушатели блока массива 
popupFsClose.addEventListener('click', () => closePopup(popupFs));

      //Добавить массив
initialCards.forEach((item) => {
  renderCard(gallerySection, item, '#gallery-template')
})

enableValidationForms();

export { openPopup };