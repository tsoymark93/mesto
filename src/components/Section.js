export default class Section {
    constructor({items, renderer}, containerSelector) {
        this._initialArray = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    addItem(element) {
        this._container.prepend(element);
    }

    setInitialArray(items) {
        this._initialArray = items;
    }

    renderItems() {
        this._initialArray.forEach(item => {
            this._renderer(item);
        });
    }
}