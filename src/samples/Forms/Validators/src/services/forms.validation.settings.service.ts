import { Injectable } from "@angular/core";

@Injectable()
export class FormsSettingsService {
    private settings: { names: string[], countries: string[] } = { names: ["George"], countries: ["Greece"] };

    public getSettings(): { names: string[], countries: string[] } {
        return this.settings;
    }

    public addName(name: string) {
        this.settings.names.push(name);
    }

    public addCountry(country: string) {
        this.settings.countries.push(country);
    }

    public removeName(name: string) {
        let index = this.settings.names.indexOf(name, 0);
        this.settings.names.splice(index, 1);
    }

    public removeCountry(country: string) {
        let index = this.settings.countries.indexOf(country, 0);
        this.settings.countries.splice(index, 1);
    }

    public nameExists(name: string) {
        let item = this.settings.names.filter((value) => value.toLowerCase() === name.toLowerCase())[0];
        return typeof(item) !== "undefined";
    }

    public countryExists(country: string) {
        let item = this.settings.countries.filter((value) => value.toLowerCase() === country.toLowerCase())[0];
        return typeof(item) !== "undefined";
    }
}