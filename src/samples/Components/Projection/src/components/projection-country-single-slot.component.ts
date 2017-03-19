import { Component, Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "app-projection-country-single-slot",
    templateUrl: "./projection-country-single-slot.component.html",
    styles: [
        `
        .flag {
            width: 90;
            height: 60;
        }
        `,
    ],
})
export class ProjectionCountrySingleSlotComponent {
    public visible: boolean = true;
    @Input() public country: any;
    private url: string = "http://flagpedia.net/data/flags/small/";

    public getFlagSrc(code: string) {
        return `${this.url}${code.toLowerCase()}.png`;
    }

    public toggleVisibility(event) {
        event.preventDefault();
        this.visible = !this.visible;
    }
}