import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { MenuAppComponent } from './menu-app/menu-app.component';
import { RouterModule, Routes } from '@angular/router';
import { CountriesTableComponent } from './countries-table/countries-table.component';
import { CountriesListComponent } from './countries-list/countries-list.component';

const routes: Routes = [
  { path: 'countries-table', component: CountriesTableComponent },
  { path: 'countries-list', component: CountriesListComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    CountryDetailsComponent,
    MenuAppComponent,
    CountriesTableComponent,
    CountriesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
