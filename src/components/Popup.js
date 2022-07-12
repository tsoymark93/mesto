export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleCloseEsc = this._handleCloseEsc.bind(this);
        this._handleClose = this._handleClose.bind(this);
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleCloseEsc);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleCloseEsc);
    }

    _handleCloseEsc(evt){
        if (evt.key !== 'Escape') return;
        this.close();
    }

    _handleClose(evt) {
        if (evt.target.classList.contains('popup__close-btn')
              || evt.target.classList.contains('popup')) {
          this.close();
        }
    };
    
    setEventListeners() {
        this._popup.addEventListener('mousedown', this._handleClose);
    }
}