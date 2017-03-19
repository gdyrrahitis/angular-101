import { Component, Input, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";
import { ActivatedRoute } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "app-country-details",
    templateUrl: "./country-details.component.html",
})
export class CountryDetailsComponent implements OnInit {
    private url = "http://flagpedia.net/data/flags/small/";
    country: any;

    constructor(private _route: ActivatedRoute, private _http: Http) { }

    ngOnInit() {
        this._route.params.subscribe((params: any) => {
            let code = params.code;
            this._http.get("https://restcountries.eu/rest/v2/alpha/" + code).subscribe((res) => this.country = res.json());
        });
    }

    getFlag() {
        if (this.country)
            return this.url + this.country.alpha2Code.toLowerCase() + ".png";
        return "";
    }
}