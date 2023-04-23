/*
 * Developed by CQ Inversiones SAS. Copyright ©. 2023 - 2024. All rights reserved.
 * Desarrollado por CQ Inversiones SAS. Copyright ©. 2023 - 2024. Todos los derechos reservados.
 */

/*
 * Project:      pandora-frontend
 * Developed by: Juan David Pelaez Cumbe
 * Date:         23/04/23 - 12:01 PM
 * Module name:  shopping-car-routing.module
 * File name:    shopping-car-routing.module.ts
 * IDE:          WebStorm
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundItemsComponent} from './ui/not-found-items/not-found-items.component';
import {ShoppingListComponent} from './ui/shopping-list/shopping-list.component';
import {ShoppingCarComponent} from './ui/shopping-car/shopping-car.component';

const routes: Routes = [
  {
    path: '', component: ShoppingCarComponent, children: [
      {path: 'not-found', component: NotFoundItemsComponent},
      {path: 'list', component: ShoppingListComponent},
      {path: '', redirectTo: 'not-found', pathMatch: 'prefix'},
      {path: '**', redirectTo: 'not-found', pathMatch: 'prefix'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCarRoutingModule {
}
