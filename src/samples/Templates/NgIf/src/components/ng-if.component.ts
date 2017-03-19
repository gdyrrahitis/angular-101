import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "app-ng-if",
    templateUrl: "./ng-if.component.html",
    styleUrls: ["./ng-if.component.css"],
})
export class NgIfComponent {
    public imagesPath: string;
    public australia: string;
    public chosen: boolean;

    constructor() {
        this.imagesPath = "http://flagpedia.net/data/flags/normal/";
        this.australia = "au.png";
        this.chosen = false;
    }
}