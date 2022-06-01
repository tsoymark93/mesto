const selectors = {
  formSelector: 'popup__container',
  inputSelector: 'popup__input',
  submitButtonSelector: 'popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible',
}

  
  const showInputError = (formElement, inputElement, errorMessage, inputErrorSelector, errorSelector) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    inputElement.classList.add(inputErrorSelector);
    errorElement.classList.add(errorSelector);
  };
  
  
   const hideInputError = (formElement, inputElement, inputErrorSelector, errorSelector) => {
    const errorElement =  formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorSelector);
    errorElement.classList.remove(errorSelector);
    errorElement.textContent = '';
  };
   
   const checkInputValidity = (formElement, inputElement,  inputErrorSelector, errorSelector) => {
    if (!inputElement.validity.valid) {
      const errorMessage = inputElement.validationMessage;
       showInputError(formElement, inputElement, errorMessage , inputErrorSelector, errorSelector);
     } else {
      hideInputError(formElement, inputElement, inputErrorSelector, errorSelector);
     }
   };

   const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, saveButton, disabledSelector) => {
    if (hasInvalidInput(inputList)) {
    saveButton.classList.add(disabledSelector);
    saveButton.disabled = true;
    
  } else  {

   saveButton.classList.remove(disabledSelector);
   saveButton.disabled = false;
  
  }
};
  
  const setEventListeners = (formElement, checkvalid) => {
    const {inputSelector, submitButtonSelector, errorClass, inputErrorClass, inactiveButtonClass} = checkvalid;
    const inputList = Array.from(formElement.querySelectorAll(`.${inputSelector}` ));
    const saveButton = formElement.querySelector(`.${submitButtonSelector}`);

    toggleButtonState(inputList, saveButton,inactiveButtonClass);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
        toggleButtonState(inputList, saveButton, inactiveButtonClass);
      });
    });

  };
  
  const enableValidation = (validConfig) => {
    const {formSelector} = validConfig;
    const formList = Array.from(document.querySelectorAll(`.${formSelector}`));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
  
    setEventListeners(formElement, validConfig);
    });
  };

  enableValidation(selectors); 