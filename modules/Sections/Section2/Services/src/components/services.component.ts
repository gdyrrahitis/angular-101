import {Component, OnInit} from "angular2/core";
// Importing the service
import {PokemonService} from "./Services/pokemon.service";
import {Pokemon, Technique, Type} from "./Models/pokemon.models";
import {BackgroundColorByTypeDirective} from "./Directives/backgroundcolor.directive";

@Component({
    selector: "directives",
    templateUrl: "modules/Sections/Section2/Services/templates/services.component.html",
    styleUrls: ["modules/Sections/Section2/Services/styles/services.component.css"],
    // Added the imported service to this component providers, in order to be injected later
    providers: [PokemonService],
    directives: [BackgroundColorByTypeDirective]
})
export class ServicesComponent implements OnInit {
    pokemons: Pokemon[];
    imagesDirectory: string;
    
    // Injected service in constructor without using @inject decorator
    // TypeScript does this by default
    constructor(private _pokemonService: PokemonService) {
        this.imagesDirectory = "modules/Content/images";
     }

    ngOnInit() {
        // Calling service method
        this.pokemons = this._pokemonService.getPokemons();
    }

    getNameFromTypeEnum(type: Type): string {
        return Type[type];
    }
}