import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cientifico } from '../../modelos/cientifico';
import { CientificosMock } from '../../repositories/cientificos-mock';

@Component({
  selector: 'cientificos-tabla',
  templateUrl: './cientificos-tabla.component.html',
  styleUrls: ['./cientificos-tabla.component.css']
})
export class CientificosTablaComponent implements OnInit {
  cientificos: Array<Cientifico> = []

  constructor(private enrutador: Router) { 
  }
  
  ngOnInit(): void {
    setTimeout(
      () => this.cientificos = CientificosMock.recuperarCientificos(),
      1000
    )
  }

  hayCientificos(): boolean {
    return this.cientificos.length === 0 ? true : false;
  }

  mostrarCientifico(id: string): void {
    this.enrutador.navigate(['/cientifico/', id]);
  }
}
