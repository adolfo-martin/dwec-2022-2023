import { Component } from '@angular/core';

@Component({
  selector: 'twoways-binding',
  templateUrl: './twoways-binding.component.html',
  styleUrls: ['./twoways-binding.component.css']
})
export class TwowaysBindingComponent {
  protected nombre: string = 'Escribe tu nombre';
}
