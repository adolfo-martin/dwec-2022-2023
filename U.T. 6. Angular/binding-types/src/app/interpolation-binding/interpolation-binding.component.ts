import { Component } from '@angular/core';

@Component({
  selector: 'interpolation-binding',
  templateUrl: './interpolation-binding.component.html',
  styleUrls: ['./interpolation-binding.component.css']
})
export class InterpolationBindingComponent {
  protected nombre: string = 'Sonia Silverado';
  protected edad: number = 25;
  protected saludo: string = 'Buenos días';
}
