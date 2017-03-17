export class Continent implements IContinent {
    constructor(public name: string) { }
}

export interface IContinent {
    name: string;
}