import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

// TODO: Add to individual modules
import { AppComponent, HeaderComponent, SamplesListComponent, FooterComponent } from "./components/index";
import { PropertyComponent, EventComponent, TwoWayComponent } from "../samples/Bindings/index";
import { InterpolationComponent } from "../samples/Templates/index";

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
        SafePipe],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
