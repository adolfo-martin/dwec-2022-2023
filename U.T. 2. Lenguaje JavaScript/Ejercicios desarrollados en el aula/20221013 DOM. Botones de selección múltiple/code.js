import { employees } from './repository.js';

function retrieveCategories() {
    const categories = new Set();

    for (const employee of employees) {
        categories.add(employee.categoria);
    }

    return categories;
}

const categories = retrieveCategories();
console.log(categories);