import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: "app-header",
    templateUrl: "modules/Templates/app.header.html",
    directives: [ROUTER_DIRECTIVES]
})
export class AppHeaderComponent { }