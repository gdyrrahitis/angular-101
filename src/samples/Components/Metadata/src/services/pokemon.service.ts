import { Injectable } from "angular2/core";
import { Pokemon } from "./pokemon.type";

@Injectable()
export class PokemonService {
    private _legendaryPokemons: Pokemon[];
    private _basePath: string;
    
    constructor() {
        this._basePath = "modules/Content/images/";
        this._legendaryPokemons = [
            {name: "Moltres", imageUrl: `${this._basePath}moltres`},
            {name: "Zapdos", imageUrl: `${this._basePath}zapdos`},
            {name: "Articuno", imageUrl: `${this._basePath}articuno`},
            {name: "Mewtwo", imageUrl: `${this._basePath}mewtwo`}
        ];
    }
    
    getLegendaryPokemons(): Pokemon[] {
        return this._legendaryPokemons;
    }
}