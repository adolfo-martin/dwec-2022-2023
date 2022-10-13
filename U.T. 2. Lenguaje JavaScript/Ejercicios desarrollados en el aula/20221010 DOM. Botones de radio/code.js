import { typesOfStreet } from './data.js';


export function showTypesOfStreet() {
    const nDiv = document.getElementById('tDivTypeOfStreet');

    for (const type of typesOfStreet) {
        const nRadio = document.createElement('input');
        nDiv.appendChild(nRadio);
        nRadio.setAttribute('type', 'radio');
        nRadio.setAttribute('name', 'typeOfStreet');
        nRadio.setAttribute('id', 'tRad' + type.shortName);
        nRadio.setAttribute('value', type.shortName);

        const nLabel = document.createElement('label');
        nDiv.appendChild(nLabel);
        nLabel.setAttribute('for', 'tRad' + type.shortName);

        const nText = document.createTextNode(type.longName);
        nLabel.appendChild(nText);
    }
}