import { Component } from "@angular/core";
import { getName } from "i18n-iso-countries";

import { Continent } from "../models/Continent";
import { Country } from "../models/Country";
import { ChildCountryComponent } from "./child-country.component";

@Component({
    moduleId: module.id,
    selector: "app-parent",
    templateUrl: "./countries-list.component.html",
})
export class CountriesListComponent {
    public countries: Country[] = [
        new Country("gb", getName("gb", "en"), new Continent("Europe")),
        new Country("es", getName("es", "en"), new Continent("Europe")),
        new Country("fr", getName("fr", "en"), new Continent("Europe")),
    ];
}