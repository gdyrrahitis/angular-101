import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LoginDetails } from "../models/LoginDetails";
import { FormsTemplateAuthorizationService } from "../services/forms.template.authorization.service";

@Component({
    moduleId: module.id,
    selector: "forms-template-edit-account",
    templateUrl: "forms.template.edit.account.component.html",
    styles: [`
        .has-error {
            border-left: 5px solid #a94442;
        }
    `]
})
export class FormsTemplateEditAccountComponent {
    public loginDetails: {
        username: string,
        password: string,
        confirmPassword: string
    };
    private isSubmitted: boolean;

    constructor(private authorizationService: FormsTemplateAuthorizationService,
                private router: Router) {
        let login = this.authorizationService.getLoginDetails();
        this.loginDetails = {
            username: login.username,
            password: "",
            confirmPassword: ""
        };
    }

    public isRequiredValid(element): boolean {
        return element.invalid && !element.pristine;
    }

    public passwordDoesNotMatchConfirmation(password, confirmPassword): boolean {
        return (password.valid && !password.pristine) &&
            (confirmPassword.valid && !confirmPassword.pristine) &&
            (confirmPassword.value !== password.value);
    }

    public save() {
        this.isSubmitted = true;
        this.authorizationService.saveLoginDetails({
            username: this.loginDetails.username,
            password: this.loginDetails.password
        }).subscribe(() => {
            this.isSubmitted = false;
            this.router.navigate(["/forms", "template"]);
        });
    }
}