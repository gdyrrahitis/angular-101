import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser"; 

import { AppComponent, AppHeaderComponent, SamplesListComponent }   from './Components/index';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, AppHeaderComponent, SamplesListComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class NameModule { }
