import {Component} from "angular2/core";
import {PokemonRenderDirective} from "./directives/pokeRender.directive";

@Component({
    selector: "directives",
    templateUrl: "modules/Sections/Section2/101_2.1_Directives/templates/directives.component.html",
    directives: [PokemonRenderDirective]
})
export class DirectivesComponent {
    private pokemonName: string;
    private pokemonNextEvolutionName: string;
    clicks = 0;
    
    constructor() {
        this.pokemonName = "mankey";
        this.pokemonNextEvolutionName = "primeape";
    }
    
    myOnClickHandler (event) {
        this.clicks = event.value;
    }
}