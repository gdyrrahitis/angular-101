import { Routes } from "@angular/router";

import { ChildComponent, CountryCurrencyEuroComponent, CountryDetailsComponent, CountryLanguageGreekComponent } from "./index";

export const ROUTES: Routes = [
    {
        path: "country",
        component: ChildComponent,
        children: [
            {
                path: "currency/euro",
                component: CountryCurrencyEuroComponent,
            },
            {
                path: "language/greek",
                component: CountryLanguageGreekComponent,
                children: [
                    {
                        path: ":code",
                        component: CountryDetailsComponent,
                    },
                ],
            },
        ],
    },
];