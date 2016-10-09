import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {AppHeaderComponent} from "./app.header.component";
import {SamplesListComponent} from "./app.sampleslist.component";
import {InterpolationComponent} from "./../../Sections/Section1/Interpolation/app/interpolation.component";
import {NgIfComponent} from "./../../Sections/Section1/NgIf/app/ngif.component";
import {NgForComponent} from "./../../Sections/Section1/NgFor/app/ngfor.component";
import {PropertyBindingComponent} from "./../../Sections/Section1/Property_Binding/app/propertybinding.component";
import {EventBindingComponent} from "./../../Sections/Section1/Event_Binding/app/eventbinding.component";
import {TwoWayBindingComponent} from "./../../Sections/Section1/Two_Way_Binding/app/twowaybinding.component";
import {DirectivesComponent} from "./../../Sections/Section2/Directives/app/directives.component";
import {ServicesComponent} from "./../../Sections/Section2/Services/app/services.component";
import {InjectingComponent} from "./../../Sections/Section2/Dependency_Injection/app/injecting.component";
import {MetadataComponent} from "./../../Sections/Section2/Metadata/app/metadata.component";
import {LifecycleHooksComponent} from "./../../Sections/Section2/Lifecycle_Hooks/app/lifecyclehooks.component";
import {PipesComponent} from "./../../Sections/Section2/Pipes/app/pipes.component";
import {ChildsComponent} from "./../../Sections/Section3/Child_Components/app/childs.component";
import {ViewChildComponent} from "./../../Sections/Section3/View_Child/app/viewchild.component";
import {InteractionComponent} from "./../../Sections/Section3/Component_interaction/app/interaction.component";
import {HttpComponent} from "./../../Sections/Section4/Http/app/http.component";
import {PromisesComponent} from "./../../Sections/Section4/Promises/app/promises.component";
import {AsyncPipeComponent} from "./../../Sections/Section4/Async_Pipe/app/asyncpipe.component";
import {RoutingComponent} from "./../../Sections/Section4/Routing/app/routing.component";
import {HierarchicalRoutesComponent} from "./../../Sections/Section4/Hierarchical_Routes/app/hierarchical.component";

@RouteConfig([
    { path: "/", name: "Home", component: SamplesListComponent, useAsDefault: true },
    { path: "/interpolation", name: "Interpolation", component: InterpolationComponent },
    { path: "/ngif", name: "NgIf", component: NgIfComponent },
    { path: "/ngfor", name: "NgFor", component: NgForComponent },
    { path: "/property-binding", name: "PropertyBinding", component: PropertyBindingComponent },
    { path: "/event-binding", name: "EventBinding", component: EventBindingComponent },
    { path: "/two-way-binding", name: "TwoWayBinding", component: TwoWayBindingComponent },
    { path: "/directives", name: "Directives", component: DirectivesComponent },
    { path: "/services", name: "Services", component: ServicesComponent },
    { path: "/dependency-injection", name: "Injecting", component: InjectingComponent },
    { path: "/metadata", name: "Metadata", component: MetadataComponent },
    { path: "/child-components", name: "Childs", component: ChildsComponent },
    { path: "/viewchild", name: "ViewChild", component: ViewChildComponent },
    { path: "/lifecycle-hooks", name: "LifecycleHooks", component: LifecycleHooksComponent },
    { path: "/interaction-between-components", name: "Interaction", component: InteractionComponent },
    { path: "/pipes", name: "Pipes", component: PipesComponent },
    { path: "/http", name: "Http", component: HttpComponent },
    { path: "/promises", name: "Promises", component: PromisesComponent },
    { path: "/async-pipe", name: "AsyncPipe", component: AsyncPipeComponent },
    { path: "/routing", name: "Routing", component: RoutingComponent },
    { path: "/hierarchical-routes", name: "HierarchicalRoutes", component: HierarchicalRoutesComponent },
])
@Component({
    selector: "my-app",
    templateUrl: "modules/Templates/app.master.html",
    styleUrls: ["modules/Content/Components/app.component.css"],
    directives: [AppHeaderComponent, ROUTER_DIRECTIVES]
})
export class AppComponent { }