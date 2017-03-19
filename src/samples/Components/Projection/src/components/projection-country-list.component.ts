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
    private _flagUrl: string = "http://flagpedia.net/data/flags/small/";
    private _url: string = "https://restcountries.eu/rest/v2/all";
    private _rows: number = 2;
    private _maxPopulation: number = 5000000;
    countriesRows: any[] = [];

    constructor(private _http: Http) { }

    ngOnInit() {
        this._http.get(this._url).subscribe((res) => {
            let response: any[] = res.json();
            let filteredCountries = response.filter((country) => country.population > this._maxPopulation);
            let length = filteredCountries.length - 1;

            for (let i = 0; i < this._rows; i++) {
                let row: any[] = [];
                for (let j = 0; j < this._rows; j++) {
                    let randomIndex = parseInt((Math.random() * length).toString());
                    let country = filteredCountries[randomIndex];
                    row.push(country);
                }
                this.countriesRows.push(row);
            }
        });
    }

    getFlagSrc(code: string) {
        return `${this._flagUrl}${code.toLowerCase()}.png`;
    }
}