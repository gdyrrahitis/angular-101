import { HttpClientModule } from "@angular/common/http";
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
    ChildCountryComponent, ComponentsDirectivesGifService,
    ComponentsDirectivesModalDirective, ComponentsDirectivesRestCountriesService,
    CountriesListComponent, DirectivesComponent, DirectivesModalComponent, FlagSrcPipe,
    InteractionAddNewCountryComponent, InteractionCountryDetailsComponent,
    InteractionCountryListComponent, LifecycleHooksChildComponent, LifecycleHooksComponent, NgNotDirective, PeoplePipe,
    PipesComponent, ProjectionCountryListComponent, ProjectionCountryMultipleSlotComponent,
    ProjectionCountrySingleSlotComponent, PubSubService
} from "../samples/Components/index";
import {
    FormsReactiveAuthorizationPassRouterActivator, FormsReactiveAuthorizationRouterActivator,
    FormsReactiveAuthorizationService, FormsReactiveCountriesService, FormsReactiveDrivenComponent,
    FormsReactiveEditAccountComponent, FormsReactiveEditProfileComponent,
    FormsReactiveGenderizeComponent, FormsReactiveNamesService,
    FormsReactiveSecretComponent, FormsSettingsService,
    FormsTemplateAuthorizationPassRouterActivator, FormsTemplateAuthorizationRouterActivator,
    FormsTemplateAuthorizationService, FormsTemplateCalculatorComponent, FormsTemplateCountriesService,
    FormsTemplateDrivenComponent, FormsTemplateEditAccountComponent, FormsTemplateEditProfileComponent,
    FormsTemplateSecretComponent, FormsValidationComponent, FormsValidationCountriesService,
    FormsValidationFormComponent, FormsValidationSettingsComponent
} from "../samples/Forms/index";
import {
    AsyncPipeComponent, HttpClientComponent, HttpComponent,
    PopulationService, PromisesComponent, PromisesCountriesService
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
        DatepickerModule.forRoot(),
        HttpClientModule
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
        HttpClientComponent,

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
        DirectivesComponent,
        NgNotDirective,
        ComponentsDirectivesModalDirective,
        DirectivesModalComponent,

        FormsTemplateDrivenComponent,
        FormsTemplateSecretComponent,
        FormsTemplateCalculatorComponent,
        FormsTemplateEditAccountComponent,
        FormsTemplateEditProfileComponent,
        FormsReactiveDrivenComponent,
        FormsReactiveGenderizeComponent,
        FormsReactiveSecretComponent,
        FormsReactiveEditAccountComponent,
        FormsReactiveEditProfileComponent,
        FormsValidationComponent,
        FormsValidationFormComponent,
        FormsValidationSettingsComponent,
        LifecycleHooksComponent,
        LifecycleHooksChildComponent,

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
        FormsReactiveNamesService,
        FormsSettingsService,
        FormsValidationCountriesService,
        ComponentsDirectivesRestCountriesService,
        ComponentsDirectivesGifService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
