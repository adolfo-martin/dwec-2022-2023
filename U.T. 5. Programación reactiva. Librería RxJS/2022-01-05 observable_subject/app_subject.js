import { Subject } from 'rxjs'

const randomStream$ = new Subject()

randomStream$.subscribe(console.log)
randomStream$.subscribe(console.log)

for (let i = 1; i <= 10; i++) {
    const number = Math.random()
    randomStream$.next(number)
}

