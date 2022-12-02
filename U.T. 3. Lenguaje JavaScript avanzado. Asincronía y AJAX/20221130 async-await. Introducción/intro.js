function getNumber() {
    return 7;
}

function getNumberPromise() {
    return new Promise(function (resolve, reject) {
        //calculo largo
        if (false) {
            resolve(7);
        } else {
            reject('Hay un problema');
        }
    });
}

async function getNumberAsync() {
    if (false)
        return 7;
    else
        throw 'Hay un problema';
}


// console.log(getNumber());

// getNumberPromise()
//     .then(console.log)
//     .catch(console.error);

// getNumberAsync()
//     .then(number => console.log(number))
//     .catch(error => console.error(error));
// console.log('FIN');

try {
    const number = await getNumberAsync();
    console.log(number);
    console.log('FIN');
} catch (error) {
    console.error(error);
}
