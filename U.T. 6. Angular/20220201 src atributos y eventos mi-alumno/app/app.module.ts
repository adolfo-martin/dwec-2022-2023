import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiEtiquetaComponent } from './mi-etiqueta/mi-etiqueta.component';
import { MiAlumnoComponent } from './mi-alumno/mi-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    MiEtiquetaComponent,
    MiAlumnoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
