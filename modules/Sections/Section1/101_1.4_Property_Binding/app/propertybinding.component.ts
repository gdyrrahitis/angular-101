import {Component} from "angular2/core";

@Component({
    selector: "property-binding",
    templateUrl: "modules/Sections/Section1/101_1.4_Property_Binding/templates/propertybinding.component.html",
    styleUrls: ["modules/Sections/Section1/101_1.4_Property_Binding/styles/propertybinding.style.css"]
})
export class PropertyBindingComponent {
    imagesPath: string;
    pokeball: string;
    pikachu: string;
    imageWidth: number;
    imageHeight: number;
    pokeballTitle: string;
    pikachuTitle: string;
    selectedPokemon: string;
    backgroundToggle: boolean;
    cssToggle: boolean;

    constructor() {
        this.imagesPath = "modules/Content/images";
        this.pokeball = "pokeball.png";
        this.pikachu = "pikachu.png";
        this.imageWidth = 150;
        this.imageHeight = 150;
        this.pokeballTitle = "Pokeball image";
        this.pikachuTitle = "Pikachu image";
        this.backgroundToggle = false;
        this.cssToggle = true;
    }
}