import { Attribute, Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  sprite: string = "";

  @Input() name: string = '';

  constructor(private pokemonService: PokemonService) { 
    }

  ngOnInit(): void {
    this.getPokemonSprite();
  }

  async getPokemonSprite() {
    await this.pokemonService.getPokemonInformation(this.name).toPromise()
    .then((res: any) => {
      this.sprite = res.sprites.front_default;
    })
    .catch((err) => {
      console.log(err);
    })
  }

}
