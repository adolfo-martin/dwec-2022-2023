import { Cientifico } from '../modelos/cientifico';

export class CientificosMock {
    private static cientificos = [
        new Cientifico('mc', 'Marie Curie', 'polaca', 'Física'),
        new Cientifico('sr', 'Santiago Ramón y Cajas', 'española', 'Biología'),
        new Cientifico('al', 'Ada Lovelace', 'inglesa', 'Matemáticas'),
        new Cientifico('nt', 'Nicola Tesla', 'italiana', 'Física'),
        new Cientifico('lp', 'Louis Pasteur', 'francesa', 'Biología'),
    ]

    public static recuperarCientificos(): Array<Cientifico> {
        return CientificosMock.cientificos;
    }

    public static recuperarCientificoPorId(id: string): Cientifico {
        const cientifico = CientificosMock.cientificos.find(cientifico => cientifico.id === id);
        if (!cientifico) {
            throw new Error(`No existe el ciéntifico con código ${id}`)
        }
        return cientifico
    }
}
