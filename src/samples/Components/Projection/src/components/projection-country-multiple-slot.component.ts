import { Component, Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "app-projection-country-multiple-slot",
    templateUrl: "./projection-country-multiple-slot.component.html",
})
export class ProjectionCountryMultipleSlotComponent {
    @Input() name: string;
    visible: boolean = true;

    constructor() { }

    toggleVisibility(event) {
        event.preventDefault();
        this.visible = !this.visible;
    }
}