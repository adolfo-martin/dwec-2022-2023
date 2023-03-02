import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'interpolation-binding',
  templateUrl: './interpolation-binding.component.html',
  styleUrls: ['./interpolation-binding.component.css']
})
export class InterpolationBindingComponent implements OnInit {

  nombre: string = 'Sonia Castillo';
  edad: number = 25;
  saludo: string = 'Buenos días';

  constructor() { }

  ngOnInit(): void {
  }

}
