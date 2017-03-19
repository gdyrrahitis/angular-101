import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "two-way-binding",
    templateUrl: "./two-way.component.html",
    styleUrls: ["./two-way.component.css"],
})
export class TwoWayComponent {
    url: string;

    constructor() {
        this.url = "http://flagpedia.net/data/flags/normal/$P0.png";
    }

    getFlagByCode(code: string) {
        return this.url.replace("$P0", code);
    }
}
