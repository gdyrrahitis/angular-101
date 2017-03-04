import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Country } from "../models/Country";

@Component({
    moduleId: module.id,
    selector: "app-http",
    templateUrl: "./http.component.html",
    styleUrls: ["./http.component.css"]
})
export class HttpComponent {
    private url: string = "https://restcountries.eu/rest/v1/region/";
    countries: Country[] = [];
    tempCountries: Country[] = [];
    submitted: boolean;
    errorMessage: string;

    constructor(private _http: Http) {
    }

    getCountriesByRegion(region: string) {
        this._http.get(`${this.url}${region}`)
            .map(this.extractCountries)
            .subscribe(countries => {
                this.countries = countries;
                this.tempCountries = countries;
            },
            error => {
                console.log(error);
            });
    }

    private extractCountries(res: Response) {
        let countries: Country[] = [];
        let body = res.json();

        body.forEach(obj => {
            let country = new Country(obj.name, obj.capital, obj.population, obj.alpha2Code, obj.nativeName);
            countries.push(country);
        });
        return countries;
    }

    getRegions(region: any) {
        this.getCountriesByRegion(region.value);
    }

    clear() {
        this.countries = [];
    }

    onChange(input) {
        let countryName: string = input.value;

        console.log(countryName)
        if (countryName.length > 1) {
            this.countries = this.countries.filter(country => country.name.indexOf(input.value) !== -1);
        } else {
            this.reset();
        }
    }

    reset() {
        this.countries = this.tempCountries;
    }
}