import { Route } from "@angular/router";

// TODO: Add to individual modules
import { EventComponent, PropertyComponent, TwoWayComponent } from "../samples/Bindings/index";
import {
    CountriesListComponent, InteractionCountryListComponent,
    PipesComponent,
    ProjectionCountryListComponent,
} from "../samples/Components/index";
import { HttpComponent } from "../samples/Remote/index";
import {
    ChildComponent, CountryCurrencyEuroComponent, CountryDetailsComponent, CountryLanguageGreekComponent,
    DynamicComponent, DynamicContinentChildComponent, DynamicCountryChildComponent, DynamicFxRatesComponent,
} from "../samples/Routing/index";
import {
    BackgroundColorByTypeDirective, ColorService, ContinentService,
    CountriesService, CountryService, DiComponent, ServicesComponent
} from "../samples/Services/index";
import { InterpolationComponent, NgForComponent, NgIfComponent } from "../samples/Templates/index";
import { AppComponent, FooterComponent, HeaderComponent, SamplesListComponent } from "./components/index";

export const ROUTES: Route[] = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
    },
    {
        path: "home",
        component: SamplesListComponent,
    },
    {
        path: "binding/property",
        component: PropertyComponent,
    },
    {
        path: "binding/event",
        component: EventComponent,
    },
    {
        path: "binding/two-way",
        component: TwoWayComponent,
    },
    {
        path: "templates/interpolation",
        component: InterpolationComponent,
    },
    {
        path: "templates/ngif",
        component: NgIfComponent,
    },
    {
        path: "templates/ngfor",
        component: NgForComponent,
    },
    {
        path: "services/services",
        component: ServicesComponent,
    },
    {
        path: "services/di",
        component: DiComponent,
    },
    {
        path: "remote/http",
        component: HttpComponent,
    },
    {
        path: "routing/child/country",
        component: ChildComponent,
        children: [
            {
                path: "currency/euro",
                component: CountryCurrencyEuroComponent,
            },
            {
                path: "language/greek",
                component: CountryLanguageGreekComponent,
                children: [
                    {
                        path: ":code",
                        component: CountryDetailsComponent,
                    },
                ],
            },
        ],
    },
    {
        path: "routing/dynamic",
        component: DynamicComponent,
        children: [
            {
                path: "continent/:name",
                component: DynamicContinentChildComponent,
            },
            {
                path: "continent/:name/country/:code",
                component: DynamicCountryChildComponent,
                children: [
                    {
                        path: "fx-rates/:currency",
                        component: DynamicFxRatesComponent,
                    },
                ],
            },
        ],
    },
    {
        path: "component/child",
        component: CountriesListComponent,
    },
    {
        path: "component/interaction",
        component: InteractionCountryListComponent,
    },
    {
        path: "component/projection",
        component: ProjectionCountryListComponent,
    },
    {
        path: "component/pipes",
        component: PipesComponent,
    },
];