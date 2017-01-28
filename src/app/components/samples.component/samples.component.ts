import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";

@Component({
    selector:"samples-list",
    templateUrl:"modules/Templates/app.sampleslist.html",
    directives: [ROUTER_DIRECTIVES]
})
export class SamplesListComponent {}