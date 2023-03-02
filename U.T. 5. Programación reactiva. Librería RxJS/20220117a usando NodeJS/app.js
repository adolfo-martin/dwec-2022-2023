const { range } = require('rxjs');
const { delay, map, filter } = require('rxjs/operators');

const isGreaterThanFive = item => item > 5;
const multiplyByThree = item =>
    ({ originalNumber: item, transformedNumber: item * 3 });

const observable$ = range(1, 10).pipe(
    filter(isGreaterThanFive),
    map(multiplyByThree),
    delay(3000)
);

// observable$.subscribe(console.log)
const observer = {
    next: item => console.log(item),
    complete: () => {
        console.log('🏁');
        // subcription.unsubscribe();
    },
    error: error => console.log(error)
}

const subcription = observable$.subscribe(observer);