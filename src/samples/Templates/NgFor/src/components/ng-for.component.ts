import { Component } from "@angular/core";
import { getName } from "i18n-iso-countries";

@Component({
    moduleId: module.id,
    selector: "app-ng-for",
    templateUrl: "./ng-for.component.html",
    styleUrls: ["./ng-for.component.css"],
})
export class NgForComponent {
    public europe: string[];
    public america: string[];
    public asia: string[];
    public imagesPath: string;

    constructor() {
        this.imagesPath = "http://flagpedia.net/data/flags/normal/";
        this.europe = ["es", "de", "fr"];
        this.america = ["br", "ar", "us"];
        this.asia = ["cn", "th", "jp"];
    }

    public getCountryNameBy(code: string): string {
        return getName(code, "en");
    }

    public getSrcFromCode(code: string): string {
        return this.imagesPath + code + ".png";
    }
}