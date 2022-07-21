/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Api)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Api = /*#__PURE__*/function () {
  function Api(_ref) {
    var baseUrl = _ref.baseUrl,
        headers = _ref.headers;

    _classCallCheck(this, Api);

    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _createClass(Api, [{
    key: "_checkResponse",
    value: function _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(res.status));
    }
  }, {
    key: "getUser",
    value: function getUser() {
      return fetch("".concat(this._baseUrl, "/users/me"), {
        headers: this._headers
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }
      }).then(this._checkResponse);
    }
  }, {
    key: "setUser",
    value: function setUser(_ref2) {
      var name = _ref2.name,
          about = _ref2.about;
      return fetch("".concat(this._baseUrl, "/users/me"), {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          about: about
        })
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }
      }).then(this._checkResponse);
    }
  }, {
    key: "getInitialCards",
    value: function getInitialCards() {
      return fetch("".concat(this._baseUrl, "/cards"), {
        headers: this._headers
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }
      }).then(this._checkResponse);
    }
  }, {
    key: "createCard",
    value: function createCard(_ref3) {
      var name = _ref3.name,
          link = _ref3.link;
      return fetch("".concat(this._baseUrl, "/cards"), {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          link: link
        })
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }
      }).then(this._checkResponse);
    }
  }, {
    key: "removeCard",
    value: function removeCard(idCard) {
      return fetch("".concat(this._baseUrl, "/cards/").concat(idCard), {
        method: 'DELETE',
        headers: this._headers
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }
      }).then(this._checkResponse);
    }
  }, {
    key: "addLike",
    value: function addLike(idCard) {
      return fetch("".concat(this._baseUrl, "/cards/").concat(idCard, "/likes"), {
        metod: 'PUT',
        headers: this._headers
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }
      }).then(this._checkResponse);
    }
  }, {
    key: "removeLike",
    value: function removeLike(idCard) {
      return fetch("".concat(this._baseUrl, "/cards/").concat(idCard, "/likes"), {
        method: 'DELETE',
        headers: this._headers
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }
      }).then(this._checkResponse);
    }
  }]);

  return Api;
}();



/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Card)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Card = /*#__PURE__*/function () {
  function Card(_ref, cardSelector) {
    var _this = this;

    var name = _ref.name,
        link = _ref.link,
        handleCardClick = _ref.handleCardClick,
        _ref$likes = _ref.likes,
        likes = _ref$likes === void 0 ? [] : _ref$likes,
        _id = _ref._id,
        _ref$owner = _ref.owner,
        owner = _ref$owner === void 0 ? {} : _ref$owner,
        userId = _ref.userId,
        removeCard = _ref.removeCard,
        toggleLike = _ref.toggleLike;

    _classCallCheck(this, Card);

    _defineProperty(this, "_likeImg", function (evt) {
      _this._toggleLike(_this._id, _this._likes).then(function (res) {
        _this._likes = res.likes;

        _this._setCountLikes(_this.likes);

        if (_this._getStateLike()) {
          evt.target.classList.add('card__like_active');
        } else {
          evt.target.classList.remove('card__like_active');
        }
      });
    });

    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._likes = likes;
    this._id = _id;
    this._ownerId = owner._id;
    this._userId = userId;
    this._removeCard = removeCard.bind(this);
    this._toggleLike = toggleLike.bind(this);
  }

  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var galleryElement = document.querySelector(this._cardSelector).content.querySelector('.gallery__items').cloneNode(true);
      return galleryElement;
    }
  }, {
    key: "_setCountLikes",
    value: function _setCountLikes(likes) {
      this._galleryElement.querySelector('.like__counter').textContent = likes.length;
    }
  }, {
    key: "_getStateLike",
    value: function _getStateLike() {
      var _this2 = this;

      return this._likes.find(function (owner) {
        return owner._id === _this2._userIdId;
      });
    }
  }, {
    key: "_deleteImg",
    value: function _deleteImg() {
      this._removeCard(this._id);

      this._galleryElement.remove();

      this._galleryElement = null;
    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      this._galleryElement = this._getTemplate();
      this._cardImage = this._galleryElement.querySelector('.card__image');
      this._cardName = this._galleryElement.querySelector('.card__name');
      this._cardLike = this._galleryElement.querySelector('.card__like');
      this._cardTrash = this._galleryElement.querySelector('.card__trash');

      var cardLikes = this._galleryElement.querySelector('.like__counter');

      this._cardImage.src = this._link;
      this._cardImage.alt = this._name;
      this._cardName.textContent = this._name;
      cardLikes.textContent = this._likes.length;

      this._setEventListeners();

      if (!this._ownerId !== this.userId) {
        this._cardTrash.remove();
      }

      return this._galleryElement;
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this3 = this;

      this._cardLike.addEventListener('click', function (evt) {
        _this3._likeImg(evt);
      });

      this._cardTrash.addEventListener('click', function (evt) {
        _this3._deleteImg(evt);
      });

      this._cardImage.addEventListener('click', function () {
        _this3._handleCardClick();
      });
    }
  }]);

  return Card;
}();



