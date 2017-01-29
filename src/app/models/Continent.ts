export interface IContinent {
    name: string;
}

export class Continent implements IContinent {
        constructor(public name: string) { }
}