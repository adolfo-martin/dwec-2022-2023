import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cientifico } from '../../modelos/cientifico';
import { CientificosMock } from '../../repositories/cientificos-mock';

@Component({
  selector: 'cientifico-detalle',
  templateUrl: './cientifico-detalle.component.html',
  styleUrls: ['./cientifico-detalle.component.css']
})
export class CientificoDetalleComponent implements OnInit {
  cientifico: Cientifico | undefined;

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    setTimeout( 
      () => {
        const id: string | null = this.ruta.snapshot.paramMap.get('id');
        if (!id) {
          throw new Error('En la url no aparece el código de científico');
        }
        this.cientifico = CientificosMock.recuperarCientificoPorId(id);
      }, 
      1000)
  }

}