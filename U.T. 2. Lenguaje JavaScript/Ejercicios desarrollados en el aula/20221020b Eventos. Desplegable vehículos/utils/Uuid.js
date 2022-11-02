export class Uuid {
    static generate() {
        const number1 = Uuid._generateRandomNumber();
        const number2 = Uuid._generateRandomNumber();
        const number3 = Uuid._generateRandomNumber();
        const number4 = Uuid._generateRandomNumber();

        return `${number1}-${number2}-${number3}-${number4}`;
    }

    static _generateRandomNumber() {
        return Math.floor(Math.random() * 9999);
    }
}