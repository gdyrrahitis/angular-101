import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from "@angular/platform-browser"; 

import { AppComponent, HeaderComponent, SamplesListComponent }   from './components/index';

let router = RouterModule.forRoot([
    {
        path: 'home',
        component: SamplesListComponent
    }
]);

@NgModule({
    imports: [BrowserModule, router],
    declarations: [AppComponent, HeaderComponent, SamplesListComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
