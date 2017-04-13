import { Component } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginDetails } from "../models/LoginDetails";
import { FormsReactiveAuthorizationService } from "../services/forms.reactive.authorization.service";

@Component({
    moduleId: module.id,
    selector: "forms-reactive-edit-account",
    templateUrl: "forms.reactive.edit.account.component.html",
    styles: [`
        .has-error {
            border-left: 5px solid #a94442;
        }
    `]
})
export class FormsReactiveEditAccountComponent {
    public loginDetails: {
        username: string,
        password: string,
        confirmPassword: string
    };
    public form: FormGroup;
    private isSubmitted: boolean;

    constructor(
        private authorizationService: FormsReactiveAuthorizationService,
        private router: Router) {
        let login = this.authorizationService.getLoginDetails();
        this.loginDetails = {
            username: login.username,
            password: "",
            confirmPassword: ""
        };

        this.form = new FormGroup({
            username: new FormControl(this.loginDetails.username, [Validators.required]),
            password: new FormControl(this.loginDetails.password, [Validators.required])
        });
        this.form.addControl("confirmPassword",
            new FormControl(this.loginDetails.confirmPassword,
                [Validators.required, this.passwordMatch((<any>this.form.controls).password)]));
    }

    public isRequiredValid(element): boolean {
        return element.invalid && !element.pristine;
    }

    private passwordMatch(password: AbstractControl): any {
        return (confirmPassword: FormControl): any => {
            return (password.valid && !password.pristine) &&
                (confirmPassword.valid && !confirmPassword.pristine) &&
                (confirmPassword.value !== password.value) ?
                { passwordMatch: "Passwords do not match" } : null;
        };
    }

    private havePasswordFieldsBeenVisited() {
        return !(<any>this.form.controls).confirmPassword.pristine && !(<any>this.form.controls).password.pristine;
    }

    private passwordsMatch(): boolean {
        return (<any>this.form.controls).confirmPassword.value === (<any>this.form.controls).password.value;
    }

    private isRequiredValidForPasswordConfirmation() {
        return !(<any>this.form.controls).confirmPassword.pristine &&
            (<any>this.form.controls).confirmPassword.value === "";
    }

    public save() {
        this.isSubmitted = true;
        this.authorizationService.saveLoginDetails({
            username: this.loginDetails.username,
            password: this.loginDetails.password
        }).subscribe(() => {
            this.isSubmitted = false;
            this.router.navigate(["/forms", "reactive"]);
        });
    }
}