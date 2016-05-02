import {Directive, ElementRef, Input, Output, EventEmitter} from "angular2/core";

@Directive({
    selector: "[pokeRender]",
    host: {
        "(click)": "clickHandler()"
    }
})
export class PokemonRenderDirective {
    private imagePath: string = "modules/Content/images";
    private imageToRender: string;
    private clicks: number;

    @Input("initial") set initialPokemon(pokemonName) {
        this.render(pokemonName);
    };
    @Input("evolutions") pokemonNextEvolutions: string[];
    @Output() myOnClick = new EventEmitter();

    constructor(private el: ElementRef) {
        this.clicks = 0;
    }

    clickHandler() {
        var that = this;
        if (that.clicks >= 5) return;
        that.clicks++;
        that.myOnClick.emit({ value: that.clicks });

        if (that.clicks >= 5) {
            var nextEvolution = that.pokemonNextEvolutions[0];
            that.preEvolve();
            setTimeout(function () {
                that.render(nextEvolution);
                that.postEvolve();
            }, 3000);
        }
    }

    private postEvolve() {
        var body = document.querySelector("body");
        body.className = "";
    }

    private preEvolve() {
        var body = document.querySelector("body");
        body.className = "flash";
    }

    private render(pokemonName) {
        this.imageToRender = this.imagePath + "/" + pokemonName + ".png";
        this.el.nativeElement.src = this.imageToRender;
    }
}