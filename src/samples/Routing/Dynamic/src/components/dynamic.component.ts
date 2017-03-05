import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "app-dynamic",
    templateUrl: "./dynamic.component.html",
    styles: [
        `
        .margin-bottom-15 {
            margin-bottom: 15px;
        }
        `
    ]
})
export class DynamicComponent {
    regions: string[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
}