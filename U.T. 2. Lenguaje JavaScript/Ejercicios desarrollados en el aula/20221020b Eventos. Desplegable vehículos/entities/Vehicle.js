import { Uuid } from '../utils/Uuid.js';

export class Vehicle {
    constructor(brand, model) {
        this._brand = brand;
        this._model = model;
        this._id = Uuid.generate();
    }

    get id() {
        return this._id;
    }

    get brand() {
        return this._brand;
    }

    get model() {
        return this._model;
    }

    set photo(value) {
        this._photo = value;
    }

    get photo() {
        return this._photo;
    }
}