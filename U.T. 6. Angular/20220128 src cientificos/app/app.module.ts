import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CientificosListaComponent } from './cientificos-lista/cientificos-lista.component';
import { EncabezadoMenuComponent } from './encabezado-menu/encabezado-menu.component';
import { CientificosTablaComponent } from './cientificos-tabla/cientificos-tabla.component';
import { CientificoDetalleComponent } from './cientifico-detalle/cientifico-detalle.component';

const rutas: Routes = [
  { path: 'cientificos-lista', component: CientificosListaComponent},
  { path: 'cientificos-tabla', component: CientificosTablaComponent},
  { path: 'cientifico/:id', component: CientificoDetalleComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    CientificosListaComponent,
    EncabezadoMenuComponent,
    CientificosTablaComponent,
    CientificoDetalleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
