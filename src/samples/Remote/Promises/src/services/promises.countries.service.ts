import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/toPromise";
import { Observable } from "rxjs/Observable";

@Injectable()
export class PromisesCountriesService {
    private countriesUrl: string = "http://api.population.io:80/1.0/countries";
    private populationUrl: string = "http://api.population.io:80/1.0/population/${country}/today-and-tomorrow/";

    constructor(private http: Http) { }

    public getCountries() {
        return this.http
            .get(this.countriesUrl)
            .map((response) => response.json().countries)
            .toPromise();
    }

    public getPopulationForTodayAndTomorrow(country: string) {
        return this.http
            .get(this.populationUrl.replace("${country}", country))
            .map((response) => response.json().total_population)
            .toPromise();
    }
}