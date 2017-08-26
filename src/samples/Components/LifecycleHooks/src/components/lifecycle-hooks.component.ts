import { Component, OnInit, ViewChild } from "@angular/core";
import { Http } from "@angular/http";

import { LifecycleHooksChildComponent } from "./lifecycle-hooks-child.component";

@Component({
    moduleId: module.id,
    selector: "app-lifecycle-hooks",
    templateUrl: "./lifecycle-hooks.component.html",
})
export class LifecycleHooksComponent implements OnInit {
    private defaultCountry: string = "Greece";
    private countries: any[] = [];
    private country: any = {
        name: this.defaultCountry,
        timezones: ["+02.00"]
    };
    @ViewChild(LifecycleHooksChildComponent) private child: LifecycleHooksChildComponent;
    private show: boolean = true;
    private url: string = "https://restcountries.eu/rest/v1/all/";

    constructor(private http: Http) { }

    public ngOnInit() {
        this.http.get(this.url)
            .map((response) => (<any[]>response.json()).map((country) => {
                return {
                    name: country.name,
                    timezones: (<string[]>country.timezones).map((c) => c.replace("UTC", "").replace(":", "."))
                };
            }))
            .subscribe((countries) => this.countries = countries);
    }

    private reset() {
        if (this.child) {
            this.show = false;
        }
    }

    private onDestroy() {
        if (this.child) {
            setTimeout(() => {
                this.show = true;
                this.country = {
                    name: this.defaultCountry,
                    timezones: ["+02.00"]
                };
            }, 2000);
        }
    }

    private onCountryChange(name: any) {
        let timezones: string = this.countries.filter((c) => c.name === name)[0].timezones;
        this.country.timezones = timezones;
    }
}