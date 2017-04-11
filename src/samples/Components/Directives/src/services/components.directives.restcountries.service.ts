import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()
export class ComponentsDirectivesRestCountriesService {
    private baseUrl: string = "https://restcountries.eu/rest/v2/";
    private regionsPart: string = "region/";

    constructor(private http: Http) { }

    public getRegions(): Observable<any> {
        let regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
        let subject = new Subject<any>();

        setTimeout(() => {
            subject.next(regions);
            subject.complete();
        }, 100);

        return subject;
    }

    public getCountriesByRegion(region: string) {
        return this.http.get(`${this.baseUrl}${this.regionsPart}${region}`).map((response) => {
            let countries = response.json();
            return countries.map((obj) => {
                return { name: obj.name, code: obj.alpha2Code, capital: obj.capital, population: obj.population };
            });
        });
    }
}