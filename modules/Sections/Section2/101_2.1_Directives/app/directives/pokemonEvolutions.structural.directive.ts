import {Directive, Input, TemplateRef, ViewContainerRef, ViewRef, HostViewRef} from "angular2/core";

@Directive({
    selector: "[pokeEvolutions]"
})
export class PokemonEvolutionsStructuralDirective {
    
    private imagePath: string = "modules/Content/images";
    
    @Input("pokeEvolutions") set evolutions (allEvolutuons: string[]) {
        var that = this;
        that.viewContainer.clear();
        allEvolutuons.forEach(element => {
            var view = that.viewContainer.createEmbeddedView(that.templateRef);
            view.rootNodes.forEach((node) => {
                node.src = this.imagePath + "/" + element + ".png";
                node.alt = element;
                node.className = "img-thumbnail";
                node.style = "width:150px;height:150px;";
            });
        });
    }

    constructor(private templateRef: TemplateRef,
               private viewContainer: ViewContainerRef) { }
}