import { getName } from "i18n-iso-countries";

import { Injectable } from "@angular/core";
import { Code } from "../enums/Code";
import { ContinentName } from "../enums/ContinentName";
import { Continent, IContinent } from "../models/Continent";
import { Country, ICountry } from "../models/Country";

@Injectable()
export class CountryService {
    public getCountries(): ICountry[] {
        return [
            this.getCountry(Code.FR, ContinentName.Europe),
            this.getCountry(Code.GB, ContinentName.Europe),
            this.getCountry(Code.ES, ContinentName.Europe),
            this.getCountry(Code.US, ContinentName.America),
        ];
    }

    private getCountry(code: Code, continentName: ContinentName): ICountry {
        return new Country(code,
            getName(Code[code].toUpperCase(), "en"),
            this.getContinent(continentName));
    }

    private getContinent(continentName: ContinentName): IContinent {
        return new Continent(ContinentName[continentName]);
    }
}