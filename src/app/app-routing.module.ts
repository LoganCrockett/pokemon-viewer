import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

const routes: Routes = [
  {path: "pokemon",component: PokemonListComponent},
  {path: "pokemon/:name", component: PokemonInfoComponent},
  {path: '', component: PokemonListComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
