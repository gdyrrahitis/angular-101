import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

import { LoginDetails } from "../models/LoginDetails";
import { FormsReactiveAuthorizationService } from "../services/forms.reactive.authorization.service";

@Component({
    moduleId: module.id,
    selector: "app-forms-reactive",
    templateUrl: "./forms.reactive.driven.component.html",
    styles: [`
        .has-error {
            border-left: 5px solid #a94442;
        }
    `]
})
export class FormsReactiveDrivenComponent implements OnInit {
    public form: FormGroup = this.getForm();
    public credentials: LoginDetails;
    public login: LoginDetails;
    private error: any;
    private submitIsEnabled: boolean = true;

    constructor(
        private authorizationService: FormsReactiveAuthorizationService,
        private router: Router) { }

    public ngOnInit() {
        let login = { username: "", password: "" };
        this.login = login;

        this.credentials = this.authorizationService.getLoginDetails();
    }

    public onFormSubmit(form) {
        this.error = undefined;
        this.submitIsEnabled = false;
        this.authorizationService
            .login(this.login)
            .catch((error) => {
                return Observable.throw(error);
            })
            .subscribe((isLoggedIn) => {
                if (isLoggedIn) {
                    this.router.navigate(["forms", "reactive", "secret", "genderize-name"]);
                } else {
                    this.error = {
                        error: "Login failed",
                        message: "Either username or password are incorrect. Please try again."
                    };
                }

                this.submitIsEnabled = true;
            });
    }

    public getForm(): FormGroup {
        return new FormGroup({
            username: new FormControl("", Validators.required),
            password: new FormControl("", Validators.required)
        });
    }
}