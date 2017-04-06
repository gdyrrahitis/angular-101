import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";

import { FormsReactiveAuthorizationService } from "../services/forms.reactive.authorization.service";

@Injectable()
export class FormsReactiveAuthorizationRouterActivator implements CanActivate, CanActivateChild {
    constructor(
        private authorizationService: FormsReactiveAuthorizationService,
        private router: Router) { }

    public canActivate(route: ActivatedRouteSnapshot) {
        let isAuthenticated = this.authorizationService.isAuthenticated;
        if (!isAuthenticated) {
            this.router.navigate(["forms", "reactive"]);
        }

        return isAuthenticated;
    }

    public  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route);
    }
}