import { Component } from "@angular/core";
import { getName } from "i18n-iso-countries";

@Component({
    moduleId: module.id,
    selector: "app-ngfor",
    templateUrl: "./ngfor.component.html",
    styleUrls: ["./ngFor.component.css"]
})
export class NgForComponent {
    europe: string[];
    america: string[];
    asia: string[];
    imagesPath: string;

    constructor() {
        this.imagesPath = "http://flagpedia.net/data/flags/normal/";
        this.europe = ["es", "de", "fr"];
        this.america = ["br", "ar", "us"];
        this.asia = ["cn", "th", "jp"];
    }

    getCountryNameBy(code: string): string {
        return getName(code, "en");
    }

    getSrcFromCode(code: string): string {
        return this.imagesPath + code + ".png";
    }
}