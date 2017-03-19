import { Component, Input, OnInit } from "@angular/core";

import { Continent } from "../models/Continent";
import { Country } from "../models/Country";

@Component({
    moduleId: module.id,
    selector: "app-child-country",
    templateUrl: "./child-country.component.html",
    styleUrls: ["./child-country.component.css"],
})
export class ChildCountryComponent implements OnInit {
    private url: string = "http://flagpedia.net/data/flags/small/";
    @Input() country: Country;

    ngOnInit() { }

    getFlag(code: string) {
        return this.url + code.toLowerCase() + ".png";
    }
}