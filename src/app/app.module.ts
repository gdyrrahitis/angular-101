import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent, HeaderComponent, SamplesListComponent, FooterComponent } from "./components/index";

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
    }
]);

@NgModule({
    imports: [BrowserModule, router],
    declarations: [
        AppComponent, 
        HeaderComponent,
        SamplesListComponent, 
        FooterComponent,
        SafePipe],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
