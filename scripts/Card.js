import { openPopup, popupImage, popupDescription } from "./index.js";
export default class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._popupFs = document.querySelector('.popup_type_img');
    }

    _getTemplate() {
        const galleryElement = document
          .querySelector(this._cardSelector)
          .content
          .querySelector('.gallery__items')
          .cloneNode(true);
        
        return galleryElement
    }
    
    _openPopupFs() {
        popupImage.src = this._link;
        popupImage.alt = this._name;
        popupDescription.textContent = this._name;
        openPopup(this._popupFs);
    }

    _likeImg(evt) {
        this._galleryElement.querySelector('.card__like').classList.toggle('card__like_active');
    }

    _deleteImg(evt) {
        this._galleryElement.remove();
        this._galleryElement = null;
    }

    _setEventListeners() {
        this._galleryElement.querySelector('.card__like').addEventListener('click', (evt) => this._likeImg(evt));
        this._galleryElement.querySelector('.card__trash').addEventListener('click', (evt) => this._deleteImg(evt));
        this._galleryElement.querySelector('.card__image').addEventListener('click', (evt) => this._openPopupFs(evt));
    }
    
    generateCard() {
        this._galleryElement = this._getTemplate()
        this._setEventListeners()

        this._cardImage = this._galleryElement.querySelector('.card__image');
        this._cardName = this._galleryElement.querySelector('.card__name');

        this._cardImage.src = this._link
        this._cardImage.alt = this._name
        this._cardName.textContent = this._name

        return this._galleryElement
    }
}