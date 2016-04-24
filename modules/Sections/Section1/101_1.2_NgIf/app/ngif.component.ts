import {Component} from "angular2/core";

@Component({
    selector: "my-ngif",
    templateUrl: "modules/Sections/Section1/101_1.2_NgIf/templates/ngif.component.html"
})
export class NgIfComponent {
    imagesPath: string;
    pokeball: string;
    pikachu: string;
    chosen: boolean;

    constructor() {
        this.imagesPath = "modules/Content/images/";
        this.pokeball = "pokeball.png";
        this.pikachu = "pikachu.png";
        this.chosen = false;
    }
}