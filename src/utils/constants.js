export const initialCards = [
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
  ];

  export const selectors = {
    formSelector: 'popup__container',
    inputSelector: 'popup__input',
    submitButtonSelector: 'popup__save-btn',
    inactiveButtonClass: 'popup__save-btn_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_visible',
  }

  // Константы связанные с Popup Edit
  export const popupEdit = '.popup_type_edit';
  export const popupEditOpen = document.querySelector('.profile__edit-btn');
  export const profileName = '.profile__name';
  export const profileProfession = '.profile__profession';
  export const inputEditName = document.querySelector('.popup__input_name');
  export const inputEditProfession = document.querySelector('.popup__input_profession');
  // Константы связанные с Popup Add
  export const popupAdd = '.popup_type_add';
  export const popupAddOpen = document.querySelector('.profile__add-btn');
  export const popupAddForm = document.querySelector('.popup__add-form');
  // Константы связанные с Gallery массивом
  export const gallerySection = '.gallery';
  export const galleryTemplate = '.gallery-template'
  
  // Константы связанные с Popup FullScreen
  export const popupFs = '.popup_type_img';
  export const popupFsClose = document.querySelector('.popup__close-btn');
  
  // Валидация
  export const formValidators = {};  
