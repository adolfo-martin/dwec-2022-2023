'use strict';

const person1 = {
    firstname: 'Pepe',
    lastname: 'López',
    fullname1() {
        return `${this.firstname} ${this.lastname}`;
    },
    fullname2: function () {
        return `${this.firstname} ${this.lastname}`;
    },
    fullname3: () => `${this.firstname} ${this.lastname}`,
}

console.log(person1);
console.log(person1.fullname1());
console.log(person1.fullname2());
console.log(person1.fullname3());