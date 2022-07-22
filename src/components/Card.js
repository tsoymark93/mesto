export default class Card {
  constructor({name, link, handleCardClick, likes = [], _id, owner = {}, userId, handleCardDelete, handleButtonLike}, cardSelector) {
      this._name = name;
      this._link = link;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
      this._likes = likes;
      this._id = _id;
      this._ownerId = owner._id;
      this._userId = userId;
      this._handleCardDelete = handleCardDelete;
      this._handleButtonLike = handleButtonLike.bind(this);
  }

  _getTemplate() {
      const galleryElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.gallery__items')
        .cloneNode(true);
      
      return galleryElement
  }

  _setCountLikes(likes) {
    this._galleryElement.querySelector('.like__counter').textContent = likes.length;
  }

  _getStateLike() {
    return this._likes.find(owner => owner._id === this._userId);
  }

  renderLikes(likes) {
    this.setLikes(likes);
    this._setCountLikes(this._likes);
    if(this._getStateLike()) {
      this._galleryElement.querySelector('.card__like')
        .classList.add('card__like_active');
    } else {
      this._galleryElement.querySelector('.card__like')
        .classList.remove('card__like_active');
    }
  }
  
  getId() {
    return this._id;
  }

  getLikes() {
    return this._likes;
  }

  setLikes(likes) {
    this._likes = likes;
  }

  remove() {
    this._galleryElement.remove();
  }

  generateCard() {
      this._galleryElement = this._getTemplate()
      this.renderLikes(this._likes);
      this._cardImage = this._galleryElement.querySelector('.card__image');
      this._cardName = this._galleryElement.querySelector('.card__name');
      this._cardLike = this._galleryElement.querySelector('.card__like');
      this._cardTrash = this._galleryElement.querySelector('.card__trash');

      this._cardImage.src = this._link;
      this._cardImage.alt = this._name;
      this._cardName.textContent = this._name;

      this._setEventListeners()

      if(this._ownerId !== this._userId) {
        this._cardTrash.remove()
      }
      
      return this._galleryElement;
  }

  _setEventListeners() {
      this._cardLike.addEventListener('click', () => this._handleButtonLike());
      this._cardTrash.addEventListener('click', () => this._handleCardDelete());
      this._cardImage.addEventListener('click', () => this._handleCardClick());
    }
}