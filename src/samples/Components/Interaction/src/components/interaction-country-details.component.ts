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
    @Input() public country: any;
    @Output() public selectedCountry = new EventEmitter();
    private flagUrl = "http://flagpedia.net/data/flags/small/";

    public getFlagSrcByCode(code: string) {
        return this.flagUrl + code.toLowerCase() + ".png";
    }

    public updateSelectedCountry(event, country) {
        event.preventDefault();
        this.selectedCountry.emit(country);
    }
}