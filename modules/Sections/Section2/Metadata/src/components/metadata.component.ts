import { Component, OnInit } from "angular2/core";
import { PokemonDirective } from "./pokemon.directive";
import { PokemonService } from "./pokemon.service";
import { Pokemon } from "./pokemon.type";

@Component({
    selector: "metadata",
    styleUrls: ["modules/Sections/Section2/Metadata/styles/metadata.component"],
    directives: [PokemonDirective],
    providers: [PokemonService],
    templateUrl: "modules/Sections/Section2/Metadata/templates/metadata.component.html"
})
export class MetadataComponent implements OnInit {
    _pokemons: Pokemon[];
    
    constructor(private _pokemonService: PokemonService) { 
           console.log("hy");
    }
    
    ngOnInit() {
        console.log("hey")
        this._pokemons = this._pokemonService.getLegendaryPokemons();
        console.log(this._pokemons);
    }
}