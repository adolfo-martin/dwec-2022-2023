import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-app',
  template: `
  <nav>
    <ul>
      <li>
        <a routerLink="/countries-table">Tabla de países</a>
      </li>
      <li>
        <a routerLink="/countries-list">Lista de países</a>
      </li>
      <li>
        <a routerLink="/countries-select">Desplegable de países</a>
      </li>
    </ul>
  </nav>
  `,
  styles: [
    `ul {
      background-color: coral;
      display: flex;
      justify-content: space-around;
      list-style: none;
    }`
  ]
})
export class MenuAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
