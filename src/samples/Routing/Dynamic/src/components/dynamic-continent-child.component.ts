import { Component, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";
import { ActivatedRoute } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "app-dynamic-continent",
    templateUrl: "./dynamic-continent-child.component.html",
})
export class DynamicContinentChildComponent implements OnInit {
    public currentContinent: string;
    public countries: any[] = [];
    public alphabet: string[] = [
        "A", "B", "C", "D", "E", "F",
        "G", "H", "I", "J", "K", "L",
        "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X",
        "Y", "Z",
    ];
    private url: string = "https://restcountries.eu/rest/v2/region/";

    constructor(private route: ActivatedRoute, private http: Http) { }

    public ngOnInit() {
        this.route.params.subscribe((params: any) => this.fetchCountriesByContinentName(params.name));
    }

    public fetchCountriesByContinentName(name: string) {
        this.currentContinent = name;
        this.http.get(this.url + name).subscribe((res) => this.responseHandler(res));
    }

    private responseHandler(res: Response) {
        this.countries = [];
        let response: any[] = res.json();

        this.alphabet.forEach((letter) => {
            let countriesWithInitial = {
                initial: letter,
                countries: [],
            };

            response.forEach((value) => {
                let firstLetter = value.name.charAt(0);

                if (firstLetter !== letter) {
                    return;
                }

                countriesWithInitial.countries.push(value);
            });
            this.countries.push(countriesWithInitial);
        });
    }
}