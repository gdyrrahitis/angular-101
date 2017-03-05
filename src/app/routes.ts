import { RouterModule } from "@angular/router";

// TODO: Add to individual modules
import { AppComponent, HeaderComponent, SamplesListComponent, FooterComponent } from "./components/index";
import { PropertyComponent, EventComponent, TwoWayComponent } from "../samples/Bindings/index";
import { InterpolationComponent, NgIfComponent, NgForComponent } from "../samples/Templates/index";
import { ServicesComponent, BackgroundColorByTypeDirective, CountryService, CountriesService, ContinentService, DiComponent, ColorService } from "../samples/Services/index";
import { HttpComponent } from "../samples/Remote/index";
import {
    ChildComponent, CountryCurrencyEuroComponent, CountryLanguageGreekComponent, CountryDetailsComponent,
    DynamicComponent, DynamicContinentChildComponent, DynamicCountryChildComponent, DynamicFxRatesComponent
} from "../samples/Routing/index";
import { CountriesListComponent } from "../samples/Components/index";

export const Router = RouterModule.forRoot([
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: SamplesListComponent
    },
    {
        path: "binding/property",
        component: PropertyComponent
    },
    {
        path: "binding/event",
        component: EventComponent
    },
    {
        path: "binding/two-way",
        component: TwoWayComponent
    },
    {
        path: "templates/interpolation",
        component: InterpolationComponent
    },
    {
        path: "templates/ngif",
        component: NgIfComponent
    },
    {
        path: "templates/ngfor",
        component: NgForComponent
    },
    {
        path: "services/services",
        component: ServicesComponent
    },
    {
        path: "services/di",
        component: DiComponent
    },
    {
        path: "remote/http",
        component: HttpComponent
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
                        component: CountryDetailsComponent
                    }
                ]
            }
        ]
    },
    {
        path: "routing/dynamic",
        component: DynamicComponent,
        children: [
            {
                path: "continent/:name",
                component: DynamicContinentChildComponent
            },
            {
                path: "continent/:name/country/:code",
                component: DynamicCountryChildComponent,
                children: [
                    {
                        path: "fx-rates/:currency",
                        component: DynamicFxRatesComponent
                    }
                ]
            }
        ]
    },
    {
        path: "component/child",
        component: CountriesListComponent
    }
]);