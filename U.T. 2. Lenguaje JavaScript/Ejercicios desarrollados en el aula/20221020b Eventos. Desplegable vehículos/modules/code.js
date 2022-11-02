import { Vehicle } from '../entities/Vehicle.js';
import { cars } from './data.js';

document.addEventListener('DOMContentLoaded', function () {
    setupSelectCars();
    fillSelectCars();
});


function getVehicles() {
    // const vehicles = [];

    // for (const car of cars) {
    //     // const name_as_array = car.name.split(' ');
    //     // const brand = name_as_array[0];
    //     // const model = name_as_array[1];

    //     // deconstrucción de arreglos
    //     const [brand, model] = car.name.split(' ');
    //     const vehicle = new Vehicle(brand, model);
    //     vehicles.push(vehicle);
    // }

    // console.log(vehicles);
    // return vehicles;

    function transformCarToVehicle(car) {
        const [brand, model, photo] = car.name.split(' ');
        const vehicle = new Vehicle(brand, model);
        vehicle.photo = photo;
        return vehicle;
    }

    const vehicles = cars.map(transformCarToVehicle);
    return vehicles;
}


function setupSelectCars() {
    const nSelect = document.getElementById('tSelCars');
    nSelect.addEventListener('change', showCarPhoto);
}


function fillSelectCars() {
    const vehicles = getVehicles();

    const nSelect = document.getElementById('tSelCars');

    vehicles.forEach(vehicle => {
        const nOption = document.createElement('option');
        nSelect.appendChild(nOption);
        nOption.setAttribute('value', vehicle.id);
        nOption.setAttribute('data-photo', vehicle.photo);

        const nText = document.createTextNode(`${vehicle.brand} ${vehicle.model}`);
        nOption.appendChild(nText);
    })
}

function showCarPhoto() {
    const nSelect = document.getElementById('tSelCars');
    const vehicleId = nSelect.value;

    const vehicles = getVehicles();
    const vehicle = vehicles.find(vehicle => vehicle.id === vehicleId);

    const nImage = document.getElementById('tImgCar');
    nImage.src = `./../photos/${vehicle.photo}`;
}