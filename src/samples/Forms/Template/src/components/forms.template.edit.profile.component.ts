import { Component, OnInit } from "@angular/core";
import { FormsTemplateAuthorizationService } from "../services/forms.template.authorization.service";
import { FormsTemplateCountriesService } from "../services/forms.template.countries.service";

@Component({
    moduleId: module.id,
    selector: "forms-template-edit-profile",
    templateUrl: "forms.template.edit.profile.component.html",
    styles: [`
        .has-error {
            border-left: 5px solid #a94442;
        }
    `]
})
export class FormsTemplateEditProfileComponent implements OnInit {
    public currentUser: any;
    public countries: string[];
    // tslint:disable-next-line:max-line-length
    public emailPattern =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    private submitted: boolean = false;

    constructor(
        private authorizationService: FormsTemplateAuthorizationService,
        private countriesService: FormsTemplateCountriesService) { }

    public ngOnInit() {
        this.currentUser = this.getCurrentUser();
        this.countriesService.getCountries().subscribe((countries) => this.countries = countries);
    }

    private getCurrentUser() {
        let user = this.authorizationService.currentUser;
        return Object.assign({}, user);
    }

    public resetForm() {
        this.currentUser = this.getCurrentUser();
    }

    public isRequiredValid(element): boolean {
        return element.invalid && !element.pristine && !element.value;
    }

    public isValidEmail(element): boolean {
        let test = this.emailPattern.test(element.value);
        return test;
    }

    public save() {
        this.submitted = true;
        this.authorizationService.saveProfileDetails(this.currentUser).subscribe(() => {
            this.submitted = false;
        });
    }
}