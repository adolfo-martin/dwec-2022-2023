import { from, timer, zip } from 'rxjs';
//import { filter } from 'rxjs/operators';

const sequence$ = timer(1000, 3000);

const vegetables = [
    'tomato',
    'apple',
    'melon',
    'strawberry',
    'orange',
    'lettuce',
    'cucumber',
    'artichoke',
    'olive',
    'banana',
]

const vegetables$ = from(vegetables);

const result$ = zip(sequence$, vegetables$)
//result$.subscribe(items => console.log(items[1]));
result$.subscribe(([_, vegetable]) => console.log(vegetable));