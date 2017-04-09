import { Route } from "@angular/router";

// TODO: Add to individual modules
import { EventComponent, PropertyComponent, TwoWayComponent } from "../samples/Bindings/index";
import {
    CountriesListComponent, InteractionCountryListComponent,
    PipesComponent,
    ProjectionCountryListComponent,
} from "../samples/Components/index";
import {
    FormsReactiveAuthorizationPassRouterActivator, FormsReactiveAuthorizationRouterActivator,
    FormsReactiveDrivenComponent, FormsReactiveEditAccountComponent,
    FormsReactiveEditProfileComponent, FormsReactiveGenderizeComponent,
    FormsReactiveSecretComponent, FormsTemplateAuthorizationPassRouterActivator,
    FormsTemplateAuthorizationRouterActivator, FormsTemplateCalculatorComponent,
    FormsTemplateDrivenComponent, FormsTemplateEditAccountComponent,
    FormsTemplateEditProfileComponent, FormsTemplateSecretComponent,
    FormsValidationComponent, FormsValidationFormComponent, FormsValidationSettingsComponent
} from "../samples/Forms/index";
import { AsyncPipeComponent, HttpComponent, PromisesComponent } from "../samples/Remote/index";
import {
    ChildComponent, CountryCurrencyEuroComponent, CountryDetailsComponent, CountryLanguageGreekComponent,
    DynamicComponent, DynamicContinentChildComponent, DynamicCountryChildComponent, DynamicFxRatesComponent
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
                component: CountryCurrencyEuroComponent
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
    },
    {
        path: "component/interaction",
        component: InteractionCountryListComponent
    },
    {
        path: "component/projection",
        component: ProjectionCountryListComponent
    },
    {
        path: "component/pipes",
        component: PipesComponent
    },
    {
        path: "remote/async",
        component: AsyncPipeComponent
    },
    {
        path: "remote/promises",
        component: PromisesComponent
    },
    {
        path: "forms/template",
        component: FormsTemplateDrivenComponent,
        canActivate: [FormsTemplateAuthorizationPassRouterActivator]
    },
    {
        path: "forms/template/secret",
        component: FormsTemplateSecretComponent,
        canActivate: [FormsTemplateAuthorizationRouterActivator],
        canActivateChild: [FormsTemplateAuthorizationRouterActivator],
        // redirectTo: "forms/template/secret/robo-images",
        children: [
            {
                path: "robo-images",
                component: FormsTemplateCalculatorComponent
            },
            {
                path: "edit-profile",
                component: FormsTemplateEditProfileComponent
            },
            {
                path: "edit-account",
                component: FormsTemplateEditAccountComponent
            }
        ]
    },
    {
        path: "forms/reactive",
        component: FormsReactiveDrivenComponent,
        canActivate: [FormsReactiveAuthorizationPassRouterActivator]
    },
    {
        path: "forms/reactive/secret",
        component: FormsReactiveSecretComponent,
        canActivate: [FormsReactiveAuthorizationRouterActivator],
        canActivateChild: [FormsReactiveAuthorizationRouterActivator],
        // redirectTo: "forms/reactive/secret/genderize-name",
        children: [
            {
                path: "genderize-name",
                component: FormsReactiveGenderizeComponent
            },
            {
                path: "edit-profile",
                component: FormsReactiveEditProfileComponent
            },
            {
                path: "edit-account",
                component: FormsReactiveEditAccountComponent
            }
        ]
    },
    {
        path: "forms/validation",
        component: FormsValidationComponent,
        children: [
            {
                path: "form",
                component: FormsValidationFormComponent
            },
            {
                path: "settings",
                component: FormsValidationSettingsComponent
            }
        ]
    }
];