import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map, Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private _http: HttpClient) { }

  public retrievePokemons$(): Observable<Pokemon[]> {
    const url = 'https://pokeapi.co/api/v2/pokemon';

    const extractResult = (data: { results: { name: string, url: string }[] }) => data.results;
    const convertObjectsToPokemons = (pokemons: { name: string, url: string }[]) => pokemons.map(convertObjectToPokemon);
    const convertObjectToPokemon = (pokemon: { name: string, url: string }) => new Pokemon(pokemon.name, pokemon.url);

    return this._http.get<{ results: Array<{ name: string, url: string }> }>(url)
      .pipe<Array<{ name: string, url: string }>, Array<Pokemon>, Array<Pokemon>>(
        map(extractResult),
        map(convertObjectsToPokemons),
        delay(3000),
      )
  }
}
