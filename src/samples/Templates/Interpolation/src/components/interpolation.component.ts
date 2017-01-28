import {Component} from "angular2/core";

@Component({
    selector: "interpolation",
    templateUrl: "modules/Sections/Section1/Interpolation/templates/interpolation.component.html"
})
export class InterpolationComponent {
    imagesPath: string;
    pokeball: string;
    pikachu: string;

    constructor() {
        this.imagesPath = "modules/Content/images";
        this.pokeball = "pokeball.png";
        this.pikachu = "pikachu.png";
    }
}