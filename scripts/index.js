// Popup Edit
const popupEdit = document.querySelector('.popup_type_edit');
const openEdit = document.querySelector('.profile__edit-btn');
const closeEdit = popupEdit.querySelector('.popup__close-btn');
const editForm = popupEdit.querySelector('.popup__edit-form');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const editInputName = popupEdit.querySelector('#profile-name');
const editInputProfession = popupEdit.querySelector('#profile-profession');
const submitEdit = popupEdit.querySelector('.popup__save-btn');
// Popup Add
const popupAdd = document.querySelector('.popup_type_add');
const openAdd = document.querySelector('.profile__add-btn');
const closeAdd = popupAdd.querySelector('.popup__close-btn');
const addForm = popupAdd.querySelector('.popup__add-form');
// Gallery Array
const addName = popupAdd.querySelector('#gallery-name');
const addLink = popupAdd.querySelector('#gallery-link');
const galleryTemplate = document.querySelector('#gallery-template').content;
const gallerySection = document.querySelector('.gallery');
const initialCards = [
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
// Popup FullScreen
const popupFs = document.querySelector('.popup_type_img');
const imageFs = popupFs.querySelector('.popup__image');
const descriptionFs = popupFs.querySelector('.popup__description');
const closeFs = popupFs.querySelector('.popup__close-btn');
// Open Popup Function
function openPopup (popup) {
  popup.classList.add('popup_opened')
};
// Close Popup Function
function closePopup (popup){
  popup.classList.remove('popup_opened')
};

openEdit.addEventListener('click', function( event ){
  editInputName.value  =  profileName.textContent;
  editInputProfession.value  =  profileProfession.textContent;
  openPopup(popupEdit)
  });
  
closeEdit.addEventListener('click', function( event ){
    closePopup(popupEdit);  
  });
// Закрытие попапа по свободной области экрана 
popupEdit.addEventListener('click', function( event ){
  if (event.target == event.currentTarget) {
  closePopup(popupEdit); 
  } 
});   

function editSubmit (evt) {
  evt.preventDefault();                                              
  profileName.textContent = editInputName.value;
  profileProfession.textContent = editInputProfession.value;
  closePopup(popupEdit);
  };

editForm.addEventListener('submit', editSubmit);

openAdd.addEventListener('click', function( event ){
  openPopup(popupAdd);
  });

closeAdd.addEventListener('click', function( ){
  closePopup(popupAdd);  
 });
// Закрытие попапа по свободной области экрана 
popupAdd.addEventListener('click', function( event ){
 if (event.target == event.currentTarget) {
  closePopup(popupAdd);   
 } 
});

function initialFs (name, link) {
  imageFs.src = link;
  imageFs.alt = name;
  descriptionFs.textContent = name;
};

const openPopupFs = (name, link) => {
  initialFs(name, link)
  openPopup(popupFs);
};

const closePopupFs = () => {
  closePopup(closeFs);
};

const imageClick = (evt) => {
  const {alt, src} = evt.target;
  openPopupFs(alt, src);
};

closeFs.addEventListener('click', () => closePopup(popupFs));

// Image Like Button
const likeImg = (evt) => {
  evt.target.classList.toggle('card__like_active');
}

// Image Delete Button
function deleteImg(event) {
  event.target.closest('.gallery__list').remove();
};
// Gallery Array Added
function renderCard (gallerySection, card, prepend) {
  if(prepend) {
    gallerySection.prepend(card);
  } else{
    gallerySection.append(card);
  }
};

function createCards (name, link) {
  const card = galleryTemplate.querySelector('.gallery__list').cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  const cardLike = card.querySelector('.card__like');
  card.querySelector('.card__name').textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  const deleteBtn = card.querySelector('.card__trash');
  cardLike.addEventListener('click', likeImg);
  deleteBtn.addEventListener('click', deleteImg);
  cardImage.addEventListener('click', imageClick);
  return card;
}

initialCards.forEach((icon) => {
  const name = icon.name;
  const link = icon.link;
  const card = createCards (name, link);
  renderCard(gallerySection, card, false);
});
// Закрытие попапа по свободной области экрана 
popupFs.addEventListener('click', function( event ){
  if (event.target == event.currentTarget) {
  closePopup(popupFs); 
  } 
});  

function addSubmit (evt) {
  evt.preventDefault();
  const src = addLink.value;
  const alt = addName.value;
  const card = createCards(alt, src);
  renderCard(gallerySection, card, false);
  addForm.reset();
  closePopup(popupAdd);
}

addForm.addEventListener('submit', addSubmit);