import {Component} from "angular2/core";

@Component({
    selector: "my-ngfor",
    templateUrl: "modules/Sections/Section1/101_1.3_NgFor/templates/ngfor.component.html"
})
export class NgForComponent {
    pokemonCaught: string[];
    imagesPath: string;
    
    constructor () {
        this.imagesPath = "modules/Content/images/";
        this.pokemonCaught = ["pikachu", "charmander", "squirtle"];
    }
}