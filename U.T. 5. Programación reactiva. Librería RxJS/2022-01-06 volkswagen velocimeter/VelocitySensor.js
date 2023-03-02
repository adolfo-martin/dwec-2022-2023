const { Subject, from: fromArray, of } = rxjs
const { concatMap, delay } = rxjs.operators

export default class VelocitySensor {
    // static _sensor$ = undefined;

    constructor() {
        if (!VelocitySensor._sensor$)
            VelocitySensor._sensor$ = new Subject()
    }

    getSensor$() {
        return VelocitySensor._sensor$
    }

    activate() {
        const velocities = [100, 105, 125, 110, 95, 115, 120, 90, 105, 100]
        fromArray(velocities).pipe(
            concatMap(velocity =>
                of(velocity).pipe(delay(3000))
            )
        ).subscribe(velocity => VelocitySensor._sensor$.next(velocity))
    }
}