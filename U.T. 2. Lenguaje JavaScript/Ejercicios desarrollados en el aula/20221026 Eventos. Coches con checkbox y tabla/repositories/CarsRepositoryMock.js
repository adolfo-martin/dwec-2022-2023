import { Car } from '../entities/Car.js';

export class CarsRepositoryMock {
    constructor() {
        // this._cars = [];
        this._cars = new Array();

        this._cars.push(new Car('sl', 'Seat León', 'seat_leon.png'));
        this._cars.push(new Car('rm', 'Renault Megane', 'renault_megane.jpg'));
        this._cars.push(new Car('p3', 'Peugeot 308', 'peugeot_308.jpg'));
        this._cars.push(new Car('a3', 'Audi A3', 'audi_a3.jpg'));
        this._cars.push(new Car('ss', 'Skoda Spaceback', 'skoda_spaceback.jpg'));
        this._cars.push(new Car('vg', 'VolksWagen Golf', 'volkswagen_golf.png'));
    }

    retrieveCars() {
        return this._cars;
    }

    retrieveCarBykey(key) { }

    addCar(car) { }

    removeCar(key) { }

    updateCar(car) { }
}