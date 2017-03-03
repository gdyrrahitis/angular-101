import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RoutingModule } from "./routing.module";

// TODO: Add to individual modules
import { AppComponent, HeaderComponent, SamplesListComponent, FooterComponent } from "./components/index";
import { PropertyComponent, EventComponent, TwoWayComponent } from "../samples/Bindings/index";
import { InterpolationComponent, NgIfComponent, NgForComponent } from "../samples/Templates/index";
import { ServicesComponent, BackgroundColorByTypeDirective, CountryService, CountriesService, ContinentService, DiComponent, ColorService } from "../samples/Services/index";
import { HttpComponent } from "../samples/Remote/index";
import { ChildComponent, CountryCurrencyEuroComponent, CountryLanguageGreekComponent } from "../samples/Routing/index";
import { ChildCountryComponent, CountriesListComponent } from "../samples/Components/index";

import { SafePipe } from "./pipes/index";

@NgModule({
    imports: [BrowserModule, RoutingModule, FormsModule, HttpModule],
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

        ChildCountryComponent,
        CountriesListComponent,

        ChildComponent,
        CountryCurrencyEuroComponent,
        CountryLanguageGreekComponent,

        SafePipe],
    providers: [CountryService, CountriesService, ContinentService, ColorService],
    bootstrap: [AppComponent]
})
export class AppModule { }
