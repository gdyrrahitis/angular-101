import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";

// TODO: Add to individual modules
import { AppComponent, HeaderComponent, SamplesListComponent, FooterComponent } from "./components/index";
import { PropertyComponent } from "../samples/Bindings/Property/index";
import { EventComponent } from "../samples/Bindings/Event/index";

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
    }
]);

@NgModule({
    imports: [BrowserModule, router],
    declarations: [
        AppComponent,
        HeaderComponent,
        SamplesListComponent,
        FooterComponent,
        PropertyComponent,
        EventComponent,
        SafePipe],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
