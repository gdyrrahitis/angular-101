import {Injectable} from "angular2/core";
import {Pokemon, Technique, Type} from "./../Models/pokemon.models";

// A service is using the Injectable decorator, in order to be injected later to a class (for example, a component)
@Injectable()
export class PokemonService {
    getPokemons = () => {
        return [this.pikachu(), this.charmander(), this.squirtle()];
    };
    
    private pikachu = function(): Pokemon {
        let pikachuTechniques = [
            new Technique("Thunderbolt", Type.Electric, 20),
            new Technique("Tackle", Type.Normal, 8)
        ];
        return new Pokemon("Pikachu", 15, 90, pikachuTechniques, [Type.Electric]);
    }
    
    private charmander = (): Pokemon => {
        let charmanderTechniques = [
            new Technique("Ember", Type.Fire, 16),
            new Technique("Scratch", Type.Normal, 10)
        ];
        return new Pokemon("Charmander", 9, 67, charmanderTechniques, [Type.Fire]);
    }
    
    private squirtle = (): Pokemon => {
        let squirtleTechniques = [
            new Technique("Water gun", Type.Water, 18),
            new Technique("Tackle", Type.Normal, 9)
        ];
        return new Pokemon("Squirtle", 11, 81, squirtleTechniques, [Type.Water]);
    }
}