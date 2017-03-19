import { Component, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";

@Component({
    moduleId: module.id,
    selector: "routing-continent",
    templateUrl: "./country-currency-euro.component.html",
})
export class CountryCurrencyEuroComponent implements OnInit{
    countries: any;

    constructor(private _http: Http) { }

    ngOnInit() {
        this._http.get("https://restcountries.eu/rest/v2/currency/eur").subscribe((res) => this.countries = res.json());
    }
}