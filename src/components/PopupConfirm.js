import Popup from "./Popup.js";

export default class PopupConfirm extends Popup {
  constructor({handleConfirm}, popupSelector) {
    super(popupSelector);
    this._buttonConfirm = this._popup.querySelector('.popup__button_confirm');
    this._buttonConfirmTextDefault = this._buttonConfirm.textContent;
    this._handleConfirm = handleConfirm;
    this._handleConfirmClick = () => {};
  }

  setTextButton(text) {
    this._buttonConfirm.textContent = text;
  }

  resetTextButton() {
    this.setTextButton(this._buttonConfirmTextDefault);
  }

  setEventListeners() {
    super.setEventListeners();
  }

  open(item) {
    super.open();
    this._handleConfirmClick = this._handleConfirm.bind(null, item);
    this._buttonConfirm.addEventListener('click', this._handleConfirmClick);
  }

  close() {
    super.close();
    this._buttonConfirm.removeEventListener('click', this._handleConfirmClick);
  }
}