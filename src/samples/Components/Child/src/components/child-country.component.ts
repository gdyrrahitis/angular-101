import { Component, Input } from "@angular/core";

import { Continent } from "../models/Continent";
import { Country } from "../models/Country";

@Component({
    moduleId: module.id,
    selector: "app-child-country",
    templateUrl: "./child-country.component.html",
    styleUrls: ["./child-country.component.css"],
})
export class ChildCountryComponent {
    @Input() public country: Country;
    private url: string = "http://flagpedia.net/data/flags/small/";

    public getFlag(code: string) {
        return this.url + code.toLowerCase() + ".png";
    }
}