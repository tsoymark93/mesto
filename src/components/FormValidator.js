export default class FormValidator {
    constructor(selectors, formElement) {
        this._inputSelector = selectors.inputSelector
        this._submitButtonSelector = selectors.submitButtonSelector
        this._inactiveButtonClass = selectors.inactiveButtonClass
        this._inputErrorClass = selectors.inputErrorClass
        this._errorClass = selectors.errorClass
        this._formElement = formElement
        this._inputList = Array.from(this._formElement.querySelectorAll(`.${this._inputSelector}`))
        this._saveButton = this._formElement.querySelector(`.${this._submitButtonSelector}`)
    }

    _showInputError(input, errorMessage) {
        const errorElement = this._formElement.querySelector(`.${input.id}-error`)
        errorElement.textContent = errorMessage
        input.classList.add(this._inputErrorClass)
        errorElement.classList.add(this._errorClass)
    }

    _hideInputError(input) {
        const errorElement = this._formElement.querySelector(`.${input.id}-error`)
        input.classList.remove(this._inputErrorClass)
        errorElement.classList.remove(this._errorClass)
        errorElement.textContent = '';
    }

    _checkValidityValid(input) {
        if (!input.validity.valid) {
            const errorMessage = input.validationMessage
            this._showInputError(input, errorMessage)
        } else {
            this._hideInputError(input)
        }
    }

    _hasInvalidInput() {
        return this._inputList.some((input) => {
            return !input.validity.valid
        })
    }

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._saveButton.classList.add(this._inactiveButtonClass)
            this._saveButton.disabled = true
        } else {
            this._saveButton.classList.remove(this._inactiveButtonClass)
            this._saveButton.disabled = false
        }
    }

    enableValidation = () => {
        this._toggleButtonState();
    
        this._inputList.forEach((input) => {
          input.addEventListener('input', () => {
            this._checkValidityValid(input);
    
            this._toggleButtonState();
          });
        });
      }

    cleanForm = () => {
        this._inputList.forEach((input) => {
          this._hideInputError(input);
        });
    
        this._toggleButtonState();
    };
}