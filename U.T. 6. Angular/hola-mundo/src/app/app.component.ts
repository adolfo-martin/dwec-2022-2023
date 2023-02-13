import { Component } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = '"Hola mundo"';
  public message: string = 'Esta es nuestra primera aplicación Angular';
  public information: string = 'Angular es un proyecto soportado por Google';
}
