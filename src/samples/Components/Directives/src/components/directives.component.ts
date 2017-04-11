import { Component, OnInit } from "@angular/core";

import { ComponentsDirectivesRestCountriesService } from "../services/components.directives.restcountries.service";

@Component({
    moduleId: module.id,
    selector: "app-directives",
    templateUrl: "./directives.component.html"
})
export class DirectivesComponent implements OnInit {
    public regions: string[] = [];
    public countries: any[] = [];
    private selectedRegion: string;
    private selectedCountry: string;
    private regionToHide: string;

    constructor(private restCountriesService: ComponentsDirectivesRestCountriesService) { }

    public ngOnInit() {
        this.getRegions();
    }

    private getRegions() {
        this.restCountriesService.getRegions().subscribe((regions) => this.regions = regions);
    }

    private resetRegions() {
        this.regionToHide = undefined;
    }

    public setCountries(region: string) {
        this.selectedRegion = region;
        this.restCountriesService.getCountriesByRegion(region).subscribe((countries: any[]) => {
            if (countries && countries.length > 0) {
                this.countries = countries;
                this.selectedCountry = this.countries[0];
            }
        });
    }

    public setCountry(code: string) {
        this.selectedCountry = this.countries.filter((country) => country.code === code)[0];
    }

    public hideSelectedRegion(region: string) {
        this.regionToHide = region;
        if (region === this.selectedRegion) {
            this.selectedRegion = undefined;
            this.selectedCountry = undefined;
            this.countries = [];
        }
    }
}