import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";

import { FormsTemplateAuthorizationService } from "../services/forms.template.authorization.service";

@Injectable()
export class FormsTemplateAuthorizationRouterActivator implements CanActivate, CanActivateChild {
    constructor(
        private authorizationService: FormsTemplateAuthorizationService,
        private router: Router) { }

    public canActivate(route: ActivatedRouteSnapshot) {
        let isAuthenticated = this.authorizationService.isAuthenticated;
        if (!isAuthenticated) {
            this.router.navigate(["forms", "template"]);
        }

        return isAuthenticated;
    }

    public  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route);
    }
}