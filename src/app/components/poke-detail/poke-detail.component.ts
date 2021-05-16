import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss']
})
export class PokeDetailComponent implements OnInit {

  pokemon = {
    position: 0,
    name: '',
    image: '',
    height: 0,
    weight: 0
  };

  constructor(private pokemonService: PokemonService, private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(
      param => {
        this.getPokemon(param["id"]);
      }
    )
   }

  ngOnInit(): void {
  }

  getPokemon(id: number): any{
    this.pokemonService.getPokemons(id).subscribe(
      (res:any)=>{
        this.pokemon.position = res.id;
        this.pokemon.name = res.name;
        this.pokemon.image = res.sprites.front_default;
        this.pokemon.weight = res.weight;
        this.pokemon.height = res.height;
      },
      (err: any)=>{
        console.log(err);
      }
    );
  }

}
