export class Cientifico {
    constructor(
        private _id: string,
        private _nombre: string,
        private _nacionalidad: string,
        private _areaConocimiento: string) {
    }

    public get id(): string {
        return this._id;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(valor: string) {
        this._nombre = valor;
    }

    public get nacionalidad(): string {
        return this._nacionalidad;
    }

    public set nacionalidad(valor: string) {
        this._nacionalidad = valor;
    }

    public get areaConocimiento(): string {
        return this._areaConocimiento;
    }

    public set areaConocimiento(valor: string) {
        this._areaConocimiento = valor;
    }
}
