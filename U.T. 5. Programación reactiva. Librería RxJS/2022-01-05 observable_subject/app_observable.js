import { Observable } from 'rxjs'

const randomStream$ = new Observable(subscriber => {
    for (let i = 1; i <= 10; i++) {
        const number = Math.random()
        subscriber.next(number)
    }
})

randomStream$.subscribe(console.log)
randomStream$.subscribe(console.log)