/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormValidator)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormValidator = /*#__PURE__*/function () {
  function FormValidator(selectors, formElement) {
    var _this = this;

    _classCallCheck(this, FormValidator);

    _defineProperty(this, "enableValidation", function () {
      _this._toggleButtonState();

      _this._inputList.forEach(function (input) {
        input.addEventListener('input', function () {
          _this._checkValidityValid(input);

          _this._toggleButtonState();
        });
      });
    });

    _defineProperty(this, "resetValidation", function () {
      _this._inputList.forEach(function (input) {
        _this._hideInputError(input);
      });

      _this._toggleButtonState();
    });

    this._inputSelector = selectors.inputSelector;
    this._submitButtonSelector = selectors.submitButtonSelector;
    this._inactiveButtonClass = selectors.inactiveButtonClass;
    this._inputErrorClass = selectors.inputErrorClass;
    this._errorClass = selectors.errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(".".concat(this._inputSelector)));
    this._saveButton = this._formElement.querySelector(".".concat(this._submitButtonSelector));
  }

  _createClass(FormValidator, [{
    key: "_showInputError",
    value: function _showInputError(input, errorMessage) {
      var errorElement = this._formElement.querySelector(".".concat(input.id, "-error"));

      errorElement.textContent = errorMessage;
      input.classList.add(this._inputErrorClass);
      errorElement.classList.add(this._errorClass);
    }
  }, {
    key: "_hideInputError",
    value: function _hideInputError(input) {
      var errorElement = this._formElement.querySelector(".".concat(input.id, "-error"));

      input.classList.remove(this._inputErrorClass);
      errorElement.classList.remove(this._errorClass);
      errorElement.textContent = '';
    }
  }, {
    key: "_checkValidityValid",
    value: function _checkValidityValid(input) {
      if (!input.validity.valid) {
        var errorMessage = input.validationMessage;

        this._showInputError(input, errorMessage);
      } else {
        this._hideInputError(input);
      }
    }
  }, {
    key: "_hasInvalidInput",
    value: function _hasInvalidInput() {
      return this._inputList.some(function (input) {
        return !input.validity.valid;
      });
    }
  }, {
    key: "_toggleButtonState",
    value: function _toggleButtonState() {
      if (this._hasInvalidInput()) {
        this._saveButton.classList.add(this._inactiveButtonClass);

        this._saveButton.disabled = true;
      } else {
        this._saveButton.classList.remove(this._inactiveButtonClass);

        this._saveButton.disabled = false;
      }
    }
  }]);

  return FormValidator;
}();



/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    _classCallCheck(this, Popup);

    this._popup = document.querySelector(popupSelector);
    this._handleCloseEsc = this._handleCloseEsc.bind(this);
    this._handleClose = this._handleClose.bind(this);
  }

  _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popup.classList.add('popup_opened');

      document.addEventListener('keydown', this._handleCloseEsc);
    }
  }, {
    key: "close",
    value: function close() {
      this._popup.classList.remove('popup_opened');

      document.removeEventListener('keydown', this._handleCloseEsc);
    }
  }, {
    key: "_handleCloseEsc",
    value: function _handleCloseEsc(evt) {
      if (evt.key !== 'Escape') return;
      this.close();
    }
  }, {
    key: "_handleClose",
    value: function _handleClose(evt) {
      if (evt.target.classList.contains('popup__close-btn') || evt.target.classList.contains('popup')) {
        this.close();
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      this._popup.addEventListener('mousedown', this._handleClose);
    }
  }]);

  return Popup;
}();



