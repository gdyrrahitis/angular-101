import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

@Injectable()
export class FormsTemplateCountriesService {
    private url: string = "http://api.population.io:80/1.0/countries";

    constructor (private http: Http) { }

    public getCountries () {
        return this.http.get(this.url).map((response) => response.json().countries);
    }
}