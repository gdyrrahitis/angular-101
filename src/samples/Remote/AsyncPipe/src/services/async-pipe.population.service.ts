import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/do";
import { Observable } from "rxjs/Observable";

@Injectable()
export class PopulationService {
    private url: string = "http://api.population.io:80/1.0/";
    private get countriesEndpoint() {
        return this.url + "countries";
    }

    constructor(private http: Http) { }

    public getCountries(): Observable<any> {
        return this.http.get(this.countriesEndpoint)
            .catch(this.handleError)
            .map((response) => response.json().countries);
    }

    private handleError(error) {
        return Observable.throw(error);
    }

    public getGivenPersonWorldPopulationRankOfToday(
        dateOfBirth: Date,
        sex: "male" | "female",
        country: string): Observable<{
            dob: string,
            country: string,
            rank: number,
            sex: "male" | "female"
        }> {
        return this.http.get(this.getPopulationRankForTodayUrl(dateOfBirth, sex, country))
            .catch(this.handleError)
            .map((response) => response.json());
    }

    private getPopulationRankForTodayUrl(dateOfBirth: Date, sex: "male" | "female", country: string) {
        let date = `${dateOfBirth.getFullYear()}-${dateOfBirth.getMonth() + 1}-${dateOfBirth.getDate()}`;
        return `${this.url}wp-rank/${date}/${sex}/${country}/today`;
    }
}