import { Component, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";
import { ActivatedRoute } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "app-dynamic-country",
    templateUrl: "./dynamic-country-child.component.html",
})
export class DynamicCountryChildComponent implements OnInit {
    public country: any;
    private url: string = "https://restcountries.eu/rest/v2/alpha/";
    private flagUrl = "http://flagpedia.net/data/flags/small/";

    constructor(private route: ActivatedRoute, private http: Http) { }

    public ngOnInit() {
        this.route.params.subscribe((params: any) => this.initializeCountryByCode(params.code));
    }

    public initializeCountryByCode(code: string) {
        this.http.get(this.url + code).subscribe((res) => this.country = res.json());
    }

    public getFlagSrc(code: string) {
        return code ? this.flagUrl + code.toLowerCase() + ".png" : "";
    }
}