import { getName } from "i18n-iso-countries";

import { Injectable } from "@angular/core";
import { ICountry, IContinent, Country, Continent, Code, ContinentName } from "../../index";

// A service is using the Injectable decorator, in order to be injected later to a class (for example, a component)
@Injectable()
export class CountryService {
    getCountries(): ICountry[] {
        return [
            this.getCountry(Code.FR, ContinentName.Europe),
            this.getCountry(Code.GB, ContinentName.Europe),
            this.getCountry(Code.ES, ContinentName.Europe),
            this.getCountry(Code.US, ContinentName.America)
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