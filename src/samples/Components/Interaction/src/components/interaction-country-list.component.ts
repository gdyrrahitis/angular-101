import { Component, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";
import { PubSubService } from "../services/pub-sub.service";

@Component({
    moduleId: module.id,
    selector: "app-interaction-country-list",
    templateUrl: "./interaction-country-list.component.html",
})
export class InteractionCountryListComponent implements OnInit {
    private url: string = "https://restcountries.eu/rest/v2/all";
    private limit: number = 6;
    countriesArray: any[] = [];
    selectedCountry: any;
    addMode: boolean;

    constructor(private _http: Http, private _pubSubService: PubSubService) { }

    ngOnInit() {
        this._http.get(this.url).subscribe((res) => this.httpGetHandler(res));
        this._pubSubService.emitter.subscribe((value) => {
            let length = this.countriesArray.length;
            let lastInnerArray: any[] = this.countriesArray[length - 1];
            if (lastInnerArray.length === 2) {
                // New row
                let newRow = [value];
                this.countriesArray.push(newRow);
            } else {
                // Push to array
                lastInnerArray.push(value);
            }
        });
    }

    httpGetHandler(res: Response) {
        let response: any[] = res.json();
        let max = response.length - 1;
        let rows = this.limit / 2;
        let columns = this.limit / 3;

        for (let i = 0; i < rows; i++) {
            let countryArray = [];
            for (let j = 0; j < columns; j++) {
                let random: number = parseInt((Math.random() * max).toString());
                let country = response[random];
                countryArray.push(country);
            }
            this.countriesArray.push(countryArray);
        }
    }

    countrySelection(country) {
        this.selectedCountry = country;
    }

    setAddMode() {
        this.addMode = true;
    }

    cancelAddMode() {
        this.addMode = false;
    }
}