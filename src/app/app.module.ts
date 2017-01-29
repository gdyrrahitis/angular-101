import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";

// TODO: Add to individual modules
import { AppComponent, HeaderComponent, SamplesListComponent, FooterComponent } from "./components/index";
import { PropertyComponent } from "../samples/Bindings/Property/index";

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
        SafePipe],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
