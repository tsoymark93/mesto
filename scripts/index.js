const popupWindow = document.querySelector('.popup')
const profileEditButton = document.querySelector('.profile__edit-btn')
const popupCloseButton = document.querySelector('.popup__close-btn')

const profileName = document.querySelector('.profile__name')
const profileProfession = document.querySelector('.profile__profession')
const inputName = document.querySelector('#profile-name')
const inputProfession = document.querySelector('#profile-profession')
const popupForm = document.querySelector('.popup__form')

const like = document.querySelector('.gallery__btn')

function galleryLikeBtn() {
    like.classList.toggle('gallery__btn_active')
}

function openEditWindow() {
  popupWindow.classList.add('popup_opened')

  inputName.value = profileName.textContent
  inputProfession.value = profileProfession.textContent
}

function closeEditWindow() {
  popupWindow.classList.remove('popup_opened')
}

function editProfile(event) {
  event.preventDefault()
  profileName.textContent = inputName.value
  profileProfession.textContent = inputProfession.value
  closeEditWindow()
}

profileEditButton.addEventListener('click', openEditWindow)

popupCloseButton.addEventListener('click', closeEditWindow)

popupForm.addEventListener('submit', editProfile)

like.addEventListener('click', galleryLikeBtn)