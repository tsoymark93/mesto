(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){var r=e.name,o=e.link,i=e.handleCardClick,a=e.likes,s=void 0===a?[]:a,u=e._id,c=e.owner,l=void 0===c?{}:c,f=e.userId,p=e.handleCardDelete,h=e.handleButtonLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=r,this._link=o,this._cardSelector=n,this._handleCardClick=i,this._likes=s,this._id=u,this._ownerId=l._id,this._userId=f,this._handleCardDelete=p,this._handleButtonLike=h.bind(this)}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".gallery__items").cloneNode(!0)}},{key:"_setCountLikes",value:function(e){this._galleryElement.querySelector(".like__counter").textContent=e.length}},{key:"_getStateLike",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"renderLikes",value:function(e){this._setCountLikes(e),this._setCountLikes(this._likes),this._getStateLike()?this._galleryElement.querySelector(".card__like").classList.add("card__like_active"):this._galleryElement.querySelector(".card__like").classList.remove("card__like_active")}},{key:"getId",value:function(){return this._id}},{key:"getLikes",value:function(){return this._likes}},{key:"setLikes",value:function(){this._likes=likes}},{key:"remove",value:function(){this._galleryElement.remove()}},{key:"generateCard",value:function(){return this._galleryElement=this._getTemplate(),this.renderLikes(this._likes),this._cardImage=this._galleryElement.querySelector(".card__image"),this._cardName=this._galleryElement.querySelector(".card__name"),this._cardLike=this._galleryElement.querySelector(".card__like"),this._cardTrash=this._galleryElement.querySelector(".card__trash"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardName.textContent=this._name,this._setEventListeners(),this._ownerId!==this.userId&&this._cardTrash.remove(),this._galleryElement}},{key:"_setEventListeners",value:function(){var e=this;this._galleryElement.querySelector(".card__like").addEventListener("click",(function(){return e._handleButtonLike()})),this._cardTrash.addEventListener("click",(function(){return e._handleCardDelete()})),this._cardImage.addEventListener("click",(function(){return e._handleCardClick()}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(){function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"enableValidation",(function(){o._toggleButtonState(),o._inputList.forEach((function(e){e.addEventListener("input",(function(){o._checkValidityValid(e),o._toggleButtonState()}))}))})),r(this,"resetValidation",(function(){o._inputList.forEach((function(e){o._hideInputError(e)})),o._toggleButtonState()})),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(".".concat(this._inputSelector))),this._saveButton=this._formElement.querySelector(".".concat(this._submitButtonSelector))}var t,o;return t=e,(o=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));n.textContent=t,e.classList.add(this._inputErrorClass),n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkValidityValid",value:function(e){if(e.validity.valid)this._hideInputError(e);else{var t=e.validationMessage;this._showInputError(e,t)}}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._saveButton.classList.add(this._inactiveButtonClass),this._saveButton.disabled=!0):(this._saveButton.classList.remove(this._inactiveButtonClass),this._saveButton.disabled=!1)}}])&&n(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"setInitialArray",value:function(e){this._initialArray=e}},{key:"renderItems",value:function(){var e=this;this._initialArray.forEach((function(t){e._renderer(t)}))}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleCloseEsc=this._handleCloseEsc.bind(this),this._handleClose=this._handleClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleCloseEsc)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleCloseEsc)}},{key:"_handleCloseEsc",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleClose",value:function(e){(e.target.classList.contains("popup__close-btn")||e.target.classList.contains("popup"))&&this.close()}},{key:"setEventListeners",value:function(){this._popup.addEventListener("mousedown",this._handleClose)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},f.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function d(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".popup__image"),t._imageDescription=t._popup.querySelector(".popup__description"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;this._image.src=n,this._image.alt=t,this._imageDescription.textContent=t,f(y(a.prototype),"open",this).call(this)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function C(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function a(e,t){var n,r=e.initializeForm,o=e.handleSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._form=n._popup.querySelector(".popup__form"),n._initializeForm=r,n._handleSubmit=o,n._inputList=n._form.querySelectorAll("input"),n._buttonConfirm=n._form.querySelector(".popup__save-btn"),n._buttonConfirmText=n._buttonConfirm.textContent,n}return t=a,(n=[{key:"getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setTextButton",value:function(e){this._buttonConfirm.textContent=e}},{key:"resetTextButton",value:function(){this.setTextButton(this._buttonConfirmText)}},{key:"setEventListeners",value:function(){b(w(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._handleSubmit)}},{key:"open",value:function(){this._initializeForm(),b(w(a.prototype),"open",this).call(this)}},{key:"close",value:function(){this._form.reset(),b(w(a.prototype),"close",this).call(this)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t){var n=t.profileNameSelector,r=t.profileProfessionSelector,o=t.profileAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._profession=document.querySelector(r),this._avatar=document.querySelector(o),this._id=""}var t,n;return t=e,(n=[{key:"initialize",value:function(e){var t=e.name,n=e.about,r=e.avatar,o=e._id;this._name.textContent=t,this._profession.textContent=n,this._avatar.src=r,this._id=o}},{key:"updateAvatar",value:function(e){this._avatar.src=e}},{key:"getUserId",value:function(){return this._id}},{key:"getUserInfo",value:function(){return{name:this._name.textContent,profession:this._profession.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.profession;this._name.textContent=t,this._profession.textContent=n}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUser",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"setUser",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:n})}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"createCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:n})}).then(this._checkResponse)}},{key:"removeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{metod:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"removeLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=B(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},T.apply(this,arguments)}function B(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function R(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function a(e,t){var n,r=e.handleConfirm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._buttonConfirm=n._popup.querySelector(".button_confirm"),n._buttonConfirmTextDefault=n._buttonConfirm.textContent,n._handleConfirm=r,n._handleConfirmClick=function(){},n}return t=a,(n=[{key:"setTextButton",value:function(e){this._buttonConfirm.textContent=e}},{key:"resetTextButton",value:function(){this.setTextButton(this._buttonConfirmTextDefault)}},{key:"setEventListeners",value:function(){T(q(a.prototype),"setEventListeners",this).call(this)}},{key:"open",value:function(e){T(q(a.prototype),"open",this).call(this),this._handleConfirmClick=this._handleConfirm.bind(null,e),this._buttonConfirm.addEventListener("click",this._handleConfirmClick)}},{key:"close",value:function(){T(q(a.prototype),"close",this).call(this),this._buttonConfirm.removeEventListener("click",this._handleConfirmClick)}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u),U={formSelector:"popup__container",inputSelector:"popup__input",submitButtonSelector:"popup__save-btn",inactiveButtonClass:"popup__save-btn_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible"},D=document.querySelector(".profile__edit-btn"),V=document.querySelector(".popup__input_name"),z=document.querySelector(".popup__input_profession"),F=document.querySelector(".profile__avatar-container"),N=document.querySelector(".profile__add-btn"),J=(document.querySelector(".popup__add-form"),document.querySelector(".popup__close-btn"),{});function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var M=new j({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-45",headers:{authorization:"dcf33f23-ff05-4e3a-8a4b-af29c9f9dbf6","Content-Type":"application/json"}});Array.from(document.forms).forEach((function(e){var t=new o(U,e),n=e.getAttribute("name");J[n]=t,t.enableValidation()}));var $=new E({initializeForm:function(){J.popupAvatarForm.resetValidation()},handleSubmit:function(){evt.preventDefault();var e=$.getInputValues().avatar;M.updateAvatar(e).then((function(e){$.setTextButton("Сохраннеие..."),W.updateAvatar(e.avatar),$.close()})).catch((function(e){console.log(e)})).finally((function(){$.resetTextButton()}))}},".popup_type_avatar");$.setEventListeners(),F.addEventListener("click",$.open.bind($));var G=new _(".popup_type_img");G.setEventListeners();var K=function(e){var n=e.name,r=e.link,o=e.likes,i=e._id,a=e.owner,s=new t({name:n,link:r,likes:o,_id:i,owner:a,userId:W.getUserId(),handleButtonLike:function(){var e=s.getLikes().find((function(e){return e._id===W._id}));e?M.removeLike(s.getId()).then((function(e){s.renderLikes(e.likes)})).catch((function(e){console.log(e)})):M.addLike(s.getId()).then((function(e){s.renderLikes(e.likes)}))},handleCardClick:function(){G.open({name:n,link:r})},handleCardDelete:function(){X.open(s)}},".gallery-template");return s.generateCard()},Q=new a({items:null,renderer:function(e){var t=K(e);Q.addItem(t)}},".gallery");Promise.all([M.getUser(),M.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];W.initialize(o);var a=i.map((function(e){return{name:e.name,link:e.link,likes:e.likes,_id:e._id,owner:e.owner}}));Q.setInitialArray(a),Q.renderItems()})).catch((function(e){console.log(e)}));var W=new O({profileNameSelector:".profile__name",profileProfessionSelector:".profile__profession",profileAvatarSelector:".profile__avatar"}),X=new A({handleConfirm:function(e){M.removeCard(e.getId()).then((function(){e.remove(),X.close()})).catch((function(e){console.log(e)}))}},".popup_type_confirm");X.setEventListeners();var Y=new E({initializeForm:function(){var e=W.getUserInfo();V.value=e.name,z.value=e.profession,J.popupEditForm.resetValidation()},handleSubmit:function(e){e.preventDefault(),Y.setTextButton("Сохранение...");var t=Y.getInputValues();M.setUser({name:t.name,about:t.profession}).then((function(e){W.setUserInfo(t),Y.close()})).catch((function(e){console.log(e)})).finally((function(){Y.resetTextButton()}))}},".popup_type_edit");Y.setEventListeners(),D.addEventListener("click",Y.open.bind(Y));var Z=new E({initializeForm:function(){J.popupAddForm.resetValidation()},handleSubmit:function(e){e.preventDefault(),Z.setTextButton("Сохранение...");var t=Z.getInputValues(),n={name:t.description,link:t.link};M.createCard(n).then((function(e){n._id=e._id,n.owner=e.owner,n.likes=e.likes;var t=K(n);Q.addItem(t),Z.close()})).catch((function(e){console.log(e)})).finally((function(){Z.resetTextButton()}))}},".popup_type_add");Z.setEventListeners(),N.addEventListener("click",Z.open.bind(Z))})();
//# sourceMappingURL=main.js.map