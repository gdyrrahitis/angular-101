import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "app-interpolation",
    templateUrl: "./interpolation.component.html",
    styleUrls: ["./interpolation.component.css"],
})
export class InterpolationComponent {
    imagesPath: string;
    canada: string;
    usa: string;

    constructor() {
        this.imagesPath = "http://flagpedia.net/data/flags/normal/";
        this.canada = "ca.png";
        this.usa = "us.png";
    }
}