function factorial(number) {
    let result = 1;
    for (let i = number; i > 0; i--)
        result *= i;

    return result;
}


function factorialP(number) {
    const promise = new Promise(function (resolve, reject) {
        if (number < 0) {
            reject('You cannot calculate factorial of a negative number');
        } else {
            const result = factorial(number);
            resolve(result);
        }
    });
    return promise;
}


// console.clear();
// console.log('INICIO');
// console.log(factorial(3000000000));
// console.log('FIN')

console.clear();
console.log('INICIO');

factorialP(3000000000)
    .then(result => console.log(result))
    .catch(error => console.log(error));

console.log('FIN')