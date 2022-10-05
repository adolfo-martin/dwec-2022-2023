'use strict';

const brands = [
    'Seat',
    'Mercedes',
    'Renault',
];

console.table(brands);

brands.push('Volkswagen');
console.table(brands);

brands.push('Lada', 'Tata', 'BYD');
console.table(brands);

const lastBrand = brands.pop();
console.log(lastBrand);
console.table(brands);

const firstBrand = brands.shift();
console.log(firstBrand);
console.table(brands);

brands.unshift('Skoda');
console.table(brands);

brands.push('Seat', 'Ferrari', 'Tesla', 'Citroen', 'Opel');
console.table(brands);
console.table(brands.length);

brands.sort();
console.table(brands);

brands.reverse()
console.table(brands);

function compararPorLongitud(cadena1, cadena2) {
    if (cadena1.length === cadena2.length) {
        return 0;
    }
    if (cadena1.length < cadena2.length) {
        return -1;
    }
    return +1;
}

brands.sort(compararPorLongitud);
console.table(brands);