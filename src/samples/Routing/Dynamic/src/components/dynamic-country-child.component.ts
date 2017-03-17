import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Http, Response } from "@angular/http";

@Component({
    moduleId: module.id,
    selector: 'app-dynamic-country',
    templateUrl: './dynamic-country-child.component.html'
})
export class DynamicCountryChildComponent implements OnInit {
    private url: string = "https://restcountries.eu/rest/v2/alpha/";
    private flagUrl = "http://flagpedia.net/data/flags/small/";
    country: any;

    constructor(private _route: ActivatedRoute, private _http: Http) { }

    ngOnInit() { 
        this._route.params.subscribe((params:any) => this.initializeCountryByCode(params.code));
    }

    initializeCountryByCode(code: string) {
        this._http.get(this.url + code).subscribe(res => this.country = res.json());
    }

    getFlagSrc(code: string) {
        return code ? this.flagUrl + code.toLowerCase() + ".png" : "";
    }
}