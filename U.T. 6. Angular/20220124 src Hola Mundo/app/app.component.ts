import { Component } from '@angular/core';

@Component({
  selector: 'hola-mundo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '"Hola Mundo"';
  message = 'Esta es nuestra primera aplicación Angular';
  information = 'Angular es un proyecto soportado por Google'
}
