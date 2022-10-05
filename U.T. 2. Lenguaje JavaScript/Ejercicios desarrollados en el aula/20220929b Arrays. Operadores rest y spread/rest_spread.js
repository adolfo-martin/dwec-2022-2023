'use strict';

const fruits = [
    'apple',
    'strawberry',
    'peach',
    'banana',
    'tomato',
    'melon',
]

console.log(fruits);

// spread ...
const fruits2 = ['watermelon', 'coco', ...fruits, 'kiwi'];
console.log(fruits2);

// deconstrucción de arrays
const [fruit1, fruit2, fruit3, fruit4] = fruits2;

// rest ... con deconstrucción de arrays
const [fruit01, fruit02, fruit03, ...fruits03] = fruits2;
console.log(fruit01)
console.log(fruits03)
