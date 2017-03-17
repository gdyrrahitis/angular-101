import { Component, OnInit } from "@angular/core";
import { CountryService } from "../../index";
import { ICountry } from "../models/Country";
import { Code } from "../enums/Code";

@Component({
    moduleId: module.id,
    selector: "app-services",
    templateUrl: "./services.component.html",
    styleUrls: ["./services.component.css"]
})
export class ServicesComponent implements OnInit {
    countries: ICountry[];

    // Injected service in constructor without using @inject decorator
    constructor(private _countryService: CountryService) { }

    ngOnInit() {
        // Calling service method
        this.countries = this._countryService.getCountries();
    }

    getCodeNameFrom(code: Code): string {
        return Code[code];
    }
}