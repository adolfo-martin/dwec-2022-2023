import { Component, OnInit } from '@angular/core';
import { CientificosMock } from '../../repositories/cientificos-mock'
import { Cientifico } from '../../modelos/cientifico'

@Component({
  selector: 'cientificos-lista',
  templateUrl: './cientificos-lista.component.html',
  styleUrls: ['./cientificos-lista.component.css']
})
export class CientificosListaComponent implements OnInit {
  cientificos: Cientifico[] = [];

  constructor() { 
  }
  
  ngOnInit(): void {
    setTimeout(
      ()  => this.cientificos = CientificosMock.recuperarCientificos(),
      1000
    )
  }

}
