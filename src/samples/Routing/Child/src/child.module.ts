import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { ChildComponent} from "../index";

import { ROUTES } from "./routes";

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    declarations: [ChildComponent],
    exports: [RouterModule]
})
export class ChildModule { }
