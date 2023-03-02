import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  url: string = 'https://angular.io/';
  texto: string = 'Sitio web oficial del framework Angular';
  objetivo: string = '_blank'

  constructor() { }

  ngOnInit(): void {
  }

}
