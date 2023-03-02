import { ajax } from 'rxjs/ajax';
import { map, take, mergeMap } from 'rxjs/operators';
import XMLHttpRequest from 'xhr2';

retrieveCountries$().subscribe(console.log)

function retrieveCountries$() {
    const extractJson = data => data.response;
    const extractCountries = data => data.countries;
    const descomposeArrayCountries = countries => countries;

    const url = 'http://10.32.155.95:8080/api/countries';
    return ajax({
        url,
        method: 'get',
        responseType: 'json',
        crossDomain: true,
        withCredentials: false,
        createXHR: () => new XMLHttpRequest(),
    }).pipe(
        map(extractJson),
        map(extractCountries),
        mergeMap(descomposeArrayCountries),
        take(10),
    );
}
