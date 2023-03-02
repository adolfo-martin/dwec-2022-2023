
import { zip, of, iif } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { map, mergeMap, concatMap, take } from 'rxjs/operators'
import XMLHttpRequest from 'xhr2'

obtenerPaises$().subscribe(console.log)

//-----------------------------------------------------------------
function obtenerPaises$() {
    const extraerPaises = ({ response: paises }) => paises

    const cogerCodigoNombreEspanolFronteras =
        ({
            name: nombreIngles,
            alpha3Code: codigo,
            translations: { es: nombreEspanol }, borders: fronteras
        }) =>
        ({
            codigo,
            nombre: nombreEspanol ? nombreEspanol : nombreIngles,
            fronteras: fronteras ? fronteras : []
        })

    return ajax({
        url: 'https://restcountries.com/v2/all',
        createXHR: () => new XMLHttpRequest(),
        method: 'get',
        responseType: 'json'
    }).pipe(
        map(extraerPaises),
        mergeMap(paises => paises),
        take(10),
        map(cogerCodigoNombreEspanolFronteras),
        concatMap(pais =>
            zip(
                of(pais.nombre),
                obtenerNombresPaises$(pais.fronteras),
            )
        ),
        map(([nombre, fronteras]) => ({ nombre, fronteras }))
    )
}
//-----------------------------------------------------------------
function obtenerNombresPaises$(codigos) {
    return iif(
        () => codigos.length === 0,
        of([]),
        zip(...codigos.map(obtenerNombrePais$))
    )
}
//-----------------------------------------------------------------
function obtenerNombrePais$(codigo) {
    const extraerPais = ({ response: pais }) => pais
    const cogerNombreEspanol = ({ translations: { es: nombre } }) => nombre

    return ajax({
        url: `https://restcountries.com/v2/alpha/${codigo}`,
        createXHR: () => new XMLHttpRequest(),
        method: 'get',
        responseType: 'json'
    })
        .pipe(
            map(extraerPais),
            map(cogerNombreEspanol),
        )
}
//-----------------------------------------------------------------
