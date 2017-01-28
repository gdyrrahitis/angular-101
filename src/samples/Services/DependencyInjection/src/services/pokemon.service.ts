import {Injectable} from "angular2/core";
import {Pokemon} from "../models/pokemon.model";
import {Technique} from "../models/technique.model";
import {Type} from "../enums/type.enum";
import {TechniquesService} from "./technique.service";

@Injectable()
export class PokemonService{
    pokemons: Pokemon[];
    private imagesPath = "modules/Content/images/";
    
    constructor(private techniqueService: TechniquesService) { 
        let pokemons = [
            new Pokemon("Bulbasaur", 15, 112, [this.techniqueService.getTechnique(6), this.techniqueService.getTechnique(4)], [Type.Grass], `${this.imagesPath}bulbasaur.png`),
            new Pokemon("Primeape", 22, 180, [this.techniqueService.getTechnique(7), this.techniqueService.getTechnique(2)], [Type.Fighting], `${this.imagesPath}primeape.png`),
            new Pokemon("Pikachu", 18, 99, [this.techniqueService.getTechnique(1), this.techniqueService.getTechnique("tackle")], [Type.Electric], `${this.imagesPath}pikachu.png`),
            new Pokemon("Charmander", 14, 77, [this.techniqueService.getTechnique(3), this.techniqueService.getTechnique("scratch")], [Type.Fire], `${this.imagesPath}charmander.png`),
        ];  
        this.pokemons = pokemons; 
    }
    
    getPokemons () {
        return this.pokemons;
    }
}