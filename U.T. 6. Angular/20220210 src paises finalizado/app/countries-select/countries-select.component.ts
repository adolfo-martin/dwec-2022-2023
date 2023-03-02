import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country';
import { Countries2Service } from '../services/countries2.service';

@Component({
  selector: 'countries-select',
  templateUrl: './countries-select.component.html',
  styleUrls: ['./countries-select.component.css']
})
export class CountriesSelectComponent implements OnInit {
  countries$: Observable<Country[]>

  constructor(private _countriesService: Countries2Service) {
    this.countries$ = this._countriesService.retrieveCountries$()
  }

  ngOnInit(): void {
  }

}
