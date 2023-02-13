import { Component } from '@angular/core';

@Component({
  selector: 'event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  protected letra: string = 'Ninguna';

  protected registrarLetra(letra: string) {
    this.letra = letra;
  }
}
