import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mi-alumno',
  templateUrl: './mi-alumno.component.html',
  styleUrls: ['./mi-alumno.component.css']
})
export class MiAlumnoComponent implements OnInit {

  @Input() nombre: string = '';

  private _edad: number = 0;
  @Input() set edad(valor: string) {
    const edad: number = parseInt(valor);
    this._edad = edad > 0 ? edad : 0;
  }

  @Output('onsuspenso') suspensoEmitter = new EventEmitter<number>();
  @Output('onaprobado') aprobadoEmitter = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    setTimeout(

      () => {
        function generarAleatorio(): number {
          return Math.floor(Math.random() * 10 + 1);
        }

        const calificacion: number = generarAleatorio();
        if (calificacion < 5) {
          this.suspensoEmitter.emit(calificacion);
        } else {
          this.aprobadoEmitter.emit(calificacion);
        }
      },
      5000
    )
  }

}
