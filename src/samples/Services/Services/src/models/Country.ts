import { IContinent } from "./Continent";
import { Code } from "../enums/Code";

export class Country {
    constructor(public code: Code,
        public name: string,
        public continent: IContinent
    ) { }
}

export interface ICountry {
    code: Code;
    name: string;
    continent: IContinent;
}