/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithForm)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);

  var _super = _createSuper(PopupWithForm);

  function PopupWithForm(_ref, popupSelector) {
    var _this;

    var initializeForm = _ref.initializeForm,
        handleSubmit = _ref.handleSubmit;

    _classCallCheck(this, PopupWithForm);

    _this = _super.call(this, popupSelector);
    _this._form = _this._popup.querySelector('.popup__form');
    _this._initializeForm = initializeForm;
    _this._handleSubmit = handleSubmit;
    _this._inputList = _this._form.querySelectorAll('input');
    return _this;
  }

  _createClass(PopupWithForm, [{
    key: "getInputValues",
    value: function getInputValues() {
      var inputValues = {};

      this._inputList.forEach(function (item) {
        inputValues[item.name] = item.value;
      });

      return inputValues;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);

      this._form.addEventListener('submit', this._handleSubmit);
    }
  }, {
    key: "open",
    value: function open() {
      this._initializeForm();

      _get(_getPrototypeOf(PopupWithForm.prototype), "open", this).call(this);
    }
  }, {
    key: "close",
    value: function close() {
      this._form.reset();

      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);
    }
  }]);

  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithImage)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);

  var _super = _createSuper(PopupWithImage);

  function PopupWithImage(popupSelector) {
    var _this;

    _classCallCheck(this, PopupWithImage);

    _this = _super.call(this, popupSelector);
    _this._image = _this._popup.querySelector('.popup__image');
    _this._imageDescription = _this._popup.querySelector('.popup__description');
    return _this;
  }

  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(_ref) {
      var name = _ref.name,
          link = _ref.link;
      this._image.src = link;
      this._image.alt = name;
      this._imageDescription.textContent = name;

      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
    }
  }]);

  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Section)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var items = _ref.items,
        renderer = _ref.renderer;

    _classCallCheck(this, Section);

    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  _createClass(Section, [{
    key: "addItem",
    value: function addItem(element) {
      this._container.prepend(element);
    }
  }, {
    key: "setInitialArray",
    value: function setInitialArray(items) {
      this._initialArray = items;
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this = this;

      this._initialArray.forEach(function (item) {
        _this._renderer(item);
      });
    }
  }]);

  return Section;
}();



/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserInfo)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var profileNameSelector = _ref.profileNameSelector,
        profileProfessionSelector = _ref.profileProfessionSelector,
        profileAvatarSelector = _ref.profileAvatarSelector;

    _classCallCheck(this, UserInfo);

    this._name = document.querySelector(profileNameSelector);
    this._profession = document.querySelector(profileProfessionSelector);
    this._avatar = document.querySelector(profileAvatarSelector);
    this._id = '';
  }

  _createClass(UserInfo, [{
    key: "initialize",
    value: function initialize(_ref2) {
      var name = _ref2.name,
          about = _ref2.about,
          avatar = _ref2.avatar,
          _id = _ref2._id;
      this._name.textContent = name;
      this._profession.textContent = about;
      this._avatar.src = avatar;
      this._id = _id;
    }
  }, {
    key: "getUserId",
    value: function getUserId() {
      return this._id;
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        name: this._name.textContent,
        profession: this._profession.textContent
      };
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(_ref3) {
      var name = _ref3.name,
          profession = _ref3.profession;
      this._name.textContent = name;
      this._profession.textContent = profession;
    }
  }]);

  return UserInfo;
}();



/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiConfig": () => (/* binding */ apiConfig),
/* harmony export */   "formValidators": () => (/* binding */ formValidators),
/* harmony export */   "gallerySection": () => (/* binding */ gallerySection),
/* harmony export */   "galleryTemplate": () => (/* binding */ galleryTemplate),
/* harmony export */   "initialCards": () => (/* binding */ initialCards),
/* harmony export */   "inputEditName": () => (/* binding */ inputEditName),
/* harmony export */   "inputEditProfession": () => (/* binding */ inputEditProfession),
/* harmony export */   "popupAdd": () => (/* binding */ popupAdd),
/* harmony export */   "popupAddForm": () => (/* binding */ popupAddForm),
/* harmony export */   "popupAddOpen": () => (/* binding */ popupAddOpen),
/* harmony export */   "popupEdit": () => (/* binding */ popupEdit),
/* harmony export */   "popupEditOpen": () => (/* binding */ popupEditOpen),
/* harmony export */   "popupFs": () => (/* binding */ popupFs),
/* harmony export */   "popupFsClose": () => (/* binding */ popupFsClose),
/* harmony export */   "profileAvatar": () => (/* binding */ profileAvatar),
/* harmony export */   "profileName": () => (/* binding */ profileName),
/* harmony export */   "profileProfession": () => (/* binding */ profileProfession),
/* harmony export */   "selectors": () => (/* binding */ selectors)
/* harmony export */ });
var initialCards = [{
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
}, {
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
}, {
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
}, {
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
}, {
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
}, {
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}];
var selectors = {
  formSelector: 'popup__container',
  inputSelector: 'popup__input',
  submitButtonSelector: 'popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
};
var apiConfig = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-45',
  headers: {
    authorization: 'dcf33f23-ff05-4e3a-8a4b-af29c9f9dbf6',
    'Content-Type': 'application/json'
  }
}; // Константы связанные с Popup Edit

var popupEdit = '.popup_type_edit';
var popupEditOpen = document.querySelector('.profile__edit-btn');
var profileName = '.profile__name';
var profileProfession = '.profile__profession';
var inputEditName = document.querySelector('.popup__input_name');
var inputEditProfession = document.querySelector('.popup__input_profession');
var profileAvatar = '.profile__avatar'; // Константы связанные с Popup Add

