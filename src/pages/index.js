import '../pages/index.css';

import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
// Объявление констант
import {
  initialCards,
  selectors, 
  galleryTemplate,
  popupEdit,
  popupEditOpen,
  profileName,
  profileProfession,
  inputEditName,
  inputEditProfession,
  popupAdd,
  popupAddOpen,
  popupAddForm,
  gallerySection,
  popupFs,
  formValidators,
} from '../utils/constants.js';

const enableValidationForms = () => {
  const forms = Array.from(document.forms);
  forms.forEach(form => {
    const formValidator = new FormValidator(selectors, form);
    const formName = form.getAttribute('name');
    formValidators[formName] = formValidator;
    formValidator.enableValidation();
  });
};

enableValidationForms();

const popupWithImage = new PopupWithImage(popupFs);
popupWithImage.setEventListeners();

const createCard = ({name, link}) => {
    const card = new Card({
      name,
      link,
      handleCardClick: () => {
        popupWithImage.open({name, link});
      }
    }, galleryTemplate
    );
  const galleryElement = card.generateCard();
  return galleryElement
};

const cardList = new Section({
  items: initialCards,
  renderer: (cardItem) => {
    const cardElement = createCard(cardItem);
    cardList.addItem(cardElement);
  }
},
  gallerySection
);

cardList.renderItems();


const userInfo = new UserInfo({
  profileNameSelector: profileName,
  profileProfessionSelector: profileProfession
});

const popupEditProfile = new PopupWithForm({
    initializeForm: () => {
      const userData = userInfo.getUserInfo();
      inputEditName.value = userData.name;
      inputEditProfession.value = userData.profession;
      formValidators['popupEditForm'].resetValidation();
      },
    handleSubmit: evt => {
      evt.preventDefault();

      const inputValues = popupEditProfile.getInputValues();
      userInfo.setUserInfo(inputValues);

      popupEditProfile.close();
    }
  },
  popupEdit
);
popupEditProfile.setEventListeners();
popupEditOpen.addEventListener('click', popupEditProfile.open.bind(popupEditProfile));

const popupAddCard = new PopupWithForm({
    initializeForm: () => {
      formValidators['popupAddForm'].resetValidation();
    },
    handleSubmit: evt => {
      evt.preventDefault();
      
      const inputValues = popupAddCard.getInputValues();
      const cardItem = {
        name: inputValues['description'],
        link: inputValues['link']
      };
      
      const cardElement = createCard(cardItem);
      cardList.addItem(cardElement);
      popupAddCard.close();
    }
  },
  popupAdd,
);
popupAddCard.setEventListeners();
popupAddOpen.addEventListener('click', popupAddCard.open.bind(popupAddCard));