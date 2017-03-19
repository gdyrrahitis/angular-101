import { Component, Input, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";
import { ActivatedRoute } from "@angular/router";
import "rxjs/add/observable/throw";
import { Observable } from "rxjs/Observable";

@Component({
    moduleId: module.id,
    selector: "app-country-details",
    templateUrl: "./country-details.component.html",
})
export class CountryDetailsComponent implements OnInit {
    public country: any;
    private url = "http://flagpedia.net/data/flags/small/";

    constructor(private route: ActivatedRoute, private http: Http) { }

    public ngOnInit() {
        this.route.params.subscribe((params: any) => {
            let code = params.code;
            this.http.get("https://restcountries.eu/rest/v2/alpha/" + code)
                .catch(this.handleError)
                .subscribe((res) => this.country = res.json());
        });
    }

    private handleError(error) {
        console.error(error);
        return Observable.throw(error);
    }

    public getFlag() {
        if (this.country) {
            return this.url + this.country.alpha2Code.toLowerCase() + ".png";
        }
        return "";
    }
}