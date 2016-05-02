import {Component} from "angular2/core";
import {PokemonRenderDirective} from "./directives/pokeRender.directive";
import {PokemonEvolutionsStructuralDirective} from "./directives/pokemonEvolutions.structural.directive";

@Component({
    selector: "directives",
    templateUrl: "modules/Sections/Section2/101_2.1_Directives/templates/directives.component.html",
    directives: [PokemonRenderDirective, PokemonEvolutionsStructuralDirective]
})
export class DirectivesComponent {
    private pokemonName: string;
    private pokemonNextEvolutionName: string;
    clicks = 0;
    bulbasaurAllEvolutions: string[];

    constructor() {
        this.pokemonName = "mankey";
        this.pokemonNextEvolutionName = "primeape";
    }

    myOnClickHandler(event) {
        this.clicks = event.value;
    }

    initializeEvolutions($event) {
        this.bulbasaurAllEvolutions = ["bulbasaur", "ivysaur", "venusaur"];
        $event.target.disabled = true;
    }
}