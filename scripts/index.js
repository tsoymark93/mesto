const popupWindow = document.querySelector('.popup') //создаем константу модального окна
const profileEditButton = document.querySelector('.profile__edit-btn') //создаем константу кнопки "изменить"
const popupCloseButton = document.querySelector('.popup__close-btn') //создаем константу кнопки "закрыть"

const profileName = document.querySelector('.profile__name') //создаем константу имени профиля
const profileProfession = document.querySelector('.profile__profession') //создаем константу профессии профиля
const inputName = document.querySelector('#profile-name') //создаем константу инпута имени профиля
const inputProfession = document.querySelector('#profile-profession') //создаем константу инпута профессии профиля
const popupForm = document.querySelector('.popup__form') //создаем константу форм заполнения модального окна

//const like = document.querySelector('.card__btn')

//function cardLikeBtn() {
//  like.classList.toggle('card__btn_active')
//}

function openEditWindow() { //создаем функцию открытия модального окна способом добавления дополнительного класса
  popupWindow.classList.add('popup_opened') 

  inputName.value = profileName.textContent  
  inputProfession.value = profileProfession.textContent 
}

function closeEditWindow() { //создаем функцию закрытия модального окна способом удаления доп класса 
  popupWindow.classList.remove('popup_opened') 
}

function editProfile(event) { //создаем функцию с событием
  event.preventDefault()
  profileName.textContent = inputName.value 
  profileProfession.textContent = inputProfession.value 
  closeEditWindow()
}

profileEditButton.addEventListener('click', openEditWindow) //применение функции по клику мышкой

popupCloseButton.addEventListener('click', closeEditWindow) //применение функций по клику мышкой
popupForm.addEventListener('submit', editProfile) //применение функций по клику мышкой

//like.addEventListener('click', cardLikeBtn)