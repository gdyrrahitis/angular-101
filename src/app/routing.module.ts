import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Router }   from './routes';

@NgModule({
    imports: [Router],
    exports: [RouterModule]
})
export class RoutingModule { }
