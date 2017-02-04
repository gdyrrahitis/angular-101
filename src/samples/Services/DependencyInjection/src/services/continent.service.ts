import { Injectable } from "@angular/core";

import { Location } from "../enums/Location";
import { Continent } from "../models/Continent";
import { Country } from "../models/Country";
import { CountriesService } from "./countries.service";

@Injectable()
export class ContinentService {
    private continents: Continent[];

    constructor(private _countriesService: CountriesService) {
        this.continents = [
            new Continent(Location.America, this.getContinentName(Location.America)),
            new Continent(Location.Africa, this.getContinentName(Location.Africa)),
            new Continent(Location.Asia, this.getContinentName(Location.Asia)),
            new Continent(Location.Oceania, this.getContinentName(Location.Oceania)),
            new Continent(Location.Europe, this.getContinentName(Location.Europe))
        ];

        this.setCountries();
    }

    private getContinentName(location: Location): string {
        return Location[location];
    }

    private setCountries() {
        let countries: Country[] = this._countriesService.getCountries();
        this.continents.forEach(continent => {
            let relatedCountries = countries.filter(country => country.continentId == continent.id);
            continent.countries = relatedCountries;
        });
    }

    getContinents(): Continent[] {
        return this.continents;
    }
}