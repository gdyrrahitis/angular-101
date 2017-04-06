import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

@Injectable()
export class FormsReactiveNamesService {
    private url: string = "https://api.genderize.io/?name=";

    constructor(private http: Http) { }

    public getAnswerOnName(name: string) {
        return this.http.get(`${this.url}${name}`).map((response) => {
            let genderized = response.json();
            genderized.probability *= 100;
            return genderized;
        });
    }
}