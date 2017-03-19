import { Directive, ElementRef, Input } from "@angular/core";
import { Code } from "../enums/Code";

@Directive({
    selector: "[bgImage]",
})
export class BackgroundColorByTypeDirective {
    private url: string = "http://flagpedia.net/data/flags/normal/";

    @Input("bgImage") set countryFlag(code: Code) {
        this.elementRef.nativeElement.style.backgroundImage = this.getBackgroundImageFromType(code);
    }

    constructor(private elementRef: ElementRef) { }

    private getBackgroundImageFromType(code: Code) {
        return "url(" + this.url + Code[code].toLowerCase() + ".png)";
    }
}