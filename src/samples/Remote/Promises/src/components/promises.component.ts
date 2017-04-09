import { Component, OnInit } from "@angular/core";
import { PromisesCountriesService } from "../services/promises.countries.service";

@Component({
    moduleId: module.id,
    selector: "app-promises",
    templateUrl: "./promises.component.html",
})
export class PromisesComponent implements OnInit {
    public countries: any[];
    public totalPopulationRanks: any[];
    private selectedCountry: string;

    constructor(private countriesService: PromisesCountriesService) { }

    public ngOnInit() {
        this.countriesService.getCountries()
            .then((countries) => this.countries = countries)
            .catch((reason) => console.error(reason));
    }

    public onCountryChange($event) {
        this.countriesService
            .getPopulationForTodayAndTomorrow(this.selectedCountry)
            .then((response) => this.totalPopulationRanks = response)
            .catch((reason) => console.error(reason));
    }

    public getTodayOrTomorrow(date: string) {
        let input = new Date(date);
        let now = new Date();

        if (input.getDate() === now.getDate()
            && input.getMonth() === now.getMonth()
            && input.getFullYear() === now.getFullYear()) {
                return "today";
        }

        return "tomorrow";
    }

    public getIsOrWillBe(date: string) {
        let day = this.getTodayOrTomorrow(date);

        return day === "today" ? "is" : "will be";
    }
}