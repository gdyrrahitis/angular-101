import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { ROUTES} from "./routes";

// TODO: Add to individual modules
import { AppComponent, HeaderComponent, SamplesListComponent, FooterComponent } from "./components/index";
import { PropertyComponent, EventComponent, TwoWayComponent } from "../samples/Bindings/index";
import { InterpolationComponent, NgIfComponent, NgForComponent } from "../samples/Templates/index";
import {
    ServicesComponent, BackgroundColorByTypeDirective, CountryService, CountriesService, ContinentService, DiComponent, ColorService, D3Service,
    MAP_CONFIG, MapConfiguration
} from "../samples/Services/index";
import { HttpComponent } from "../samples/Remote/index";
import {
    ChildComponent, CountryCurrencyEuroComponent, CountryLanguageGreekComponent, CountryDetailsComponent,
    DynamicComponent, DynamicContinentChildComponent, DynamicCountryChildComponent, DynamicFxRatesComponent
} from "../samples/Routing/index";
import {
    ChildCountryComponent, CountriesListComponent,
    InteractionCountryDetailsComponent, InteractionCountryListComponent, InteractionAddNewCountryComponent, PubSubService,
    ProjectionCountryListComponent, ProjectionCountryMultipleSlotComponent, ProjectionCountrySingleSlotComponent,
    PipesComponent, FlagSrcPipe, PeoplePipe
} from "../samples/Components/index";

import { SafePipe, KeysPipe } from "./pipes/index";

@NgModule({
    imports: [
        BrowserModule, 
        RouterModule.forRoot(ROUTES), 
        FormsModule, 
        HttpModule
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
        { provide: MAP_CONFIG, useValue: MapConfiguration }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
