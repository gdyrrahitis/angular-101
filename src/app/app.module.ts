import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AccordionModule } from "ng2-bootstrap";
import { DatepickerModule } from "ng2-bootstrap";

import { ROUTES } from "./routes";

// TODO: Add to individual modules
import { EventComponent, PropertyComponent, TwoWayComponent } from "../samples/Bindings/index";
import {
    ChildCountryComponent, CountriesListComponent,
    FlagSrcPipe, InteractionAddNewCountryComponent, InteractionCountryDetailsComponent, InteractionCountryListComponent,
    PeoplePipe, PipesComponent, ProjectionCountryListComponent,
    ProjectionCountryMultipleSlotComponent, ProjectionCountrySingleSlotComponent, PubSubService,
} from "../samples/Components/index";
import {
    FormsReactiveAuthorizationPassRouterActivator, FormsReactiveAuthorizationRouterActivator,
    FormsReactiveAuthorizationService, FormsReactiveCountriesService, FormsReactiveDrivenComponent,
    FormsReactiveGenderizeComponent, FormsReactiveNamesService,
    FormsReactiveSecretComponent, FormsTemplateAuthorizationPassRouterActivator,
    FormsTemplateAuthorizationRouterActivator, FormsTemplateAuthorizationService,
    FormsTemplateCalculatorComponent, FormsTemplateCountriesService, FormsTemplateDrivenComponent,
    FormsTemplateEditAccountComponent, FormsTemplateEditProfileComponent, FormsTemplateSecretComponent
} from "../samples/Forms/index";
import {
    AsyncPipeComponent, HttpComponent, PopulationService,
    PromisesComponent, PromisesCountriesService
} from "../samples/Remote/index";
import {
    ChildComponent, CountryCurrencyEuroComponent, CountryDetailsComponent, CountryLanguageGreekComponent,
    DynamicComponent, DynamicContinentChildComponent, DynamicCountryChildComponent, DynamicFxRatesComponent,
} from "../samples/Routing/index";
import {
    BackgroundColorByTypeDirective, ColorService, ContinentService,
    CountriesService, CountryService, D3Service,
    DiComponent, MAP_CONFIG, MapConfiguration, ServicesComponent
} from "../samples/Services/index";
import { InterpolationComponent, NgForComponent, NgIfComponent } from "../samples/Templates/index";
import { AppComponent, FooterComponent, HeaderComponent, SamplesListComponent } from "./components/index";

import { KeysPipe, SafePipe } from "./pipes/index";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES),
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AccordionModule.forRoot(),
        DatepickerModule.forRoot()
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        SamplesListComponent,
        FooterComponent,

        PropertyComponent,
        EventComponent,
        TwoWayComponent,

        InterpolationComponent,
        NgIfComponent,
        NgForComponent,

        ServicesComponent,
        BackgroundColorByTypeDirective,
        DiComponent,

        HttpComponent,
        AsyncPipeComponent,
        PromisesComponent,

        ChildComponent, CountryCurrencyEuroComponent, CountryLanguageGreekComponent, CountryDetailsComponent,
        ChildCountryComponent,
        CountriesListComponent,
        DynamicComponent,
        DynamicContinentChildComponent,
        DynamicCountryChildComponent,
        DynamicFxRatesComponent,

        InteractionCountryDetailsComponent,
        InteractionCountryListComponent,
        InteractionAddNewCountryComponent,
        ProjectionCountryListComponent,
        ProjectionCountryMultipleSlotComponent,
        ProjectionCountrySingleSlotComponent,
        PipesComponent,

        FormsTemplateDrivenComponent,
        FormsTemplateSecretComponent,
        FormsTemplateCalculatorComponent,
        FormsTemplateEditAccountComponent,
        FormsTemplateEditProfileComponent,
        FormsReactiveDrivenComponent,
        FormsReactiveGenderizeComponent,
        FormsReactiveSecretComponent,

        SafePipe,
        KeysPipe,
        FlagSrcPipe,
        PeoplePipe],
    providers: [
        PubSubService,
        CountryService,
        CountriesService,
        ContinentService,
        ColorService,
        D3Service,
        { provide: MAP_CONFIG, useValue: MapConfiguration },
        PopulationService,
        PromisesCountriesService,
        FormsTemplateAuthorizationService,
        FormsTemplateCountriesService,
        FormsTemplateAuthorizationRouterActivator,
        FormsTemplateAuthorizationPassRouterActivator,
        FormsReactiveAuthorizationPassRouterActivator,
        FormsReactiveAuthorizationRouterActivator,
        FormsReactiveAuthorizationService,
        FormsReactiveCountriesService,
        FormsReactiveNamesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
