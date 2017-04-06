import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";

import { FormsTemplateAuthorizationService } from "../services/forms.template.authorization.service";

@Injectable()
export class FormsTemplateAuthorizationPassRouterActivator implements CanActivate {
    constructor(
        private authorizationService: FormsTemplateAuthorizationService,
        private router: Router) { }

    public canActivate(route: ActivatedRouteSnapshot) {
        let isAuthenticated = this.authorizationService.isAuthenticated;
        if (isAuthenticated) {
            this.router.navigate(["forms", "template", "secret", "robo-images"]);
        }

        return true;
    }
}