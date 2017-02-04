import { Country } from "../../index";

export class Continent {
    id: number;
    name: string;
    countries: Country[];

    constructor (id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    setCountries(countries: Country[]) {
        this.countries = countries;
    }
}