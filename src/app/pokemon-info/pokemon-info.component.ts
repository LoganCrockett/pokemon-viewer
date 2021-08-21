import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

interface Pokemon {
  abilities: [{
    ability: {
      name: string,
      url?: string,
    },
    is_hidden?: boolean,
    slot?: number,
  }],
  base_experience: 0,
  forms: [],
  game_indices: [],
  height: 0,
  held_items: [],
  id: 0,
  is_default: true,
  location_area_encounters: '',
  moves: [],
  name: '',
  order: 0,
  past_types: [],
  species: {},
  sprites: {
    front_default?: string,
  },
  stats: [{
    base_stat: number,
    stat: {
      name: '',
    },
  }],
  types: [{
    slot: number,
    type: {
      name: string,
      url?: '',
    },
  }],
  weight: 0,
}

@Component({
  selector: 'pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {
  pokemonInfo: Pokemon = {
  abilities: [{
    ability: {
      name: '',
    }
  }],
  base_experience: 0,
  forms: [],
  game_indices: [],
  height: 0,
  held_items: [],
  id: 0,
  is_default: true,
  location_area_encounters: '',
  moves: [],
  name: '',
  order: 0,
  past_types: [],
  species: {},
  sprites: {
    front_default: "",
  },
  stats: [{base_stat: 0, stat: {name: ''}}],
  types: [
    {
      slot: 0,
      type: {
        name: '',
      }
    }
  ],
  weight: 0,
  };

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemonInfo();
  }

  getPokemonInfo() {
    this.pokemonService.getPokemonInformation(this.route.snapshot.params.name).toPromise()
    .then((res) => {
      this.pokemonInfo = res as Pokemon;
    })
    .catch((err) => {
      console.log(err);
    })
  }

}
