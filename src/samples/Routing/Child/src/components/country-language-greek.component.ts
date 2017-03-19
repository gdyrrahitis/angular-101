import { Component } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "routing-country",
    templateUrl: "./country-language-greek.component.html",
})
export class CountryLanguageGreekComponent {
    public countries: any;

    constructor(private http: Http, private router: Router) { }

    public ngOnInit() {
        this.http.get("https://restcountries.eu/rest/v2/lang/el").subscribe((res) => this.countries = res.json());
    }

    public navigateToCountry(country) {
        this.router.navigate(["/routing/child/country", "language", "greek", country.alpha2Code]);
    }
}