(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){var r,i,o=this,a=e.name,s=e.link,u=e.handleCardClick,c=e.likes,l=void 0===c?[]:c,f=e._id,p=e.owner,h=void 0===p?{}:p,d=e.userId,_=e.removeCard,y=e.toggleLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=function(e){o._toggleLike(o._id,o._likes).then((function(t){o._likes=t.likes,o._setCountLikes(o.likes),o._getStateLike()?e.target.classList.add("card__like_active"):e.target.classList.remove("card__like_active")}))},(r="_likeImg")in this?Object.defineProperty(this,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):this[r]=i,this._name=a,this._link=s,this._cardSelector=n,this._handleCardClick=u,this._likes=l,this._id=f,this._ownerId=h._id,this._userId=d,this._removeCard=_.bind(this),this._toggleLike=y.bind(this)}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".gallery__items").cloneNode(!0)}},{key:"_setCountLikes",value:function(e){this._galleryElement.querySelector(".like__counter").textContent=e.length}},{key:"_getStateLike",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"_deleteImg",value:function(){this._removeCard(this._id),this._galleryElement.remove(),this._galleryElement=null}},{key:"generateCard",value:function(){this._galleryElement=this._getTemplate(),this._cardImage=this._galleryElement.querySelector(".card__image"),this._cardName=this._galleryElement.querySelector(".card__name"),this._cardLike=this._galleryElement.querySelector(".card__like"),this._cardTrash=this._galleryElement.querySelector(".card__trash");var e=this._galleryElement.querySelector(".like__counter");return this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardName.textContent=this._name,e.textContent=this._likes.length,this._setEventListeners(),this._ownerId!==this.userId&&this._cardTrash.remove(),this._galleryElement}},{key:"_setEventListeners",value:function(){var e=this;this._cardLike.addEventListener("click",(function(t){e._likeImg(t)})),this._cardTrash.addEventListener("click",(function(t){e._deleteImg(t)})),this._cardImage.addEventListener("click",(function(){e._handleCardClick()}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){function e(t,n){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"enableValidation",(function(){i._toggleButtonState(),i._inputList.forEach((function(e){e.addEventListener("input",(function(){i._checkValidityValid(e),i._toggleButtonState()}))}))})),r(this,"resetValidation",(function(){i._inputList.forEach((function(e){i._hideInputError(e)})),i._toggleButtonState()})),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(".".concat(this._inputSelector))),this._saveButton=this._formElement.querySelector(".".concat(this._submitButtonSelector))}var t,i;return t=e,(i=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));n.textContent=t,e.classList.add(this._inputErrorClass),n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkValidityValid",value:function(e){if(e.validity.valid)this._hideInputError(e);else{var t=e.validationMessage;this._showInputError(e,t)}}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._saveButton.classList.add(this._inactiveButtonClass),this._saveButton.disabled=!0):(this._saveButton.classList.remove(this._inactiveButtonClass),this._saveButton.disabled=!1)}}])&&n(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.items,i=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=r,this._renderer=i,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"setInitialArray",value:function(e){this._initialArray=e}},{key:"renderItems",value:function(){var e=this;this._initialArray.forEach((function(t){e._renderer(t)}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleCloseEsc=this._handleCloseEsc.bind(this),this._handleClose=this._handleClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleCloseEsc)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleCloseEsc)}},{key:"_handleCloseEsc",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleClose",value:function(e){(e.target.classList.contains("popup__close-btn")||e.target.classList.contains("popup"))&&this.close()}},{key:"setEventListeners",value:function(){this._popup.addEventListener("mousedown",this._handleClose)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=p(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},f.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function d(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,n,r,i,o=(r=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(i){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=o.call(this,e))._image=t._popup.querySelector(".popup__image"),t._imageDescription=t._popup.querySelector(".popup__description"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;this._image.src=n,this._image.alt=t,this._imageDescription.textContent=t,f(_(a.prototype),"open",this).call(this)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=k(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},b.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function w(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(a,e);var t,n,r,i,o=(r=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(i){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function a(e,t){var n,r=e.initializeForm,i=e.handleSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=o.call(this,t))._form=n._popup.querySelector(".popup__form"),n._initializeForm=r,n._handleSubmit=i,n._inputList=n._form.querySelectorAll("input"),n}return t=a,(n=[{key:"getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){b(E(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._handleSubmit)}},{key:"open",value:function(){this._initializeForm(),b(E(a.prototype),"open",this).call(this)}},{key:"close",value:function(){this._form.reset(),b(E(a.prototype),"close",this).call(this)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t){var n=t.profileNameSelector,r=t.profileProfessionSelector,i=t.profileAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._profession=document.querySelector(r),this._avatar=document.querySelector(i),this._id=""}var t,n;return t=e,(n=[{key:"initialize",value:function(e){var t=e.name,n=e.about,r=e.avatar,i=e._id;this._name.textContent=t,this._profession.textContent=n,this._avatar.src=r,this._id=i}},{key:"getUserId",value:function(){return this._id}},{key:"getUserInfo",value:function(){return{name:this._name.textContent,profession:this._profession.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.profession;this._name.textContent=t,this._profession.textContent=n}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"getUser",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){if(e.ok)return e.json()}))}},{key:"setUser",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:n})}).then((function(e){if(e.ok)return e.json()}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){if(e.ok)return e.json()}))}},{key:"createCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:n})}).then((function(e){if(e.ok)return e.json()}))}},{key:"removeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){if(e.ok)return e.json()}))}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{metod:"PUT",headers:this._headers}).then((function(e){if(e.ok)return e.json()}))}},{key:"removeLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){if(e.ok)return e.json()}))}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),I={formSelector:"popup__container",inputSelector:"popup__input",submitButtonSelector:"popup__save-btn",inactiveButtonClass:"popup__save-btn_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible"},P=document.querySelector(".profile__edit-btn"),q=document.querySelector(".popup__input_name"),T=document.querySelector(".popup__input_profession"),B=document.querySelector(".profile__add-btn"),U=(document.querySelector(".popup__add-form"),document.querySelector(".popup__close-btn"),{}),R=new j({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-45",headers:{authorization:"dcf33f23-ff05-4e3a-8a4b-af29c9f9dbf6","Content-Type":"application/json"}});Array.from(document.forms).forEach((function(e){var t=new i(I,e),n=e.getAttribute("name");U[n]=t,t.enableValidation()}));var x=new y(".popup_type_img");x.setEventListeners();var A=function(e){var n=e.name,r=e.link,i=e.likes,o=e._id,a=e.owner;return new t({name:n,link:r,likes:i,_id:o,owner:a,userId:D.getUserId(),toggleLike:F,removeCard:z,handleCardClick:function(){x.open({name:n,link:r})}},".gallery-template").generateCard()},V=new a({items:null,renderer:function(e){var t=A(e);V.addItem(t)}},".gallery");R.getInitialCards().then((function(e){var t=e.map((function(e){return{name:e.name,link:e.link,likes:e.likes,_id:e._id,owner:e.owner}}));V.setInitialArray(t),V.renderItems()}));var D=new O({profileNameSelector:".profile__name",profileProfessionSelector:".profile__profession",profileAvatarSelector:".profile__avatar"});R.getUser().then((function(e){D.initialize(e)}));var z=function(e){R.removeCard(e)},F=function(e,t){return t.find((function(e){return e._id===D._id}))?function(e){return R.removeLike(e)}(e):function(e){return R.addLike(e)}(e)},N=new S({initializeForm:function(){var e=D.getUserInfo();q.value=e.name,T.value=e.profession,U.popupEditForm.resetValidation()},handleSubmit:function(e){e.preventDefault();var t=N.getInputValues();R.setUser({name:t.name,about:t.profession}).then((function(e){D.setUserInfo(t),N.close()}))}},".popup_type_edit");N.setEventListeners(),P.addEventListener("click",N.open.bind(N));var J=new S({initializeForm:function(){U.popupAddForm.resetValidation()},handleSubmit:function(e){e.preventDefault();var t=J.getInputValues(),n={name:t.description,link:t.link};R.createCard(n).then((function(e){n._id=e._id,n.owner=e.owner;var t=A(n);V.addItem(t),J.close()}))}},".popup_type_add");J.setEventListeners(),B.addEventListener("click",J.open.bind(J))})();