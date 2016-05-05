import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {AppHeaderComponent} from "./app.header.component";
import {SamplesListComponent} from "./app.sampleslist.component";
import {InterpolationComponent} from "./../../Sections/Section1/101_1.1_Interpolation/app/interpolation.component";
import {NgIfComponent} from "./../../Sections/Section1/101_1.2_NgIf/app/ngif.component";
import {NgForComponent} from "./../../Sections/Section1/101_1.3_NgFor/app/ngfor.component";
import {PropertyBindingComponent} from "./../../Sections/Section1/101_1.4_Property_Binding/app/propertybinding.component";
import {EventBindingComponent} from "./../../Sections/Section1/101_1.5_Event_Binding/app/eventbinding.component";
import {TwoWayBindingComponent} from "./../../Sections/Section1/101_1.6_Two_Way_Binding/app/twowaybinding.component";
import {DirectivesComponent} from "./../../Sections/Section2/101_2.1_Directives/app/directives.component";
import {ServicesComponent} from "./../../Sections/Section2/101_2.2_Services/app/services.component";
import {InjectingComponent} from "./../../Sections/Section2/101_2.3_Dependency_Injection/app/injecting.component";
import {MetadataComponent} from "./../../Sections/Section3/101_3.1_Metadata/app/metadata.component";
import {ChildsComponent} from "./../../Sections/Section3/101_3.2_Child_Components/app/childs.component";
import {ViewChildComponent} from "./../../Sections/Section3/101_3.3_View_Child/app/viewchild.component";
import {LifecycleHooksComponent} from "./../../Sections/Section3/101_3.4_Lifecycle_Hooks/app/lifecyclehooks.component";
import {InteractionComponent} from "./../../Sections/Section3/101_3.5_Component_interaction/app/interaction.component";
import {PipesComponent} from "./../../Sections/Section4/101_4.1_Pipes/app/pipes.component";
import {HttpComponent} from "./../../Sections/Section4/101_4.2_Http/app/http.component";
import {PromisesComponent} from "./../../Sections/Section4/101_4.3_Promises/app/promises.component";
import {AsyncPipeComponent} from "./../../Sections/Section4/101_4.4_Async_Pipe/app/asyncpipe.component";
import {RoutingComponent} from "./../../Sections/Section4/101_4.5_Routing/app/routing.component";
import {HierarchicalRoutesComponent} from "./../../Sections/Section4/101_4.6_Hierarchical_Routes/app/hierarchical.component";

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