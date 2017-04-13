import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

import { FormsValidationCountriesService } from "../services/forms.validation.countries.service";
import { FormsSettingsService } from "../services/forms.validation.settings.service";

@Component({
    moduleId: module.id,
    selector: "app-forms-validation-form",
    templateUrl: "./forms.validation.form.component.html",
    styles: [`
        .has-error {
            border-left: 5px solid #a94442;
        }
    `]
})

export class FormsValidationFormComponent implements OnInit {
    public countries: any[];
    public form: FormGroup;
    public settings: { names: string[], countries: string[] };
    public model: {
        firstName: string,
        country: string,
        emailSection: {
            email: string,
            emailConfirm: string
        }
    } = {
        firstName: "",
        country: "",
        emailSection: {
            email: "",
            emailConfirm: ""
        }
    };
    // tslint:disable-next-line:max-line-length
    public emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    constructor(
        private countriesService: FormsValidationCountriesService,
        private settingsService: FormsSettingsService,
        private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
            firstName: "",
            country: "",
            emailSection: this.formBuilder.group({
                email: "",
                emailConfirm: ""
            })
        });
    }

    public ngOnInit() {
        this.settings = this.settingsService.getSettings();
        this.countriesService.getCountries().subscribe((countries) => this.countries = countries);

        let emailControl = this.formBuilder.control("email",
            [Validators.required, Validators.pattern(this.emailPattern)]);
        this.form.setControl("firstName",
            this.formBuilder.control("firstName", [Validators.required, this.restrictNames(this.settings.names)]));
        this.form.setControl("country",
            this.formBuilder.control("country",
                [Validators.required, this.restrictCountries(this.settings.countries)]));
        this.form.setControl("emailSection", this.formBuilder.group({
            email: emailControl,
            emailConfirm: this.formBuilder.control("emailConfirm",
                [Validators.required, Validators.pattern(this.emailPattern), this.fieldsHaveTheSameValue(emailControl)])
        }));
    }

    public isControlValidAsRequired(control: AbstractControl): boolean {
        return !control.pristine && control.errors && (<any>control.errors).required;
    }

    private restrictNames(names: string[]): any {
        return (control: FormControl): any => {
            if (!names) { return null; }
            if (names.length === 0) { return null; }

            return names.some((value) => control.value.toLowerCase() === value.toLowerCase()) ?
                { restrictNames: `${control.value} is in restricted list.` } : null;
        };
    }

    private restrictCountries(countries: string[]): any {
        return (control: FormControl): any => {
            if (!countries) { return null; }
            if (countries.length === 0) { return null; }

            return countries.some((value) => control.value.toLowerCase() === value.toLowerCase()) ?
                { restrictCountries: `${control.value} is in restricted list.` } : null;
        };
    }

    private fieldsHaveTheSameValue(confirmationField: FormControl): any {
        return (targetField: FormControl): { [key: string]: any } => {
            return confirmationField.value.toLowerCase() !== targetField.value.toLowerCase() ?
                { fieldsHaveTheSameValue: "Field values don't match" } : null;
        };
    }
}