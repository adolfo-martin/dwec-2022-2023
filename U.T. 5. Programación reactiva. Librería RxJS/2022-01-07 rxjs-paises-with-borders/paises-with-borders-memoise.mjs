// npm init
// npm install rxjs
// npm install xmlhttprequest

import { zip, of } from 'rxjs'
import { ajax } from 'rxjs/ajax/index.js'
import { XMLHttpRequest } from 'xmlhttprequest'
import { map, mergeMap, concatMap, take, filter, tap } from 'rxjs/operators/index.js'

obtenerPaises$().subscribe(console.log)
//obtenerNombrePais$('esp').subscribe(console.log)
//obtenerNombresPaises$(['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN']).subscribe(console.log)

const paisesNombres = new Map();

//-----------------------------------------------------------------
function obtenerPaises$() {

    const url = 'https://restcountries.eu/rest/v2/all'

    const extraerPaises = ({ response: paises }) => paises

    const cogerNombreEnEspanol = ({ translations: { es: nombre } }) => nombre

    const cogerCodigoNombreEspanolFronteras =
        ({ name: nombreIngles, alpha3Code: codigo, translations: { es: nombreEspanol }, borders: fronteras }) =>
            ({ codigo, nombre: nombreEspanol ? nombreEspanol : nombreIngles, fronteras })

    return ajax({
        url,
        createXHR: () => new XMLHttpRequest(),
        method: 'get',
        responseType: 'json'
    })
        .pipe(
            map(extraerPaises),
            mergeMap(paises => paises),
            //take(3),
            map(cogerCodigoNombreEspanolFronteras),
            //filter(pais => !pais.nombre),
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
function obtenerNombrePais$(codigo) {
    if (paisesNombres.has(codigo)) {
        return of(paisesNombres.get(codigo))
    }

    const url = `https://restcountries.eu/rest/v2/alpha/${codigo}`

    const extraerPais = ({ response: pais }) => pais

    const cogerNombreEspanol = ({ translations: { es: nombre } }) => nombre

    return ajax({
        url,
        createXHR: () => new XMLHttpRequest(),
        method: 'get',
        responseType: 'json'
    })
        .pipe(
            map(extraerPais),
            map(cogerNombreEspanol),
            tap(nombre => paisesNombres.set(codigo, nombre)),
        )
}
//-----------------------------------------------------------------
function obtenerNombresPaises$(codigos) {
    return zip(...codigos.map(obtenerNombrePais$))
}
//-----------------------------------------------------------------
