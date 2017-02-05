export class Country {
    private url: string = "http://flagpedia.net/data/flags/small/";

    constructor(
        public name: string,
        public capital: string,
        public population: number,
        public alpha2Code: string,
        public nativeName: string
    ) { }


    getFlag(){
        return this.url + this.alpha2Code.toLowerCase() + ".png";
    }
}