'use strict';

const brands = [
    { key: 'ho', name: 'Honda' },
    { key: 'su', name: 'Suzuki' },
    { key: 'ka', name: 'Kawasaki' },
    { key: 'de', name: 'Derbi' },
    { key: 'bu', name: 'Bultaco' },
    { key: 'hd', name: 'Harley-Davidson' },
    { key: 'pi', name: 'Piaggio' },
    { key: 'in', name: 'Indian' },
    { key: 'ki', name: 'Kimco' },
];


const nSelect = document.getElementById('tSelBrands');

for (const brand of brands) {
    const nOption = document.createElement('option');
    nSelect.appendChild(nOption);
    nOption.setAttribute('value', brand['key']);

    const nText = document.createTextNode(brand['name']);
    nOption.appendChild(nText);
}



