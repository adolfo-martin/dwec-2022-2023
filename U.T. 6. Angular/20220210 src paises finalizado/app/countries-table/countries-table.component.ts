import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Country } from '../models/country';
import { Countries2Service } from '../services/countries2.service';

@Component({
  selector: 'countries-table',
  templateUrl: './countries-table.component.html',
  styleUrls: ['./countries-table.component.css']
})
export class CountriesTableComponent implements OnInit {

  countries$: Observable<Country[]>

  constructor(
    private _countriesService: Countries2Service,
    private _router: Router
  ) {
    this.countries$ = this._countriesService.retrieveCountries$();
  }

  ngOnInit(): void {
  }

  sendToCountryDetails(countryCode: string): void {
    this._router.navigate(['/country/', countryCode]);
  }
}
