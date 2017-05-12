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

    private getCurrentTime() {
        return (new Date()).toLocaleString();
    }

    public setSelectedContinent($event, continent: IContinent) {
        this.clickedElement = $event.target;
        this.continent = continent;
    }

    public getCountriesBySelectedContinent(): ICountry[] {
        return this.getCountriesByContinent(this.continent);
    }

    public getCountriesByContinent(continent: IContinent): ICountry[] {
        return continent ? this.countries.filter((c) => c.continent.name === continent.name) : [];
    }

    public getSrcForCountry(country: ICountry): string {
        if (!country) {
            throw new Error("Parameter country should not be null");
        }

        if (!country.name || (country.name && !country.name.trim())) {
            throw new Error("Property country.name should not be null or whitespace");
        }

        return this.imagesPath.replace("$P0", country.code);
    }

    public clear($event) {
        if (!$event) {
            throw new Error("Parameter $event should not be null");
        }

        this.continent = null;
        this.clickedElement = $event.target;
    }

    public getContinentsExceptFromSelected(): IContinent[] {
        if (typeof this.selectedContinent !== "undefined") {
            return this.continents.filter((c) => c.name !== this.selectedContinent.name);
        }

        return [];
    }

    public changeShowingList($event) {
        if (!$event) {
            throw new Error("Parameter $event should not be null");
        }

        this.continentToSwap = this.continents.filter((c) => c.name === $event.target.value)[0];
        this.changedElement = $event.target;
    }

    public swap() {
        this.selectedContinent = this.continentToSwap;
        this.continentToSwap = null;
    }
}