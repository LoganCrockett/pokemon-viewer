import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemon: any = {};

  constructor(private pokemonService: PokemonService, private http: HttpClient) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe((result) => {
      this.pokemon = result;
    });
  }
}
