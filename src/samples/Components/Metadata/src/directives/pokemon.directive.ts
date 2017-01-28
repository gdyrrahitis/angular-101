import { Directive, ElementRef, Input } from "angular2/core";
import { Pokemon } from "./pokemon.type";

@Directive({
    selector: "legendary"
})
export class PokemonDirective {
    @Input("pokemon") set legendaryPokemon (pokemon: Pokemon) {
        this.element.nativeElement.src = pokemon.imageUrl;
        this.element.nativeElement.title = pokemon.name;
        this.element.nativeElement.width = "300";
        this.element.nativeElement.height = "300";
        this.element.nativeElement.className = "img-rounded img-thumbnail";
    }
    
    constructor(private element: ElementRef) { }
}