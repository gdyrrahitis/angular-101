import { Component, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";

@Component({
    moduleId: module.id,
    selector: "routing-continent",
    templateUrl: "./country-currency-euro.component.html",
})
export class CountryCurrencyEuroComponent implements OnInit {
    public countries: any;

    constructor(private http: Http) { }

    public ngOnInit() {
        this.http.get("https://restcountries.eu/rest/v2/currency/eur").subscribe((res) => this.countries = res.json());
    }
}