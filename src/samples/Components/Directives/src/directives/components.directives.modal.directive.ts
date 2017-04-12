import { Directive, ElementRef, HostListener, Input } from "@angular/core";

import { DirectivesModalComponent } from "../components/directives.modal.component";

@Directive({ selector: "[modal-open]" })
export class ComponentsDirectivesModalDirective {
    private element: HTMLElement;
    @Input() public set modalElement(component: DirectivesModalComponent) {
        this.element = component.modalElement.nativeElement;
    };

    @HostListener("click") public onClick() {
        let overlay = document.querySelector("body>div.overlay");
        if (overlay.classList.contains("hidden")) {
            overlay.classList.remove("hidden");
        } else {
            overlay.classList.add("hidden");
        }

        if (this.element.className === "modal-close") {
            this.element.className = "modal-open";
            let modal = this.element.querySelector(".modal");
            modal.setAttribute("style", "display:block");
        } else {
            this.element.className = "modal-close";
            let modal = this.element.querySelector(".modal");
            modal.setAttribute("style", "display:none");
        }
    };
}