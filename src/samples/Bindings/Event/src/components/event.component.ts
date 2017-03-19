import { Component } from "@angular/core";
import { IContinent } from "../models/Continent";
import { ICountry } from "../models/Country";

@Component({
    moduleId: module.id,
    selector: "event-binding",
    templateUrl: "./event.component.html",
    styleUrls: ["./event.component.css"],
})
export class EventComponent {

    public changedElement: any;
    public clickedElement: any;
    public countries: ICountry[];
    public imagesPath: string;
    public continent: IContinent;
    public continents: IContinent[] = [];

    public selectedContinent: IContinent;
    public continentToSwap: IContinent;

    constructor() {
        this.imagesPath = "http://flagpedia.net/data/flags/normal/$P0.png";
        this.countries = [
            { code: "gb", name: "United Kingdom", continent: { name: "Europe" } },
            { code: "ie", name: "Ireland", continent: { name: "Europe" } },
            { code: "ch", name: "Switzerland", continent: { name: "Europe" } },
            { code: "us", name: "USA", continent: { name: "America" } },
            { code: "ca", name: "Canada", continent: { name: "America" } },
            { code: "cn", name: "China", continent: { name: "Asia" } },
            { code: "in", name: "India", continent: { name: "Asia" } },
        ];

        let names = new Set(this.countries.map((c) => c.continent.name));
        names.forEach((c) => this.continents.push({ name: c }));

        this.selectedContinent = this.continents[0];
    }

    public setSelectedContinent($event, continent: IContinent) {
        this.clickedElement = $event.target;
        this.continent = continent;
    }

    public getCountriesBySelectedContinent(): ICountry[] {
        return this.getCountriesByContinent(this.continent);
    }

    public getCountriesByContinent(continent: IContinent): ICountry[] {
        return this.countries.filter((c) => c.continent.name === continent.name);
    }

    public getSrcForCountry(country: ICountry): string {
        return this.imagesPath.replace("$P0", country.code);
    }

    public clear($event) {
        this.continent = null;
        this.clickedElement = $event.target;
    }

    public getCurrentTime() {
        return (new Date()).toLocaleString();
    }

    public changeShowingList($event) {
        this.continentToSwap = this.continents.filter((c) => c.name === $event.target.value)[0];
        this.changedElement = $event.target;
    }

    public getContinentsExceptFromSelected() {
        if (typeof this.selectedContinent !== "undefined") {
            return this.continents.filter((c) => c.name !== this.selectedContinent.name);
        }
    }

    public swap() {
        this.selectedContinent = this.continentToSwap;
        this.continentToSwap = null;
    }
}