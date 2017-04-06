import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { User } from "../models/User";
import { FormsReactiveAuthorizationService } from "../services/forms.reactive.authorization.service";
import { FormsReactiveNamesService } from "../services/forms.reactive.names.service";

@Component({
    moduleId: module.id,
    selector: "app-forms-reactive-calculator",
    templateUrl: "./forms.reactive.genderize.component.html",
    styles: [`
        .margin-top-15 {
            margin-top: 15px;
        }

        .margin-top-20 {
            margin-top: 20px;
        }
    `]
})
export class FormsReactiveGenderizeComponent implements OnInit {
    public currentUser: User;
    public form: FormGroup = new FormGroup({ name: new FormControl() });
    public isFirstNameButtonSelected: boolean = true;
    public response: any;
    public errorResponse: { param: string, message: string };

    public get nameHasNoValue() {
        return !this.form.controls.name.value;
    }

    constructor(
        private namesService: FormsReactiveNamesService,
        private authorizationService: FormsReactiveAuthorizationService) { }

    public ngOnInit() {
        if (this.authorizationService.isAuthenticated) {
            let user = this.authorizationService.currentUser;
            this.currentUser = Object.assign({}, user);
            this.genderizeName(this.currentUser.firstName);
        } else {
            console.error("Security breach! Shouldn't have access to this page");
        }
    }

    private genderizeName(name: string) {
        this.namesService
            .getAnswerOnName(name)
            .subscribe((res) => {
                this.errorResponse = undefined;
                this.response = undefined;
                let genderized = res;
                if (isNaN(genderized.probability)) {
                    this.errorResponse = {
                        param: name,
                        message: "Please use a real name."
                    };
                } else {
                    this.response = genderized;
                }
            });
    }

    public selectFirstNameButton() {
        this.isFirstNameButtonSelected = true;
        this.form.controls.name.reset();
        this.genderizeName(this.currentUser.firstName);
    }

    public search() {
        this.isFirstNameButtonSelected = false;
        this.genderizeName(this.form.controls.name.value);
    }
}