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
  page: number = 0; // Offset/Next Page
  perPage: number = 20; // Limit
  totalPage: number = 0; // Pass down to child

/*
  For calculating total pages, just divide, and take the floor of it.
  It will allow for you to view all pokemon
*/

  constructor(private pokemonService: PokemonService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  ngDoCheck():void {
    /*
     * Check that when we change perPage, the page still stays in bounds.
     * Essentially, it makes sure we stay on the last page when
     * changing perPage on the last page
     */
    if (this.page > this.totalPage) {
      this.page = this.totalPage;
      this.getPokemon();
    }
  }

  getPokemon():void {
    this.pokemonService.getPokemon(this.page*this.perPage, this.perPage).toPromise()
    .then((res: any) => {
      this.pokemon = res;
      this.totalPage = Math.floor(res.count /this.perPage);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  /*
   * For some reason, if this is not in an arrow function, it returns NaN
   * for this.page. Not sure why
   */
  handlePagination = (action:string):void => {
    // We don't have to worry about exceeding the page number,
    // as it is handled on the buttons in pagination
    action === 'next' ? this.page++ : this.page --;
    this.getPokemon();
  }

  handlePerPage = (perPage:number):void => {
    this.perPage = perPage;
    this.getPokemon();
  }
}
