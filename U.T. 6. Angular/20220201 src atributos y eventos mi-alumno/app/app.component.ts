import { Component } from '@angular/core';
import { MiEtiquetaEventInterface } from './mi-etiqueta/mi-etiqueta-event-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hola-mundo';
  mensaje: string = '';

  mensajeRecibido: string = '';

  procesarMensaje(e: MiEtiquetaEventInterface): void {
    this.mensajeRecibido = e.getMessage();
    console.log(e.getTarget());
    console.log(e.getTimestamp());
  }

  mostrarMensaje(calificacion: number) {
    this.mensaje = `Tu calificación ha sido ${calificacion}`
  }
}
