import { Code, IContinent } from "../../index";

export interface ICountry {
    code: Code;
    name: string;
    continent: IContinent;
}