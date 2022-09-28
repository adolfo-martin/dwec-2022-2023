'use strict';

// Primera forma: normal
// function mostrarMayoriaEdad(nombre, apellidos, edad) {
//     if (edad < 18) {
//         const mensaje = `Soy ${nombre} ${apellidos} y soy menor de edad`;
//         console.log(mensaje);
//     } else {
//         const mensaje = `Soy ${nombre} ${apellidos} y soy mayor de edad`;
//         console.log(mensaje);
//     }
// }

// Segunda forma: first class values
// const mostrarMayoriaEdad = function (nombre, apellidos, edad) {
//     if (edad < 18) {
//         const mensaje = `Soy ${nombre} ${apellidos} y soy menor de edad`;
//         console.log(mensaje);
//     } else {
//         const mensaje = `Soy ${nombre} ${apellidos} y soy mayor de edad`;
//         console.log(mensaje);
//     }
// }

// Tercera forma: funciones lambda o flecha
// const mostrarMayoriaEdad = (nombre, apellidos, edad) => {
//     if (edad < 18) {
//         const mensaje = `Soy ${nombre} ${apellidos} y soy menor de edad`;
//         console.log(mensaje);
//     } else {
//         const mensaje = `Soy ${nombre} ${apellidos} y soy mayor de edad`;
//         console.log(mensaje);
//     }
// }

// Operador ternario if-else abreviado
// const mostrarMayoriaEdad = (nombre, apellidos, edad) => {
//     const mensaje = edad < 18 
//         ? `Soy ${nombre} ${apellidos} y soy menor de edad` 
//         : `Soy ${nombre} ${apellidos} y soy mayor de edad`;

//     console.log(mensaje);
// }

// mostrarMayoriaEdad('Lucas', 'Jiménez', 21);
// mostrarMayoriaEdad('Jimena', 'Sánchez', 13);


// const esMayorEdad = edad => edad > 18 ? true : false;
// const esMayorEdad = edad => edad > 18;


// console.log(esMayorEdad(25));
// console.log(esMayorEdad(10));

//--------------------------------------------------------
const GRAVEDAD_NEWTON = 9.8;

// function calcularPeso(masa) {
//     return masa * GRAVEDAD_NEWTON;
// }

const calcularPeso = masa => masa * GRAVEDAD_NEWTON;


console.log(calcularPeso(5))