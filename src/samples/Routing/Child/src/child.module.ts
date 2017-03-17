import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./routes";
import { ChildComponent, CountryCurrencyEuroComponent, CountryDetailsComponent, CountryLanguageGreekComponent } from "../index";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [
        ChildComponent,
        CountryCurrencyEuroComponent,
        CountryLanguageGreekComponent,
        CountryDetailsComponent
    ]
})
export class ChildModule { }
