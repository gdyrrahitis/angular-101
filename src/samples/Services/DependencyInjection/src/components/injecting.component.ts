import {Component, OnInit} from "angular2/core";
import {PokemonService} from "./services/pokemon.service";
import {TechniquesService} from "./services/technique.service";
import {Pokemon} from "./models/pokemon.model";
import {Type} from "./enums/type.enum";

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

    getEnumText(type: Type) {
        return Type[type];
    }

    getContextualColorByType(type: Type) {
        switch (type) {
            case Type.Air:
                return "air";

            case Type.Earth:
                return "earth";

            case Type.Electric:
                return "warning";

            case Type.Fighting:
                return "fighting";

            case Type.Fire:
                return "danger";

            case Type.Grass:
                return "success";

            case Type.Ice:
                return "ice";

            case Type.Normal:
                return "default";

            case Type.Poison:
                return "poison";
            case Type.Psycic:
                return "psycic";

            case Type.Water:
                return "primary";

            default:
                break;
        }
    }
}