import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: "[ngNot]"
})
export class NgNotDirective {
    private viewHasBeenCreatedBefore: boolean = false;

    @Input() public set ngNot(condition: boolean) {
        if (!condition && !this.viewHasBeenCreatedBefore) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
            this.viewHasBeenCreatedBefore = true;
        } else if (condition && this.viewHasBeenCreatedBefore) {
            this.viewContainerRef.clear();
            this.viewHasBeenCreatedBefore = false;
        }
    };

    constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }
}