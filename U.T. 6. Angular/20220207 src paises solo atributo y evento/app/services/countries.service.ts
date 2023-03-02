import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, map } from 'rxjs';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private _http: HttpClient) { }

  public retrieveCountryByCode$(code: string): Observable<Country> {
    const url = `https://restcountries.com/v2/alpha/${code}`;

    // @ts-ignore
    const extractMajorFields = map(({ alpha3Code, name, capital, population, area }) =>
      new Country(alpha3Code, name, capital, population, area))

    return this._http.get(url).pipe(
      // @ts-ignore
      extractMajorFields,
      delay(1500),
    )
  }
}
