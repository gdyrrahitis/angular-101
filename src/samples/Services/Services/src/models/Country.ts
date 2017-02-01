import { Code, IContinent } from "../../index";

export class Country {
    constructor(public code: Code,
        public name: string,
        public continent: IContinent
    ) { }
}