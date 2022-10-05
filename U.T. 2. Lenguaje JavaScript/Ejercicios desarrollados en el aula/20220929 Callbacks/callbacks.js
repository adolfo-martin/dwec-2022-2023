'use strict';

const sumar = (a, b) => a + b;


function factorial(numero) {
    let resultado = 1;
    for (let i = numero; i > 0; i--) {
        resultado *= i;
    }
    return resultado;
}


function operarYMostrar(callback, operando1, operando2) {
    const resultado = callback(operando1, operando2);
    console.log(`El resultado de la operación es ${resultado}`)
}

operarYMostrar(sumar, 7, 9);
operarYMostrar(factorial, 4);