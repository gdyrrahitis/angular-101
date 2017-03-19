import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { PopulationService } from "../services/async-pipe.population.service";

@Component({
    moduleId: module.id,
    selector: "app-async-pipe",
    templateUrl: "./async-pipe.component.html",
})
export class AsyncPipeComponent implements OnInit {
    public countries: Observable<any>;
    public rank: Observable<{
        dob: string,
        country: string,
        rank: number,
        sex: "male" | "female"
    }>;
    public populationRank: { countryName: string, dateOfBirth: Date, sex: "male" | "female" } = {
        countryName: undefined,
        dateOfBirth: new Date(2000, 0, 1),
        sex: "male"
    };
    public countrySelected: boolean;

    constructor(private populationService: PopulationService) { }

    public ngOnInit() {
        this.countries = this.populationService.getCountries();
    }

    public changeValue() {
        this.rank = this.populationService
            .getGivenPersonWorldPopulationRankOfToday(this.populationRank.dateOfBirth,
                this.populationRank.sex, this.populationRank.countryName);
    }
}