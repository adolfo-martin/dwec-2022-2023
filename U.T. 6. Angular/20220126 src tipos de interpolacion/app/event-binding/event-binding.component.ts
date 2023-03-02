import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  letraBoton: string = 'Ninguna'

  constructor() { }

  ngOnInit(): void {
  }

  registrarLetra(letra: string) {
    this.letraBoton = letra;
  }

}
