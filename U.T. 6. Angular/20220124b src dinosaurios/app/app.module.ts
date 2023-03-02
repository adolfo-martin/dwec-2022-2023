import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiDinosaurioComponent } from './mi-dinosaurio/mi-dinosaurio.component';

@NgModule({
  declarations: [
    AppComponent,
    MiDinosaurioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
