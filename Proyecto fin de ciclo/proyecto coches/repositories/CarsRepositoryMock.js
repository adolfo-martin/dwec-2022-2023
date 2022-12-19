import Car from '../entities/Car.js';

export default class CarsRepositoryMock {
    static _cars = [
        new Car('5786', 'Testarossa', 'Ferrari'),
        new Car('8713', 'Model 3', 'Tesla'),
        new Car('7139', 'Ibiza', 'Seat'),
    ];

    createCar(uuid, model, brand) {
        const car = new Car(uuid, model, brand);
        CarsRepositoryMock._cars.push(car);
    }

    retrieveCars() {
        return CarsRepositoryMock._cars;
    }
}

// interface CarsRepositoryInterface {
//     retrieveCars();
//     retrieveCarByUuid();
//     createCar(uuid, model, brand);
// }