import { Component, OnChanges, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";

import { FormsValidationCountriesService } from "../services/forms.validation.countries.service";
import { FormsSettingsService } from "../services/forms.validation.settings.service";

@Component({
    moduleId: module.id,
    selector: "app-forms-validation-settings",
    templateUrl: "./forms.validation.settings.component.html"
})

export class FormsValidationSettingsComponent implements OnInit {
    public settings: { names: string[], countries: string[] };
    public form: FormGroup;
    public countriesList: any[];
    public nameExistsError: boolean;

    constructor(
        private countriesService: FormsValidationCountriesService,
        private settingsService: FormsSettingsService,
        private formBuilder: FormBuilder) {

        this.countriesService.getCountries().subscribe((countries) => this.countriesList = countries);

        this.form = this.formBuilder.group({
            newName: this.formBuilder.control("", Validators.required),
            newCountry: this.formBuilder.control("", Validators.required),
            names: this.formBuilder.array([]),
            countries: this.formBuilder.array([])
        });
    }

    public ngOnInit() {
        this.settings = this.settingsService.getSettings();

        let names = this.settings.names
            .map((value) => this.formBuilder.group({ firstName: [{ value, disabled: true }] }));
        this.form.setControl("names", this.formBuilder.array(names));

        let countries = this.settings.countries
            .map((value) => this.formBuilder.group({ countryName: { value, disabled: true } }));
        this.form.setControl("countries", this.formBuilder.array(countries));
    }

    public get names(): FormArray {
        return this.form.get("names") as FormArray;
    }

    public addName(name: string) {
        let value = this.form.controls.newName.value || name;
        let nameExists = this.settingsService.nameExists(value);

        if (!nameExists) {
            this.nameExistsError = false;
            this.names.push(this.formBuilder.group({ firstName: [{ value, disabled: true }] }));
            this.form.controls.newName.reset();

            this.settingsService.addName(value);
        }else {
            this.nameExistsError = true;
        }
    }

    public removeName(index: number) {
        let control = this.names.at(index);
        this.names.removeAt(index);
        this.form.controls.newName.reset();

        this.settingsService.removeName(control.value);
    }

    public get countries(): FormArray {
        return this.form.get("countries") as FormArray;
    }

    public addCountry(country: string) {
        let value = this.form.controls.newCountry.value || name;

        this.countries.push(this.formBuilder.group({ countryName: [{ value, disabled: true }] }));
        this.form.controls.newCountry.reset();

        this.settingsService.addCountry(value);
    }

    public removeCountry(index: number) {
        let control = this.countries.at(index);
        this.countries.removeAt(index);
        this.form.controls.newCountry.reset();

        this.settingsService.removeCountry(control.value);
    }

    public countryInListOfSelected(country: string) {
        return this.settings.countries.some((value) => value.toLowerCase() === country.toLowerCase());
    }
}