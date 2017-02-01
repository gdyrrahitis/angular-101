import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

// TODO: Add to individual modules
import { AppComponent, HeaderComponent, SamplesListComponent, FooterComponent } from "./components/index";
import { PropertyComponent, EventComponent, TwoWayComponent } from "../samples/Bindings/index";
import { InterpolationComponent, NgIfComponent, NgForComponent } from "../samples/Templates/index";
import { ServicesComponent, BackgroundColorByTypeDirective, CountryService } from "../samples/Services/index";

import { SafePipe } from "./pipes/index";

let router = RouterModule.forRoot([
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: SamplesListComponent
    },
    {
        path: 'binding/property',
        component: PropertyComponent
    },
    {
        path: 'binding/event',
        component: EventComponent
    },
    {
        path: 'binding/two-way',
        component: TwoWayComponent
    },
    {
        path: 'templates/interpolation',
        component: InterpolationComponent
    },
    {
        path: 'templates/ngif',
        component: NgIfComponent
    },
    {
        path: 'templates/ngfor',
        component: NgForComponent
    },
        {
        path: 'services/services',
        component: ServicesComponent
    }
]);

@NgModule({
    imports: [BrowserModule, router, FormsModule],
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

        SafePipe],
    providers: [CountryService],
    bootstrap: [AppComponent]
})
export class AppModule { }
