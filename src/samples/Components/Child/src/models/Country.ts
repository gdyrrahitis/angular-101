import { IContinent } from "./Continent";

export interface ICountry {
    code: string;
    name: string;
    continent: IContinent;
}

export class Country implements ICountry {
    constructor(public code: string, public name: string, public continent: IContinent) { }
}
