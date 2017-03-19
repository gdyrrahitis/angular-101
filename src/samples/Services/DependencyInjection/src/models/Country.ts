export class Country {
    private url: string = "http://flagpedia.net/data/flags/small/";

    name: string;
    population: number;
    code: string;
    continentId: number;

    constructor (name: string, population: number, code: string, continentId: number) {
        this.name = name;
        this.population = population;
        this.code = code;
        this.continentId = continentId;
    }

    getFlag(){
        return this.url + this.code.toLowerCase() + ".png";
    }
}
