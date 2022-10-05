'use strict';

const states = [
    'Murcia',
    'Andalucía',
    'Castilla-León',
    'Castilla-La Mancha',
    'Aragón',
    'Canarias',
    'Cataluña',
    'Galicia',
    'Asturias',
    'Cantabria',
    'País Vasco',
    'Valencia',
    'Extremadura',
    'Baleares',
    'Madrid',
    'La Rioja',
    'Navarra',
];

const nOl = document.getElementById('tOlStates');

for (const state of states) {
    const nLi = document.createElement('li');
    nOl.appendChild(nLi);

    const nText = document.createTextNode(state);
    nLi.appendChild(nText);
}