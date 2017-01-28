import {Component} from "angular2/core";
type pokemon = { type: string, name: string, nickname?: string };

@Component({
    selector: "twoway-binding",
    templateUrl: "modules/Sections/Section1/Two_Way_Binding/templates/twowaybinding.component.html"
})
export class TwoWayBindingComponent {
    pokeball: string;
    imagesPath: string;
    pokemons: pokemon[];

    constructor() {
        this.pokeball = "pokeball";
        this.imagesPath = "modules/Content/images";
        this.pokemons = [{ type: "electric", name: "pikachu" }, { type: "fire", name: "charmander" }, { type: "water", name: "squirtle" }];
    }

    getColorForType(type: string) {
        switch (type) {
            case "electric": return "btn-warning";
            case "fire": return "btn-danger";
            case "water": return "btn-info";
            case "air": return "btn-success";
            case "normal": return "btn-default";
            default: return "";
        }
    }
    
    capitalizeFirstLetter(input: string) {
        return input.replace(input.charAt(0), input.charAt(0).toUpperCase());
    }
}