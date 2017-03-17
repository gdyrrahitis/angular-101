import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "app-ng-if",
    templateUrl: "./ng-if.component.html",
    styleUrls: ["./ng-if.component.css"]
})
export class NgIfComponent {
    imagesPath: string;
    pokeball: string;
    pikachu: string;
    chosen: boolean;

    constructor() {
        this.imagesPath = "http://flagpedia.net/data/flags/normal/";
        this.pokeball = "pokeball.png";
        this.pikachu = "au.png";
        this.chosen = false;
    }
}