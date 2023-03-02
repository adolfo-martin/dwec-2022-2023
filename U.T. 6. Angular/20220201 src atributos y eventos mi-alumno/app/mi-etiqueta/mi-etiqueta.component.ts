import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MiEtiquetaEventInterface } from './mi-etiqueta-event-interface';

@Component({
  selector: 'mi-etiqueta',
  templateUrl: './mi-etiqueta.component.html',
  styleUrls: ['./mi-etiqueta.component.css']
})
export class MiEtiquetaComponent implements OnInit {

  @Input('mensaje') mensajeRecibido: string = '';

  @Output('onmensaje') private emisorMensaje = new EventEmitter<MiEtiquetaEventInterface>();

  constructor() { }

  ngOnInit(): void {
    const esta = this;

    class Event implements MiEtiquetaEventInterface {
      getMessage(): string {
        return `Hola, saludos desde la etiqueta <mi-etiqueta>`;
      }
      getTarget(): MiEtiquetaComponent {
        return esta;
      }
      getTimestamp(): number {
        return new Date().getTime();
      }
    }

    setTimeout(
      () => this.emisorMensaje.emit(new Event()),
      5000
    )
  }

}
