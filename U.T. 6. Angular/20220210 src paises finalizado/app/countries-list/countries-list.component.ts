import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country';
import { Countries2Service } from '../services/countries2.service';

@Component({
  selector: 'countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {
  countries$: Observable<Country[]>

  constructor(private _countriesService: Countries2Service) {
    this.countries$ = this._countriesService.retrieveCountries$();
  }

  ngOnInit(): void {
  }

}
