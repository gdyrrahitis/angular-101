import { Country } from "./Country";

export class Continent {
    public id: number;
    public name: string;
    public countries: Country[];

    constructor (id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    public setCountries(countries: Country[]) {
        this.countries = countries;
    }
}