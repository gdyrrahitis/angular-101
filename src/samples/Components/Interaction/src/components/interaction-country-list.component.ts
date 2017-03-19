import { Component, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";
import { PubSubService } from "../services/pub-sub.service";

@Component({
    moduleId: module.id,
    selector: "app-interaction-country-list",
    templateUrl: "./interaction-country-list.component.html",
})
export class InteractionCountryListComponent implements OnInit {
    public countriesArray: any[] = [];
    public selectedCountry: any;
    public addMode: boolean;
    private url: string = "https://restcountries.eu/rest/v2/all";
    private limit: number = 6;

    constructor(private http: Http, private pubSubService: PubSubService) { }

    public ngOnInit() {
        this.http.get(this.url).subscribe((res) => this.httpGetHandler(res));
        this.pubSubService.emitter.subscribe((value) => {
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

    public httpGetHandler(res: Response) {
        let response: any[] = res.json();
        let max = response.length - 1;
        let rows = this.limit / 2;
        let columns = this.limit / 3;

        for (let i = 0; i < rows; i++) {
            let countryArray = [];
            for (let j = 0; j < columns; j++) {
                let random: number = +(Math.random() * max);
                let country = response[random];
                countryArray.push(country);
            }
            this.countriesArray.push(countryArray);
        }
    }

    public countrySelection(country) {
        this.selectedCountry = country;
    }

    public setAddMode() {
        this.addMode = true;
    }

    public cancelAddMode() {
        this.addMode = false;
    }
}