import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { MenuAppComponent } from './menu-app/menu-app.component';
import { RouterModule, Routes } from '@angular/router';
import { CountriesTableComponent } from './countries-table/countries-table.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { CountriesSelectComponent } from './countries-select/countries-select.component';
import { ErrorRecursoNoEncontradoComponent } from './error-recurso-no-encontrado/error-recurso-no-encontrado.component';
import { CountriesPresentationComponent } from './countries-presentation/countries-presentation.component';

const routes: Routes = [
  { path: '', component: CountriesPresentationComponent, pathMatch: 'full' },
  { path: 'countries-table', component: CountriesTableComponent },
  { path: 'countries-list', component: CountriesListComponent },
  { path: 'countries-select', component: CountriesSelectComponent },
  { path: 'country/:code', component: CountryDetailsComponent },
  { path: '**', component: ErrorRecursoNoEncontradoComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    CountryDetailsComponent,
    MenuAppComponent,
    CountriesTableComponent,
    CountriesListComponent,
    CountriesSelectComponent,
    ErrorRecursoNoEncontradoComponent,
    CountriesPresentationComponent
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
