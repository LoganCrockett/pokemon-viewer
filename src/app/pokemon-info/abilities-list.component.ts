import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'abilities-list',
  templateUrl: './abilities-list.component.html',
  styleUrls: ['./abilities-list.component.css']
})
export class AbilitiesListComponent implements OnInit {
  @Input() name: string = '';
  abilityDescription: string = '';

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getAbility();
  }

  async getAbility() {
    // Prevents us from making a request where we don't have a name
    if (this.name === '') {return;}
    await this.pokemonService.getAbilityInformation(this.name).toPromise()
    .then((res: any) => {
      // Due to inconsistent data, we have to ensure we grab the english version
      const ability = res.effect_entries.filter((effect: any) => {
        return effect.language.name === "en";
      })
      this.abilityDescription = ability[0].short_effect;
    })
    .catch((err) => console.log(err))
  }

}
