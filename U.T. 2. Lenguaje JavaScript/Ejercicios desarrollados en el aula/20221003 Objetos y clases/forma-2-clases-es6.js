'use strict';

class Person {
    constructor(firstname, lastname) {
        this._firstname = firstname;
        this._lastname = lastname;
    }

    get firstname() {
        return this._firstname;
    }

    set firstname(value) {
        this._firstname = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0 || value > 120) {
            throw `El valor para la edad no es correcto: ${value}`
        }

        this._age = value;
    }

    fullname() {
        return `${this._firstname} ${this._lastname}`;
    }

}

const person1 = new Person('María', 'Castillo');
const person2 = new Person('Sonia', 'Sánchez');

console.log(person1);
console.log(person2);
console.log(person1._firstname);
console.log(person1.firstname);
person1.firstname = 'Luisa';
console.log(person1.firstname);

try {
    person1.age = -25;
    console.log(person1);
} catch (error) {
    console.log(error);
}

console.log(person1.fullname());