import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "app-interaction-country-details",
    templateUrl: "./interaction-country-details.component.html",
    styles: [
        `
        .flag{
            width: 90;
            height: 60;
        }
        `,
    ],
})
export class InteractionCountryDetailsComponent {
    private flagUrl = "http://flagpedia.net/data/flags/small/";
    @Input() country: any;
    @Output() selectedCountry = new EventEmitter();

    constructor() { }

    getFlagSrcByCode(code: string) {
        return this.flagUrl + code.toLowerCase() + ".png";
    }

    updateSelectedCountry(event, country) {
        event.preventDefault();
        this.selectedCountry.emit(country);
    }
}