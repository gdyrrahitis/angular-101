import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { FormsReactiveAuthorizationService } from "../services/forms.reactive.authorization.service";
import { FormsReactiveCountriesService } from "../services/forms.reactive.countries.service";

@Component({
    moduleId: module.id,
    selector: "forms-reactive-edit-profile",
    templateUrl: "forms.reactive.edit.profile.component.html",
    styles: [`
        .has-error {
            border-left: 5px solid #a94442;
        }
    `]
})
export class FormsReactiveEditProfileComponent implements OnInit {
    public form: FormGroup;
    public currentUser: any;
    public countries: string[];
    // tslint:disable-next-line:max-line-length
    public emailPattern =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    private submitted: boolean = false;
    private formSubmitted: boolean = false;

    constructor(
        private authorizationService: FormsReactiveAuthorizationService,
        private countriesService: FormsReactiveCountriesService,
        private router: Router) { }

    public ngOnInit() {
        this.currentUser = this.getCurrentUser();
        this.countriesService.getCountries().subscribe((countries) => this.countries = countries);

        this.form = new FormGroup({
            firstName: new FormControl(this.currentUser.firstName, Validators.required),
            lastName: new FormControl(this.currentUser.lastName, Validators.required),
            email: new FormControl(this.currentUser.email,
                [Validators.required, Validators.pattern(this.emailPattern)]),
            address: new FormGroup({
                street: new FormControl(this.currentUser.address.street),
                zip: new FormControl(this.currentUser.address.zip, Validators.maxLength(5)),
                country: new FormControl(this.currentUser.address.country)
            })
        });
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
        this.formSubmitted = true;
        this.authorizationService.saveProfileDetails(this.currentUser).subscribe(() => {
            this.submitted = true;
            setTimeout(() => this.router.navigate(["forms", "reactive", "secret", "genderize-name"]), 1000);
        });
    }
}