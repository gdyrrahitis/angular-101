import { Component, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";

import { ProjectionCountryMultipleSlotComponent } from "./projection-country-multiple-slot.component";

@Component({
    moduleId: module.id,
    selector: "app-projection-country-list",
    templateUrl: "./projection-country-list.component.html",
    styles: [
        `
        .flag {
            width: 90;
            height: 60;
        }

        .margin-bottom-15 {
            margin-bottom: 15px;
        }
        `,
    ],
})
export class ProjectionCountryListComponent implements OnInit {
    public countriesRows: any[] = [];
    private flagUrl: string = "http://flagpedia.net/data/flags/small/";
    private url: string = "https://restcountries.eu/rest/v2/all";
    private rows: number = 2;
    private maxPopulation: number = 5000000;

    constructor(private http: Http) { }

    public ngOnInit() {
        this.http.get(this.url).subscribe((res) => {
            let response: any[] = res.json();
            let filteredCountries = response.filter((country) => country.population > this.maxPopulation);
            let length = filteredCountries.length - 1;

            for (let i = 0; i < this.rows; i++) {
                let row: any[] = [];
                for (let j = 0; j < this.rows; j++) {
                    let randomIndex = +(Math.random() * length);
                    let country = filteredCountries[randomIndex];
                    row.push(country);
                }
                this.countriesRows.push(row);
            }
        });
    }

    public getFlagSrc(code: string) {
        return `${this.flagUrl}${code.toLowerCase()}.png`;
    }
}