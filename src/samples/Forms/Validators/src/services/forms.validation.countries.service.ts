import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

@Injectable()
export class FormsValidationCountriesService {
    private url: string = "https://restcountries.eu/rest/v2/all";

    constructor (private http: Http) { }

    public getCountries () {
        return this.http.get(this.url).map((response) => {
            let countries: any[] =  response.json();
            return countries.map((country) => country.name);
        });
    }
}