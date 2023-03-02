import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map, Observable } from 'rxjs';
import { Country } from '../models/country'

@Injectable({
  providedIn: 'root'
})
export class Countries2Service {

  constructor(private _http: HttpClient) { }

  public retrieveCountries$(): Observable<Country[]> {
    const url = 'https://restcountries.com/v2/all';

    // @ts-ignore
    const convertExternalCountryToCountry = ({ alpha3Code, name, capital, population, area }) =>
      new Country(alpha3Code, name, capital, population, area)

    return this._http.get(url).pipe(
      // @ts-ignore
      map(countries => countries.map(convertExternalCountryToCountry)),
      delay(2000),
    );
  }
}
