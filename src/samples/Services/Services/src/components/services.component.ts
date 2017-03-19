import { Component, OnInit } from "@angular/core";
import { CountryService } from "../../index";
import { Code } from "../enums/Code";
import { ICountry } from "../models/Country";

@Component({
    moduleId: module.id,
    selector: "app-services",
    templateUrl: "./services.component.html",
    styleUrls: ["./services.component.css"],
})
export class ServicesComponent implements OnInit {
    public countries: ICountry[];

    constructor(private countryService: CountryService) { }

    public ngOnInit() {
        this.countries = this.countryService.getCountries();
    }

    public getCodeNameFrom(code: Code): string {
        return Code[code];
    }
}