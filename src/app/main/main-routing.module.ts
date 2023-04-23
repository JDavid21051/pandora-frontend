import {NgModule} from '@angular/core';
import {MAIN_ROUTE_CONST} from './main.route';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [RouterModule.forChild(MAIN_ROUTE_CONST)],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule {
}
