function generateRandomNumber(lowerLimit, upperLimit) {
    return Math.floor(Math.random() * (upperLimit - lowerLimit + 1) + lowerLimit);
}

console.clear();

miliseconds = generateRandomNumber(1000, 5000);

console.log(`Los milisegundos generados son ${miliseconds}`)

setTimeout(
    () => console.log(`Hola, has tenido que esperar ${miliseconds} miliseguntos`),
    miliseconds
);

console.log('FIN!')