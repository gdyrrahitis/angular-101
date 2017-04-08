import { Component, OnInit } from "@angular/core";
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
export class FormsTemplateDrivenComponent implements OnInit {
    public credentials: LoginDetails;
    public login: LoginDetails;
    private error: any;
    private submitIsEnabled: boolean = true;

    constructor(
        private authorizationService: FormsTemplateAuthorizationService,
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
                    this.router.navigate(["forms", "template", "secret", "robo-images"]);
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