import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/operator/of";
import { Observable } from "rxjs/Observable";

import { Country } from "../models/Country";

@Component({
    moduleId: module.id,
    selector: "app-http",
    styleUrls: ["./http.component.css"],
    templateUrl: "./http.component.html",
})
export class HttpComponent {
    public countries: Country[] = [];
    public tempCountries: Country[] = [];
    public submitted: boolean;
    public errorMessage: string;
    private url: string = "https://restcountries.eu/rest/v1/region/";

    constructor(private http: Http) {
    }

    public getCountriesByRegion(region: string) {
        this.http.get(`${this.url}${region}`)
            .map(this.extractCountries)
            .catch(this.handleError)
            .subscribe((countries) => {
                this.countries = countries;
                this.tempCountries = countries;
            });
    }

    private handleError(error) {
        console.error(error);
        return Observable.throw(error);
    }

    private extractCountries(res: Response) {
        let countries: Country[] = [];
        let body = res.json();

        body.forEach((obj) => {
            let country = new Country(obj.name, obj.capital, obj.population, obj.alpha2Code, obj.nativeName);
            countries.push(country);
        });
        return countries;
    }

    public getRegions(region: any) {
        this.getCountriesByRegion(region.value);
    }

    public clear() {
        this.countries = [];
    }

    public onChange(input) {
        let countryName: string = input.value;

        if (countryName.length > 1) {
            this.countries = this.countries.filter((country) => country.name.indexOf(input.value) !== -1);
        } else {
            this.reset();
        }
    }

    public reset() {
        this.countries = this.tempCountries;
    }

    public isRegionValidAndPristine (region) {
        return region.valid || region.pristine;
    }

    get isCountriesArrayValid () {
        return this.countries && this.countries.length > 0;
    }

    get isCountriesArrayEmpty() {
        return this.countries!.length === 0;
    }
}