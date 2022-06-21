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
const popupImage = document.querySelector('.popup__image');
const popupDescription = document.querySelector('.popup__description');
// Константы связанные с Gallery массивом
const inputAddName = popupAdd.querySelector('#gallery-name');
const inputAddLink = popupAdd.querySelector('#gallery-link');
const gallerySection = document.querySelector('.gallery');

// Константы связанные с Popup FullScreen
const popupFs = document.querySelector('.popup_type_img');
const popupFsClose = popupFs.querySelector('.popup__close-btn');

// Валидация
const formValidators = {};

Array.from(document.forms).forEach((form) => {
  formValidators[form.name] = new FormValidator(selectors, form);
  formValidators[form.name].enableValidation();
});

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
  if (evt.key == 'Escape') {
    const popup = document.querySelector('.popup_opened')
    closePopup(popup)
  }
};

//Функции связанные с попапом редактирования
const clickPopupEditOpen = () => {
  inputEditName.value  =  profileName.textContent;
  inputEditProfession.value  =  profileProfession.textContent;
  formValidators[popupEditForm.name].cleanForm();
  openPopup(popupEdit)
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

const clickPopupAddOpen = () => {
  popupAddForm.reset();
  openPopup(popupAdd);
  formValidators[popupAddForm.name].cleanForm();
};

const clickPopupAddClose = () => {
  closePopup(popupAdd);
}

//Функции связанные с массивом
const createCard = (name, link, cardSelector, listener) => {
  const card = new Card(name, link, cardSelector, listener);
  const galleryElement = card.generateCard();
  return galleryElement
};

const renderCard = (cards, card, prepend) => {
  if (prepend) {
    cards.prepend(card);
  } else {
    cards.append(card);
  }
}

const initialFs = (name, link) => {
  popupImage.src = link;
  popupImage.alt = name;
  popupDescription.textContent = name;
}

const openPopupFs = (name, link) => {
  initialFs(name, link)
  openPopup(popupFs);
};

const imageClick = (evt) => {
  const {alt, src} = evt.target;
  openPopupFs(alt, src);
};

//Добавить массив
initialCards.forEach((item) => {
  const cardElement = createCard(
    item.name,
    item.link,
    "#gallery-template",
    imageClick
  );
  renderCard(gallerySection, cardElement, false);
})

const addSubmit = (evt) => {
  evt.preventDefault();
  const src = inputAddName.value
  const alt = inputAddLink.value
  const cardElement = createCard(alt, src, '#gallery-template', imageClick)
  renderCard(gallerySection, cardElement, true);
  popupAddForm.reset();
  closePopup(popupAdd);
}

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

export { openPopup, popupImage, popupDescription, popupFs };