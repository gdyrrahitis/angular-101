import { Component } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "routing-country",
    templateUrl: "./country-language-greek.component.html",
})
export class CountryLanguageGreekComponent {
    countries: any;

    constructor(private _http: Http, private _router: Router) { }

    ngOnInit() {
        this._http.get("https://restcountries.eu/rest/v2/lang/el").subscribe((res) => this.countries = res.json());
    }

    navigateToCountry(country) {
        this._router.navigate(["/routing/child/country", "language", "greek", country.alpha2Code]);
    }
}