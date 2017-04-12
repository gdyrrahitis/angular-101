import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import { ComponentsDirectivesGifService } from "../services/components.directives.gif.service";
import { ComponentsDirectivesRestCountriesService } from "../services/components.directives.restcountries.service";

@Component({
    moduleId: module.id,
    selector: "app-directives",
    templateUrl: "./directives.component.html"
})
export class DirectivesComponent implements OnInit {
    @ViewChild("trigger") public trigger: ElementRef;
    public regions: string[] = [];
    public countries: any[] = [];
    public gif: any;
    private selectedRegion: string;
    private selectedCountry: string;
    private regionToHide: string;
    private haveSeenGif: boolean = false;

    constructor(
        private gifService: ComponentsDirectivesGifService,
        private restCountriesService: ComponentsDirectivesRestCountriesService) { }

    public ngOnInit() {
        this.getRegions();
        this.getRandomGif();
    }

    private getRegions() {
        this.restCountriesService.getRegions().subscribe((regions) => this.regions = regions);
    }

    private getRandomGif() {
        this.gifService.getRandomGif().subscribe((gif) => this.gif = gif);
    }

    private requestNewGif() {
        this.haveSeenGif = false;
        this.getRandomGif();
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

    public triggerClose() {
        this.haveSeenGif = true;
        this.trigger.nativeElement.click();
    }
}