var popupAdd = '.popup_type_add';
var popupAddOpen = document.querySelector('.profile__add-btn');
var popupAddForm = document.querySelector('.popup__add-form'); // Константы связанные с Gallery массивом

var gallerySection = '.gallery';
var galleryTemplate = '.gallery-template'; // Константы связанные с Popup FullScreen

var popupFs = '.popup_type_img';
var popupFsClose = document.querySelector('.popup__close-btn'); // Валидация

var formValidators = {};

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index.css */ "./src/pages/index.css");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _components_Api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Api */ "./src/components/Api.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");







 // Объявление констант


var api = new _components_Api__WEBPACK_IMPORTED_MODULE_7__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.apiConfig);

var enableValidationForms = function enableValidationForms() {
  var forms = Array.from(document.forms);
  forms.forEach(function (form) {
    var formValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.selectors, form);
    var formName = form.getAttribute('name');
    _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.formValidators[formName] = formValidator;
    formValidator.enableValidation();
  });
};

enableValidationForms();
var popupWithImage = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_4__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.popupFs);
popupWithImage.setEventListeners();

var createCard = function createCard(_ref) {
  var name = _ref.name,
      link = _ref.link,
      likes = _ref.likes,
      _id = _ref._id,
      owner = _ref.owner;
  var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
    name: name,
    link: link,
    likes: likes,
    _id: _id,
    owner: owner,
    toggleLike: toggleLike,
    removeCard: removeCard,
    handleCardClick: function handleCardClick() {
      popupWithImage.open({
        name: name,
        link: link
      });
    }
  }, _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.galleryTemplate);
  var galleryElement = card.generateCard();
  return galleryElement;
};

var cardList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
  items: null,
  renderer: function renderer(cardItem) {
    var cardElement = createCard(cardItem);
    cardList.addItem(cardElement);
  }
}, _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.gallerySection);
api.getInitialCards().then(function (res) {
  var dataCards = res.map(function (data) {
    return {
      name: data.name,
      link: data.link,
      likes: data.likes,
      _id: data._id,
      owner: data.owner
    };
  });
  cardList.setInitialArray(dataCards);
  cardList.renderItems();
});
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
  profileNameSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.profileName,
  profileProfessionSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.profileProfession,
  profileAvatarSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.profileAvatar
});
api.getUser().then(function (data) {
  userInfo.initialize(data);
});

var removeCard = function removeCard(id) {
  api.removeCard(id);
};

var setLikeCard = function setLikeCard(idCard) {
  return api.addLike(idCard);
};

var removeLikeCard = function removeLikeCard(idCard) {
  return api.removeLike(idCard);
};

var toggleLike = function toggleLike(idCard, likes) {
  var stateLike = likes.find(function (owner) {
    return owner._id === userInfo._id;
  });

  if (!stateLike) {
    return setLikeCard(idCard);
  } else {
    return removeLikeCard(idCard);
  }
};

var popupEditProfile = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
  initializeForm: function initializeForm() {
    var userData = userInfo.getUserInfo();
    _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.inputEditName.value = userData.name;
    _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.inputEditProfession.value = userData.profession;
    _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.formValidators.popupEditForm.resetValidation();
  },
  handleSubmit: function handleSubmit(evt) {
    evt.preventDefault();
    var inputValues = popupEditProfile.getInputValues();
    api.setUser({
      name: inputValues.name,
      about: inputValues.profession
    }).then(function (res) {
      userInfo.setUserInfo(inputValues);
      popupEditProfile.close();
    });
  }
}, _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.popupEdit);
popupEditProfile.setEventListeners();
_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.popupEditOpen.addEventListener('click', popupEditProfile.open.bind(popupEditProfile));
var popupAddCard = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
  initializeForm: function initializeForm() {
    _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.formValidators.popupAddForm.resetValidation();
  },
  handleSubmit: function handleSubmit(evt) {
    evt.preventDefault();
    var inputValues = popupAddCard.getInputValues();
    var cardItem = {
      name: inputValues['description'],
      link: inputValues['link']
    };
    api.createCard(cardItem).then(function (res) {
      cardItem._id = res._id;
      cardItem.owner = res.owner;
      var cardElement = createCard(cardItem);
      cardList.addItem(cardElement);
      popupAddCard.close();
    });
  }
}, _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.popupAdd);
popupAddCard.setEventListeners();
_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.popupAddOpen.addEventListener('click', popupAddCard.open.bind(popupAddCard));
})();

/******/ })()
;
//# sourceMappingURL=main.js.map