import { from, of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

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

vegetables$.pipe(
    concatMap(vegetable => of(vegetable).pipe(
        delay(1000)
    ))
).subscribe(console.log);