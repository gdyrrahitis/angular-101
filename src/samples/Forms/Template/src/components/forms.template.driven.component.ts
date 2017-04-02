import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

import { LoginDetails } from "../models/LoginDetails";
import { FormsTemplateAuthorizationService } from "../services/forms.template.authorization.service";

@Component({
    moduleId: module.id,
    selector: "app-forms-template",
    templateUrl: "./forms.template.driven.component.html",
    styles: [`
        .has-error {
            border-left: 5px solid #a94442;
        }
    `]
})
export class FormsTemplateDrivenComponent {
    public login: LoginDetails = {
        username: "",
        password: ""
    };
    private error: any;
    private submitIsEnabled: boolean = true;

    constructor(private authorizationService: FormsTemplateAuthorizationService,
                private router: Router) { }

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
                    this.router.navigate(["forms", "template", "secret", "life-expectancy-calculator"]);
                } else {
                    this.error = {
                        error: "Login failed",
                        message: "Either username or password are incorrect. Please try again."
                    };
                }

                this.submitIsEnabled = true;
            });
    }
}