import { Component, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";

@Component({
    moduleId: module.id,
    selector: "app-interaction-country-list",
    templateUrl: "./interaction-country-list.component.html"
})
export class InteractionCountryListComponent implements OnInit {
    private url: string = "https://restcountries.eu/rest/v2/all";
    private limit: number = 6;
    countriesArray: any[] = [];
    selectedCountry: any;

    constructor(private _http: Http) { }

    ngOnInit() {
        this._http.get(this.url).subscribe(res => {
            let response: any[] = res.json();
            let max = response.length - 1;
            let rows = this.limit / 3;
            let columns = this.limit / 2;

            for (let i = 0; i < rows; i++) {
                let countryArray = [];
                for (let j = 0; j < columns; j++) {
                    let random: number = parseInt((Math.random() * max).toString());
                    let country = response[random];
                    countryArray.push(country);
                }
                this.countriesArray.push(countryArray);
            }
        });
    }

    countrySelection(country) {
        this.selectedCountry = country;
    }
}