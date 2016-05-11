import {Component, OnInit} from "angular2/core";
import {PokemonService} from "./services/pokemon.service";
import {TechniquesService} from "./services/technique.service";
import {Pokemon} from "./models/pokemon.model";

@Component({
    selector: "directives",
    templateUrl: "modules/Sections/Section2/Dependency_Injection/templates/injecting.component.html",
    styleUrls: ["modules/Sections/Section2/Dependency_Injection/styles/injecting.component.style.css"],
    providers: [PokemonService, TechniquesService]
})
export class InjectingComponent implements OnInit {
    pokemons: Pokemon[];

    constructor(private _pokemonService: PokemonService) { }

    ngOnInit() {
        this.pokemons = this._pokemonService.getPokemons();
        console.log(this.pokemons)
    }

    openModal(pokemon: Pokemon) {
        let id = "#" + pokemon.name + "Modal";
        $(id).modal("show");
        return false;
    }
}