import { Component, OnInit } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "app-child",
    templateUrl: "./child.component.html"
})
export class ChildComponent implements OnInit {
    ngOnInit() {
        console.log("Loaded");
    }
}