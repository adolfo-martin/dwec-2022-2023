export class Pokemon {
    constructor(private _name: string, private _url: string) { }

    get name(): string {
        return this._name;
    }

    get url(): string {
        return this._url;
    }
}