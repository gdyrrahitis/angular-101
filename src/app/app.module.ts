import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { ROUTES} from "./routes";

// TODO: Add to individual modules
import { EventComponent, PropertyComponent, TwoWayComponent } from "../samples/Bindings/index";
import {
    ChildCountryComponent, CountriesListComponent,
    FlagSrcPipe, InteractionAddNewCountryComponent, InteractionCountryDetailsComponent, InteractionCountryListComponent,
    PeoplePipe, PipesComponent, ProjectionCountryListComponent,
    ProjectionCountryMultipleSlotComponent, ProjectionCountrySingleSlotComponent, PubSubService,
} from "../samples/Components/index";
import { HttpComponent } from "../samples/Remote/index";
import {
    ChildComponent, CountryCurrencyEuroComponent, CountryDetailsComponent, CountryLanguageGreekComponent,
    DynamicComponent, DynamicContinentChildComponent, DynamicCountryChildComponent, DynamicFxRatesComponent,
} from "../samples/Routing/index";
import {
    BackgroundColorByTypeDirective, ColorService, ContinentService, CountriesService, CountryService, D3Service, DiComponent, MAP_CONFIG,
    MapConfiguration, ServicesComponent,
} from "../samples/Services/index";
import { InterpolationComponent, NgForComponent, NgIfComponent } from "../samples/Templates/index";
import { AppComponent, FooterComponent, HeaderComponent, SamplesListComponent } from "./components/index";

import { KeysPipe, SafePipe } from "./pipes/index";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES),
        FormsModule,
        HttpModule,
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
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
