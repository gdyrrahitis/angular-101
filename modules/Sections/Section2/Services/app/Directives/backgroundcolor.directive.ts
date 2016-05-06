import {Directive, ElementRef, Input} from "angular2/core";
import {Type} from "./../Models/pokemon.models";

@Directive({
    selector: "[bgColor]"
})
export class BackgroundColorByTypeDirective {

    @Input("bgColor") set pokemonType(type: number) {
        this.elementRef.nativeElement.style.backgroundColor = this.getBackgroundColorFromType(type);
    }

    constructor(private elementRef: ElementRef) { }

    private getBackgroundColorFromType(type: Type) {
       
        switch (type) {
            case Type.Air: return "#ddd";
            case Type.Earth: return "#0f0";
            case Type.Electric: console.log("They match");return "#FFD42A";
            case Type.Fire: return "#f00";
            case Type.Ice: return "#00D4FF";
            case Type.Normal: return "#FFD4FF";
            case Type.Poison: return "#5500FF";
            case Type.Psycic: return "#D4FF55";
            case Type.Water: return "#00f";
         }
    }
}