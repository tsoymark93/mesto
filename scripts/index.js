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
// Константы связанные с Gallery массивом
const inputAddName = popupAdd.querySelector('#gallery-name');
const inputAddLink = popupAdd.querySelector('#gallery-link');
const galleryTemplate = document.querySelector('#gallery-template').content;
const gallerySection = document.querySelector('.gallery');

// Константы связанные с Popup FullScreen
const popupFs = document.querySelector('.popup_type_img');
const popupFsImage = popupFs.querySelector('.popup__image');
const popupFsDescription = popupFs.querySelector('.popup__description');
const popupFsClose = popupFs.querySelector('.popup__close-btn');


      // Объявление функций 
// Функция открытия Попапов
const openPopup = (popup) => {
  popup.classList.add('popup_opened')
  document.addEventListener('keydown', onPopupEscClose);
  document.addEventListener('mousedown', onPopupClickClose);
};
// Функция закрытия попапов 
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', onPopupEscClose);
  document.removeEventListener('mousedown', onPopupClickClose);
};
//Функция закрытия по оверлей
const onPopupClickClose = (event) => {
  const popup = event.target.closest('.popup_opened');
  if (event.target == popup) {
    closePopup(popup)};
  }
//Функция закрытия по ESC
const onPopupEscClose =  (evt) => {
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
const clickPopupAddOpen = () => {
  openPopup(popupAdd);
};
const clickPopupAddClose = () => {
  closePopup(popupAdd);
}
const addSubmit = (evt) => {
  evt.preventDefault();
  const src = inputAddLink.value;
  const alt = inputAddName.value;
  const card = createCards(alt, src);
  renderCard(gallerySection, card, true);
  popupAddForm.reset();
  closePopup(popupAdd);
}

//Функции связанные с массивом
const initialFs = (name, link) => {
  popupFsImage.src = link;
  popupFsImage.alt = name;
  popupFsDescription.textContent = name;
};
const openPopupFs = (name, link) => {
  initialFs(name, link)
  openPopup(popupFs);
};
const closePopupFs = () => {
  closePopup(popupFsClose);
};
const imageClick = (evt) => {
  const {alt, src} = evt.target;
  openPopupFs(alt, src);
};
const likeImg = (evt) => {
  evt.target.classList.toggle('card__like_active');
}
const deleteImg = (event) => {
  event.target.closest('.gallery__list').remove();
};

//Создание карточек
const createCards = (name, link) => {
  const card = galleryTemplate.querySelector('.gallery__list').cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  const cardLike = card.querySelector('.card__like');
  const cardDesscription = card.querySelector('.card__description')
  cardDesscription.querySelector('.card__name').textContent = name;
  const cardName = card.querySelector('.card__name');
  cardName.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  const deleteBtn = card.querySelector('.card__trash');
  cardLike.addEventListener('click', likeImg);
  deleteBtn.addEventListener('click', deleteImg);
  cardImage.addEventListener('click', imageClick);
  return card;
}
const renderCard = (gallerySection, card, prepend) => {
  if(prepend) {
    gallerySection.prepend(card);
  } else{
    gallerySection.append(card);
  }
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
initialCards.forEach((icon) => {
  const name = icon.name;
  const link = icon.link;
  const card = createCards (name, link);
  renderCard(gallerySection, card, false);
});