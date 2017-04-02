import { Component, OnInit } from "@angular/core";
import { User } from "../models/User";
import { FormsTemplateAuthorizationService } from "../services/forms.template.authorization.service";
import { FormsTemplateCountriesService } from "../services/forms.template.countries.service";

@Component({
    moduleId: module.id,
    selector: "app-forms-template-calculator",
    templateUrl: "./forms.template.calculator.component.html"
})
export class FormsTemplateCalculatorComponent implements OnInit {
    public dt: Date;
    public minDate: Date = void 0;
    public maxDate: Date = new Date();
    public countries: any[];

    public currentUser: User;

    constructor(
        private authorizationService: FormsTemplateAuthorizationService,
        private countriesService: FormsTemplateCountriesService) { }

    public ngOnInit() {
        if (this.authorizationService.isAuthenticated) {
            this.countriesService.getCountries().subscribe((countries) => this.countries = countries);
            this.currentUser = this.authorizationService.currentUser;
        } else {
            console.error("Security breach! Shouldn't have access to this page");
        }
    }
}