import { of, zip } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, take, mergeMap, concatMap } from 'rxjs/operators';
import XMLHttpRequest from 'xhr2';

// retrieveCountries$().subscribe(console.log)
// retrieveBordersByCode$('MAR').subscribe(console.log);
// retrieveNameByCode$('DZA').subscribe(console.log);
// retrieveNameByCode$('ESH').subscribe(console.log);
retrieveCountriesWithBorders$().subscribe(console.log)


function retrieveCountriesWithBorders$() {
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
        take(3),
        concatMap(country =>
            zip(
                of(country),
                retrieveBordersByCode$(country.code))
        ),
        concatMap(country =>
            zip(
                of(country),
                retrieveBordersByCode$(country.code))
        ),
        concatMap(country =>
            of(country[0]),
        )
    );
}

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
        take(3),
    );
}

function retrieveBordersByCode$(code) {
    const extractJson = data => data.response;
    const extractBorders = country => country.borders;

    const url = `https://restcountries.com/v2/alpha/${code}`;
    return ajax({
        url,
        method: 'get',
        responseType: 'json',
        crossDomain: true,
        withCredentials: false,
        createXHR: () => new XMLHttpRequest(),
    }).pipe(
        map(extractJson),
        map(extractBorders)
    );
}

function retrieveNameByCode$(code) {
    const extractJson = data => data.response;
    const extractName = country => country.name;

    const url = `https://restcountries.com/v2/alpha/${code}`;
    return ajax({
        url,
        method: 'get',
        responseType: 'json',
        crossDomain: true,
        withCredentials: false,
        createXHR: () => new XMLHttpRequest(),
    }).pipe(
        map(extractJson),
        map(extractName)
    );
}