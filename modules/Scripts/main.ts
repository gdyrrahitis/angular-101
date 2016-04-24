import {bootstrap} from "angular2/platform/browser";
import {AppComponent} from "./Components/app.component";
import {ROUTER_PROVIDERS} from "angular2/router";

bootstrap(AppComponent, [ROUTER_PROVIDERS])
.then(() => {
    console.log("Welcome to Angular 2.0!!!");
    }, 
    (error) => {console.error(error);
})