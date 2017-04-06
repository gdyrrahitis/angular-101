import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";

import { FormsReactiveAuthorizationService } from "../services/forms.reactive.authorization.service";

@Injectable()
export class FormsReactiveAuthorizationPassRouterActivator implements CanActivate {
    constructor(
        private authorizationService: FormsReactiveAuthorizationService,
        private router: Router) { }

    public canActivate(route: ActivatedRouteSnapshot) {
        let isAuthenticated = this.authorizationService.isAuthenticated;
        if (isAuthenticated) {
            this.router.navigate(["forms", "reactive", "secret", "genderize-name"]);
        }

        return true;
    }
}