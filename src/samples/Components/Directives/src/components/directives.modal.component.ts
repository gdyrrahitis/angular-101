import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "app-directives-modal",
    templateUrl: "./directives.modal.component.html"
})
export class DirectivesModalComponent {
    @ViewChild("modal") public modalElement: ElementRef;
    @Input() public gif: any;
    @Output() public close = new EventEmitter();

    public triggerClose() {
        this.close.emit();
    }
}