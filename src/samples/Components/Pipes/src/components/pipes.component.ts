import { Component, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";

@Component({
    moduleId: module.id,
    selector: "app-pipes",
    templateUrl: "./pipes.component.html",
    styleUrls: ["./pipe.component.css"]
})
export class PipesComponent implements OnInit {
    private url: string = "https://restcountries.eu/rest/v2/alpha?codes=cn;gb;us;it;cy";
    
    countries: any[];

    constructor(private _http: Http) { }

    ngOnInit() {
        this._http.get(this.url).subscribe(res => {
            let ordered: any = (<any[]>res.json()).sort(this.sortOnPopulation);
            this.countries = ordered;
        });
    }

    private sortOnPopulation(a: any, b: any): number {
        if (a.population < b.population)
            return 1;
        else if (a.population == b.population)
            return 0;
        else
            return -1;
    }
}