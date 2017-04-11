import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: "[ngNot]"
})
export class NgNotDirective {
    private hasViewBeenCreatedBefore: boolean = false;

    @Input() public set ngNot(condition: boolean) {
        if (!condition && !this.hasViewBeenCreatedBefore) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
            this.hasViewBeenCreatedBefore = true;
        } else if (condition && this.hasViewBeenCreatedBefore) {
            this.viewContainerRef.clear();
            this.hasViewBeenCreatedBefore = false;
        }
    };

    constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }
}