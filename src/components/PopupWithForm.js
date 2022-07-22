import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({initializeForm, handleSubmit}, popupSelector) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._initializeForm = initializeForm;
        this._handleSubmit = handleSubmit;
        this._inputList = this._form.querySelectorAll('input');
        this._buttonConfirm = this._form.querySelector('.popup__save-btn');
        this._buttonConfirmText = this._buttonConfirm.textContent;
    }

    getInputValues() {
        const inputValues = {};
        this._inputList.forEach(item => {
            inputValues[item.name] = item.value;
        })
        return inputValues
    }

    setTextButton(text) {
        this._buttonConfirm.textContent = text;
    }

    resetTextButton() {
        this.setTextButton(this._buttonConfirmText);
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._handleSubmit);
      }

    open() {
        this._initializeForm();
        super.open()
    }

    close() {
        this._form.reset();
        super.close();
    }
}