import '../pages/index.css';

import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api';
import PopupConfirm from '../components/PopupConfirm';
// Объявление констант
import {
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
  gallerySection,
  popupFs,
  formValidators,
  apiConfig,
  profileAvatar,
  popupConfirm,
  popupAvatar,
  profileAvatarContainer,
} from '../utils/constants.js';

const api = new Api(apiConfig);

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

const popupUpdateAvatar = new PopupWithForm({
  initializeForm: () => {
    formValidators['popupAvatarForm'].resetValidation();
  },
  handleSubmit: (evt) => {
    evt.preventDefault();

    const avatarLink = popupUpdateAvatar.getInputValues().avatar;
    api.updateAvatar(avatarLink)
    .then(res => {
      popupUpdateAvatar.setTextButton('Сохранеие...');
      userInfo.updateAvatar(res.avatar);
      popupUpdateAvatar.close();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      popupUpdateAvatar.resetTextButton();
    })
  }
}, popupAvatar);

popupUpdateAvatar.setEventListeners();
profileAvatarContainer.addEventListener('click', popupUpdateAvatar.open.bind(popupUpdateAvatar));


const popupWithImage = new PopupWithImage(popupFs);
popupWithImage.setEventListeners();

const createCard = ({name, link, likes, _id, owner}) => {
    const card = new Card({
      name,
      link,
      likes,
      _id,
      owner,
      userId: userInfo.getUserId(),
      handleButtonLike: () => {
        const stateLike = card.getLikes().find(owner => owner._id === userInfo._id);

        if(!stateLike) {
          api.addLike(card.getId())
          .then(res => {
            card.renderLikes(res.likes);
          })
          .catch(err => {
            console.log(err);
          })
        } else (
          api.removeLike(card.getId())
          .then(res => {
            card.renderLikes(res.likes);
          })
          .catch(err => {
            console.log(err);
          })
        )
      },
      handleCardClick: () => {
        popupWithImage.open({name, link});
      },
      handleCardDelete: () => {
        popupTypeConfirm.open(card);
      }
    }, galleryTemplate);

  const galleryElement = card.generateCard();
  return galleryElement
};

const cardList = new Section({
  items: null,
  renderer: (cardItem) => {
    const cardElement = createCard(cardItem);
    cardList.addItem(cardElement);
  }
},
  gallerySection
);

Promise.all([api.getUser(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userInfo.initialize(userData);
    const dataCards = cards.map(data => {
      return {
        name: data.name,
        link: data.link,
        likes: data.likes,
        _id: data._id,
        owner: data.owner
      }
    })
    cardList.setInitialArray(dataCards);
    cardList.renderItems();
  })
  .catch(err => {
    console.log(err);
  });


const userInfo = new UserInfo({
  profileNameSelector: profileName,
  profileProfessionSelector: profileProfession,
  profileAvatarSelector: profileAvatar,
});

const popupTypeConfirm = new PopupConfirm({
  handleConfirm: (card) => {
    api.removeCard(card.getId())
    .then(() => {
      card.remove();
      popupTypeConfirm.close();
    })
    .catch(err => {
      console.log(err);
    })
  }
}, popupConfirm);
popupTypeConfirm.setEventListeners();


const popupEditProfile = new PopupWithForm({
    initializeForm: () => {
      const userData = userInfo.getUserInfo();
      inputEditName.value = userData.name;
      inputEditProfession.value = userData.profession;
      formValidators['popupEditForm'].resetValidation();
      },
    handleSubmit: evt => {
      evt.preventDefault();
      popupEditProfile.setTextButton('Сохранение...');
      const inputValues = popupEditProfile.getInputValues();
      api.setUser({name: inputValues.name, about: inputValues.profession})
      .then(res => {
        userInfo.setUserInfo(inputValues);
        popupEditProfile.close();
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        popupEditProfile.resetTextButton();
      });
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
      popupAddCard.setTextButton('Сохранение...');
      const inputValues = popupAddCard.getInputValues();
      const cardItem = {
        name: inputValues['description'],
        link: inputValues['link'],
      };
      
      api.createCard(cardItem)
      .then(res => {
        cardItem._id = res._id;
        cardItem.owner = res.owner;
        cardItem.likes = res.likes;
        const cardElement = createCard(cardItem);
        cardList.addItem(cardElement)
        popupAddCard.close();
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        popupAddCard.resetTextButton();
      })
    }
  },
  popupAdd,
);
popupAddCard.setEventListeners();
popupAddOpen.addEventListener('click', popupAddCard.open.bind(popupAddCard));