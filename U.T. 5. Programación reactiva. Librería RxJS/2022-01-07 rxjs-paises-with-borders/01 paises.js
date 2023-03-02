import { ajax } from 'rxjs/ajax'
import XMLHttpRequest from 'xhr2'
import { map, mergeMap, take } from 'rxjs/operators'

obtenerPaises$().subscribe(console.log)

function obtenerPaises$() {
    const extraerPaises = ({ response: paises }) => paises
    const cogerNombreEnEspanol = ({ translations: { es: nombre } }) => nombre

    return ajax({
        url: 'https://restcountries.com/v2/all',
        createXHR: () => new XMLHttpRequest(),
        method: 'get',
        responseType: 'json',
        crossDomain: true,
        withCredentials: false,
    }).pipe(
        map(extraerPaises),
        mergeMap(paises => paises),
        take(10),
        map(cogerNombreEnEspanol),
    )
}