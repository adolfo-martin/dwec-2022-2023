import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { PokemonsService } from '../services/pokemons.service';

@Component({
  selector: 'pokemons-table',
  templateUrl: './pokemons-table.component.html',
  styleUrls: ['./pokemons-table.component.css']
})
export class PokemonsTableComponent implements OnInit {
  pokemons$: Observable<Pokemon[]>

  constructor(private _pokemonsService: PokemonsService) {
    this.pokemons$ = this._pokemonsService.retrievePokemons$();
  }

  ngOnInit(): void {
  }

}
