import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Http, Response } from "@angular/http";

@Component({
    moduleId: module.id,
    selector: 'app-dynamic-continent',
    templateUrl: './dynamic-continent-child.component.html',
})
export class DynamicContinentChildComponent implements OnInit {
    private url: string = "https://restcountries.eu/rest/v2/region/";
    currentContinent: string;
    countries: any[] = [];
    alphabet: string[] = [
        "A", "B", "C", "D", "E", "F",
        "G", "H", "I", "J", "K", "L",
        "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X",
        "Y", "Z"
    ];

    constructor(private _route: ActivatedRoute, private _http: Http) { }

    ngOnInit() {
        this._route.params.subscribe(params => this.fetchCountriesByContinentName(params.name));
    }

    fetchCountriesByContinentName(name: string) {
        this.currentContinent = name;
        this._http.get(this.url + name).subscribe(res => {
            this.countries = [];
            let response: any[] = res.json();

            this.alphabet.forEach((letter) => {
                let countriesWithInitial = {
                    initial: letter,
                    countries: []
                };
                response.forEach((value) => {
                    let firstLetter = value.name.charAt(0);

                    if(firstLetter !== letter){
                        return;
                    }

                    countriesWithInitial.countries.push(value);
                });
                this.countries.push(countriesWithInitial);
            });
        });
    }
}