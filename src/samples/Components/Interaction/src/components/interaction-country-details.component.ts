import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

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
    ]
})
export class InteractionCountryDetailsComponent implements OnChanges {
    @Input() public color: string;
    @Input() public country: any;
    @Output() public selectedCountry = new EventEmitter();
    public previousColor: string;
    private flagUrl = "http://flagpedia.net/data/flags/small/";
    private backgroundColor: string;

    public get bgColor() {
        return this.backgroundColor.toLowerCase();
    }

    @Input() public set bgColor(color: string) {
        this.backgroundColor = color;
    }

    public getFlagSrcByCode(code: string) {
        return this.flagUrl + code.toLowerCase() + ".png";
    }

    public ngOnChanges(changes: SimpleChanges) {
        let anchorColor = (<any> changes).color;
        if (anchorColor) {
            this.previousColor = anchorColor.previousValue ? anchorColor.previousValue : "";
            this.color = anchorColor.currentValue;
        }
    }

    public updateSelectedCountry(event, country) {
        event.preventDefault();
        this.selectedCountry.emit(country);
    }
}