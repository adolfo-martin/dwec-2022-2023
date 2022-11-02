import { CarsRepositoryMock } from './repositories/CarsRepositoryMock.js';

document.addEventListener('DOMContentLoaded', setup);

function setup(e) {
    showCarsAsCheckboxes();
}

function showCarsAsCheckboxes() {
    const repository = new CarsRepositoryMock();
    const cars = repository.retrieveCars();

    const nDiv = document.getElementById('tDivCars');

    for (const car of cars) {
        const nCheckbox = document.createElement('input');
        nDiv.appendChild(nCheckbox);
        nCheckbox.setAttribute('type', 'checkbox');
        nCheckbox.setAttribute('id', `tChk${car.key}`);
        // nCheckbox.setAttribute('onchange', `addCarToTable('${car.model}', '${car.photo}')`);
        // nCheckbox.onchange = addCarToTable;
        nCheckbox.setAttribute('data-model', car.model);
        nCheckbox.setAttribute('data-photo', car.photo);
        nCheckbox.setAttribute('data-key', car.key);
        nCheckbox.addEventListener('change', addCarToTable);

        const nLabel = document.createElement('label');
        nDiv.appendChild(nLabel);
        nLabel.setAttribute('for', `tChk${car.key}`);

        const nText = document.createTextNode(car.model);
        nLabel.appendChild(nText);
    }

}

function addCarToTable(e) {
    const nCheckbox = e.target;
    const model = nCheckbox.dataset.model;
    const photo = nCheckbox.dataset.photo;
    const key = nCheckbox.dataset.key;

    const nTBody = document.getElementById('tTbdCars');

    if (nCheckbox.checked) {
        const nTr = document.createElement('tr');
        nTBody.appendChild(nTr);
        nTr.setAttribute('id', `tTr${key}`)

        const nTdModel = document.createElement('td');
        nTr.appendChild(nTdModel);

        const nTextModel = document.createTextNode(model);
        nTdModel.appendChild(nTextModel);

        const nTdPhoto = document.createElement('td');
        nTr.appendChild(nTdPhoto);

        const nImg = document.createElement('img');
        nTdPhoto.appendChild(nImg);
        nImg.setAttribute('src', `./assets/${photo}`);
    } else {
        const nTr = document.getElementById(`tTr${key}`);
        nTBody.removeChild(nTr);
    }

}