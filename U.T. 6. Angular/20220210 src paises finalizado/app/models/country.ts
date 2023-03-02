export class Country {
    constructor(
        private _code: string,
        private _name: string,
        private _capital: string,
        private _population: number,
        private _area: number
    ) { }

    public get code(): string {
        return this._code;
    }

    public get name(): string {
        return this._name;
    }

    public get capital(): string {
        return this._capital;
    }

    public get population(): number {
        return this._population;
    }

    public get area(): number {
        return this._area;
    }
}
