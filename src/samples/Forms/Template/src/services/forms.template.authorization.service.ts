import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

import { LoginDetails } from "../models/LoginDetails";

@Injectable()
export class FormsTemplateAuthorizationService {
    // tslint:disable-next-line:variable-name
    private _isAuthenticated: boolean;

    public get isAuthenticated(): boolean {
        return this._isAuthenticated;
    }

    public login(loginDetails: LoginDetails): Observable<boolean> {
        let subject = new Subject<boolean>();
        if (this.areValidCredentials(loginDetails)) {
            this._isAuthenticated = true;
        }

        setTimeout(() => this.resolveSubject(subject, this.isAuthenticated), 1500);
        return subject;
    }

    private areValidCredentials(loginDetails: LoginDetails) {
        return this.isValidUserName(loginDetails.username) && this.isValidPassword(loginDetails.password)
    }

    private isValidUserName(username: string) {
        return username === UserCredentials.username;
    }

    private isValidPassword(password: string) {
        return password === UserCredentials.password;
    }

    private resolveSubject(subject: Subject<boolean>, value: boolean) {
        subject.next(this.isAuthenticated);
        subject.complete();
    }
}

const UserCredentials = {
    username: "angular",
    password: "123ng"
};