(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){var r=e.name,o=e.link,i=e.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=r,this._link=o,this._cardSelector=n,this._handleCardClick=i}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".gallery__items").cloneNode(!0)}},{key:"_likeImg",value:function(){this._cardLike.classList.toggle("card__like_active")}},{key:"_deleteImg",value:function(){this._galleryElement.remove(),this._galleryElement=null}},{key:"generateCard",value:function(){return this._galleryElement=this._getTemplate(),this._cardImage=this._galleryElement.querySelector(".card__image"),this._cardName=this._galleryElement.querySelector(".card__name"),this._cardLike=this._galleryElement.querySelector(".card__like"),this._cardTrash=this._galleryElement.querySelector(".card__trash"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardName.textContent=this._name,this._setEventListeners(),this._galleryElement}},{key:"_setEventListeners",value:function(){var e=this;this._cardLike.addEventListener("click",(function(t){e._likeImg(t)})),this._cardTrash.addEventListener("click",(function(t){e._deleteImg(t)})),this._cardImage.addEventListener("click",(function(){e._handleCardClick()}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(){function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"enableValidation",(function(){o._toggleButtonState(),o._inputList.forEach((function(e){e.addEventListener("input",(function(){o._checkValidityValid(e),o._toggleButtonState()}))}))})),r(this,"resetValidation",(function(){o._inputList.forEach((function(e){o._hideInputError(e)})),o._toggleButtonState()})),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(".".concat(this._inputSelector))),this._saveButton=this._formElement.querySelector(".".concat(this._submitButtonSelector))}var t,o;return t=e,(o=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));n.textContent=t,e.classList.add(this._inputErrorClass),n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkValidityValid",value:function(e){if(e.validity.valid)this._hideInputError(e);else{var t=e.validationMessage;this._showInputError(e,t)}}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._saveButton.classList.add(this._inactiveButtonClass),this._saveButton.disabled=!0):(this._saveButton.classList.remove(this._inactiveButtonClass),this._saveButton.disabled=!1)}}])&&n(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"setInitialArray",value:function(e){this._initialArray=e}},{key:"renderItems",value:function(){var e=this;this._initialArray.forEach((function(t){e._renderer(t)}))}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleCloseEsc=this._handleCloseEsc.bind(this),this._handleClose=this._handleClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleCloseEsc)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleCloseEsc)}},{key:"_handleCloseEsc",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleClose",value:function(e){(e.target.classList.contains("popup__close-btn")||e.target.classList.contains("popup"))&&this.close()}},{key:"setEventListeners",value:function(){this._popup.addEventListener("mousedown",this._handleClose)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},f.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function y(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".popup__image"),t._imageDescription=t._popup.querySelector(".popup__description"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;this._image.src=n,this._image.alt=t,this._imageDescription.textContent=t,f(_(a.prototype),"open",this).call(this)}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function E(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function a(e,t){var n,r=e.initializeForm,o=e.handleSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._form=n._popup.querySelector(".popup__form"),n._initializeForm=r,n._handleSubmit=o,n._inputList=n._form.querySelectorAll("input"),n}return t=a,(n=[{key:"getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){b(w(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._handleSubmit)}},{key:"open",value:function(){this._initializeForm(),b(w(a.prototype),"open",this).call(this)}},{key:"close",value:function(){this._form.reset(),b(w(a.prototype),"close",this).call(this)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t){var n=t.profileNameSelector,r=t.profileProfessionSelector,o=t.profileAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._profession=document.querySelector(r),this._avatar=document.querySelector(o),this._id=""}var t,n;return t=e,(n=[{key:"initialize",value:function(e){var t=e.name,n=e.about,r=e.avatar,o=e._id;this._name.textContent=t,this._profession.textContent=n,this._avatar.src=r,this._id=o}},{key:"getUserInfo",value:function(){return{name:this._name.textContent,profession:this._profession.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.profession;this._name.textContent=t,this._profession.textContent=n}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"getUser",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){if(e.ok)return e.json()}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){if(e.ok)return e.json()}))}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),P={formSelector:"popup__container",inputSelector:"popup__input",submitButtonSelector:"popup__save-btn",inactiveButtonClass:"popup__save-btn_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible"},I=document.querySelector(".profile__edit-btn"),q=document.querySelector(".popup__input_name"),B=document.querySelector(".popup__input_profession"),R=document.querySelector(".profile__add-btn"),T=(document.querySelector(".popup__add-form"),document.querySelector(".popup__close-btn"),{}),x=new L({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-45",headers:{authorization:"dcf33f23-ff05-4e3a-8a4b-af29c9f9dbf6","Content-Type":"application/json"}});Array.from(document.forms).forEach((function(e){var t=new o(P,e),n=e.getAttribute("name");T[n]=t,t.enableValidation()}));var A=new d(".popup_type_img");A.setEventListeners();var V=function(e){var n=e.name,r=e.link;return new t({name:n,link:r,handleCardClick:function(){A.open({name:n,link:r})}},".gallery-template").generateCard()},U=new a({items:null,renderer:function(e){var t=V(e);U.addItem(t)}},".gallery");x.getInitialCards().then((function(e){var t=e.map((function(e){return{name:e.name,link:e.link}}));U.setInitialArray(t),U.renderItems()}));var z=new O({profileNameSelector:".profile__name",profileProfessionSelector:".profile__profession",profileAvatarSelector:".profile__avatar"});x.getUser().then((function(e){z.initialize(e)}));var D=new S({initializeForm:function(){var e=z.getUserInfo();q.value=e.name,B.value=e.profession,T.popupEditForm.resetValidation()},handleSubmit:function(e){e.preventDefault();var t=D.getInputValues();z.setUserInfo(t),D.close()}},".popup_type_edit");D.setEventListeners(),I.addEventListener("click",D.open.bind(D));var F=new S({initializeForm:function(){T.popupAddForm.resetValidation()},handleSubmit:function(e){e.preventDefault();var t=F.getInputValues(),n={name:t.description,link:t.link},r=V(n);U.addItem(r),F.close()}},".popup_type_add");F.setEventListeners(),R.addEventListener("click",F.open.bind(F))})();