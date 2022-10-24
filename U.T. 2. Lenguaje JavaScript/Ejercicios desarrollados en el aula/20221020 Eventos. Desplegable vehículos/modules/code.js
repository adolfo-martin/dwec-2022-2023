import { cars } from './data.js';

document.addEventListener('DOMContentLoaded', function () {
    setupSelectCars();
    fillSelectCars();
});

function setupSelectCars() {
    const nSelect = document.getElementById('tSelCars');
    nSelect.addEventListener('change', showCarPhoto);
}


function fillSelectCars() {
    const nSelect = document.getElementById('tSelCars');

    for (const car of cars) {
        const nOption = document.createElement('option');
        nSelect.appendChild(nOption);
        nOption.setAttribute('value', car.key);
        nOption.setAttribute('data-photo', car.photo);

        const nText = document.createTextNode(car.model);
        nOption.appendChild(nText);
    }
}

function showCarPhoto() {
    const nSelect = document.getElementById('tSelCars');
    const carId = nSelect.value;

    for (const car of cars) {
        if (car.key === carId) {
            const nImage = document.getElementById('tImgCar');
            nImage.src = `./../photos/${car.photo}`;
            break;
        }
    }
}