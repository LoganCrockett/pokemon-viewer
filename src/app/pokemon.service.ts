import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemon(page?: any, perPage?: any) {
    let params = new HttpParams();
    params = params.set("offset", page);
    params = params.set("limit", perPage);

    return this.http.get('https://pokeapi.co/api/v2/pokemon/', {
      params: params,
    });
  }

  getPokemonInformation(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  getAbilityInformation(ability: string) {
    return this.http.get(`https://pokeapi.co/api/v2/ability/${ability}`);
  }
}
