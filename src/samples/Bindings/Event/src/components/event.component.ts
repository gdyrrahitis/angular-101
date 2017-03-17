import { Component } from "@angular/core";
import { ICountry } from "../models/Country";
import { IContinent } from "../models/Continent";

@Component({
    moduleId: module.id,
    selector: "event-binding",
    templateUrl: "./event.component.html",
    styleUrls: ["./event.component.css"]
})
export class EventComponent {

    changedElement: any;
    clickedElement: any;
    countries: ICountry[];
    imagesPath: string;
    continent: IContinent;
    continents: IContinent[] = [];

    selectedContinent: IContinent;
    continentToSwap: IContinent;

    constructor() {
        this.imagesPath = "http://flagpedia.net/data/flags/normal/$P0.png";
        this.countries = [
            { code: "gb", name: "United Kingdom", continent: { name: "Europe" } },
            { code: "ie", name: "Ireland", continent: { name: "Europe" } },
            { code: "ch", name: "Switzerland", continent: { name: "Europe" } },
            { code: "us", name: "USA", continent: { name: "America" } },
            { code: "ca", name: "Canada", continent: { name: "America" } },
            { code: "cn", name: "China", continent: { name: "Asia" } },
            { code: "in", name: "India", continent: { name: "Asia" } }
        ];

        var names = new Set(this.countries.map(c => c.continent.name));
        names.forEach(c => this.continents.push({ name: c }));

        this.selectedContinent = this.continents[0];
    }

    setSelectedContinent($event, continent: IContinent) {
        this.clickedElement = $event.target;
        this.continent = continent;
    }

    getCountriesBySelectedContinent(): ICountry[] {
        return this.getCountriesByContinent(this.continent);
    }

    getCountriesByContinent(continent: IContinent): ICountry[] {
        return this.countries.filter(c => c.continent.name === continent.name);
    }

    getSrcForCountry(country: ICountry): string {
        return this.imagesPath.replace("$P0", country.code);
    }

    clear($event) {
        this.continent = null;
        this.clickedElement = $event.target;
    }

    getCurrentTime() {
        return (new Date()).toLocaleString();
    }

    changeShowingList($event) {
        this.continentToSwap = this.continents.filter(c => c.name == $event.target.value)[0];
        this.changedElement = $event.target;
    }

    getContinentsExceptFromSelected() {
        if (typeof this.selectedContinent !== "undefined") {
            return this.continents.filter(c => c.name !== this.selectedContinent.name);
        }
    }

    swap() {
        this.selectedContinent = this.continentToSwap;
        this.continentToSwap = null;
    }
}