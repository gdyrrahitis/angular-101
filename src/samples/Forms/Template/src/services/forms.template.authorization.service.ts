import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

import { LoginDetails } from "../models/LoginDetails";
import { User } from "../models/User";

const UserCredentials = {
    username: "angular",
    password: "123ng"
};

const UserMock = new User("George", "Dyrrachitis", new Date(1989, 9, 26), "male", "Greece");

@Injectable()
export class FormsTemplateAuthorizationService {
    public currentUser: User;
    // tslint:disable-next-line:variable-name
    private _isAuthenticated: boolean;

    public get isAuthenticated(): boolean {
        return this._isAuthenticated && !!this.currentUser;
    }

    public login(loginDetails: LoginDetails): Observable<boolean> {
        let subject = new Subject<boolean>();
        if (this.areValidCredentials(loginDetails)) {
            this.currentUser = UserMock;
            this._isAuthenticated = true;
        }

        setTimeout(() => this.resolveSubject(subject, this.isAuthenticated), 1500);
        return subject;
    }

    private areValidCredentials(loginDetails: LoginDetails) {
        return this.isValidUserName(loginDetails.username) && this.isValidPassword(loginDetails.password);
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

    public getLoginDetails() {
        return UserCredentials;
    }

    public saveLoginDetails(loginDetails: LoginDetails) {
        let subject = new Subject<LoginDetails>();
        setTimeout(() => {
            UserCredentials.username = loginDetails.username;
            UserCredentials.password = loginDetails.password;
            this._isAuthenticated = false;
            this.currentUser = undefined;

            subject.next(loginDetails);
            subject.complete();
        }, 1000);
        return subject;
    }
}