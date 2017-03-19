import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import {
    ChildComponent, CountryCurrencyEuroComponent,
    CountryDetailsComponent, CountryLanguageGreekComponent
} from "../index";
import { ROUTES } from "./routes";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
    ],
    declarations: [
        ChildComponent,
        CountryCurrencyEuroComponent,
        CountryLanguageGreekComponent,
        CountryDetailsComponent,
    ],
})
export class ChildModule { }
