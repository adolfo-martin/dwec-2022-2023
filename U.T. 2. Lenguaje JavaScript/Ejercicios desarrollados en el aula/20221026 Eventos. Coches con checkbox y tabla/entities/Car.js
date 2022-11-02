export class Car {
    constructor(key, model, photo) {
        this._key = key;
        this._model = model;
        this._photo = photo;
    }

    get key() {
        return this._key;
    }

    get model() {
        return this._model
    }

    get photo() {
        return this._photo;
    }

    set photo(value) {
        this._photo = value;
    }

    toString() {
        return `[${this._key}] ${this._model}`
    }
}