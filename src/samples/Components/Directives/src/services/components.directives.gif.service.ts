import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ComponentsDirectivesGifService {
    private url: string = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC";

    constructor(private http: Http) { }

    public getRandomGif(): Observable<any> {
        return this.http.get(this.url).map((response) => {
            return response.json().data;
        });
    }
}