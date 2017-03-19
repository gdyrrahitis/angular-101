import { getName } from "i18n-iso-countries";

import { Injectable } from "@angular/core";

import { Code } from "../enums/Code";
import { Location } from "../enums/Location";
import { Country } from "../models/Country";

@Injectable()
export class CountriesService {
    private countries: Country[];

    constructor() {
        this.countries = [
            this.getCountry(Code.FR, 65844000, Location.Europe),
            this.getCountry(Code.GB, 63705000, Location.Europe),
            this.getCountry(Code.AU, 23414552, Location.Oceania),
            this.getCountry(Code.US, 317706000, Location.America),
            this.getCountry(Code.BR, 201032714, Location.America),
            this.getCountry(Code.CN, 1363350000, Location.Asia),
            this.getCountry(Code.DE, 80619000, Location.Europe),
            this.getCountry(Code.GA, 1672000, Location.Africa),
            this.getCountry(Code.NA, 2113077, Location.Africa),
        ];

    }

    getCountries(): Country[] {
        return this.countries;
    }

    private getCountry(code: Code, population: number, continentId: number): Country {
        let codeAsString = this.getCodeAsString(code);
        let countryName = getName(codeAsString.toUpperCase(), "en");
        return new Country(countryName, population, codeAsString, continentId);
    }

    private getCodeAsString(code: Code): string {
        return Code[code];
    }
}