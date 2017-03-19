import { Component, Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "app-projection-country-multiple-slot",
    templateUrl: "./projection-country-multiple-slot.component.html",
})
export class ProjectionCountryMultipleSlotComponent {
    @Input() public name: string;
    public visible: boolean = true;

    public toggleVisibility(event) {
        event.preventDefault();
        this.visible = !this.visible;
    }
}