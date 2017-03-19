// import {Directive, HostViewRef, Input, TemplateRef, ViewContainerRef, ViewRef} from "angular2/core";

// @Directive({
//     selector: "[pokeEvolutions]",
// })
// export class PokemonEvolutionsStructuralDirective {

//     private imagePath: string = "modules/Content/images";

//     @Input("pokeEvolutions") set evolutions (allEvolutuons: string[]) {
//         let that = this;
//         that.viewContainer.clear();
//         allEvolutuons.forEach((element) => {
//             let view = that.viewContainer.createEmbeddedView(that.templateRef);
//             view.rootNodes.forEach((node) => {
//                 node.src = this.imagePath + "/" + element + ".png";
//                 node.alt = element;
//                 node.className = "img-thumbnail";
//                 node.style = "width:150px;height:150px;";
//             });
//         });
//     }

//     constructor(private templateRef: TemplateRef,
//                 private viewContainer: ViewContainerRef) { }
// }