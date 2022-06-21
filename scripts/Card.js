export default class Card {
    constructor(name, link, cardSelector, imageClick) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
        this._imageClick = imageClick
    }

    _getTemplate() {
        const galleryElement = document
          .querySelector(this._cardSelector)
          .content
          .querySelector('.gallery__items')
          .cloneNode(true);
        
        return galleryElement
    }
    
    _likeImg(evt) {
        this._cardLike.classList.toggle('card__like_active');
    }

    _deleteImg(evt) {
        this._galleryElement.remove();
        this._galleryElement = null;
    }

    generateCard() {
        this._galleryElement = this._getTemplate()
        this._cardImage = this._galleryElement.querySelector('.card__image');
        this._cardName = this._galleryElement.querySelector('.card__name');
        this._cardLike = this._galleryElement.querySelector('.card__like');
        this._cardTrash = this._galleryElement.querySelector('.card__trash');
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._cardName.textContent = this._name;
        this._setEventListeners()
        
        return this._galleryElement;
    }

    _setEventListeners() {
        this._cardLike.addEventListener('click', (evt) => {
          this._likeImg(evt);
        });
        this._cardTrash.addEventListener('click', (evt) => {
          this._deleteImg(evt);
        });
        this._cardImage.addEventListener('click', (evt) => {
          this._imageClick(evt);
        });
      }
}