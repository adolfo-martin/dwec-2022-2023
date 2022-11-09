import { datosEmpresa as employees } from "./datos_empresa.js";

// console.log(showEmployeesQuantity());
// console.log(showManagersQuantityLegacyWay());
// console.log(showManagersQuantityModernWay());
// console.log(showBlondeComputerGuyQuantity());
console.table(showFiveFirstComputerGuys());

//--------------------------------------
function showEmployeesQuantity() {
    return employees.length;
}

//--------------------------------------
function showManagersQuantityLegacyWay() {
    let contador = 0;
    for (const employee of employees) {
        if (employee.categoria === 'gerente') {
            contador++;
        }
    }

    return contador;
}

//--------------------------------------
function showManagersQuantityModernWay() {
    // function isManager(employee) {
    //     if (employee.categoria === 'gerente') {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // function isManager(employee) {
    //     return employee.categoria === 'gerente' ? true : false;
    // }

    // function isManager(employee) {
    //     return employee.categoria === 'gerente';
    // }

    const isManager = employee => employee.categoria === 'gerente';

    const managers = employees.filter(isManager);
    return managers.length;
}

//--------------------------------------
function showBlondeComputerGuyQuantity() {
    // const isBlonde = employee => employee.colorPelo === 'rubio';
    // const isComputerGuy = employee => employee.categoria === 'informatico';

    const isBlonde = ({ colorPelo }) => colorPelo === 'rubio';
    const isComputerGuy = ({ categoria }) => categoria === 'informatico';

    const blondeComputerGuys = employees
        .filter(isBlonde)
        .filter(isComputerGuy);
    return blondeComputerGuys.length;
}

//--------------------------------------
function showFiveFirstComputerGuys() {
    const isComputerGuy = ({ categoria }) => categoria === 'informatico';

    // function getFullName(employee) {
    //     return `${employee.nombre} ${employee.apellido}`;
    // }

    const getFullName = ({ nombre, apellido }) => `${nombre} ${apellido}`;

    // function isFiveFirst(_, index) {
    //     if (index < 5) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    const isFiveFirst = (_, index) => index < 5;

    function orderByLastName(employee1, employee2) {
        if (employee1.apellido.localeCompare(employee2.apellido) === 0) {

        }
    }

    return employees
        .filter(isComputerGuy)
        .filter(isFiveFirst)
        .map(getFullName)
        .sort()
}
