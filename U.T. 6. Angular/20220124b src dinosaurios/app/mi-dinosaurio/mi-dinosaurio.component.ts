import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mi-dinosaurio',
  templateUrl: './mi-dinosaurio.component.html',
  styleUrls: ['./mi-dinosaurio.component.css']
})
export class MiDinosaurioComponent implements OnInit {
  name: string = 'Tiranosaurio Rex';
  class: string = 'carnivoro';
  image: string = '/assets/images/ankylosaurus.png'

  constructor() { }

  ngOnInit(): void {
  }

}
