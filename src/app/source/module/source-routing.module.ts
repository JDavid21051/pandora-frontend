/*
 * Developed by CQ Inversiones SAS. Copyright ©. 2023 - 2024. All rights reserved.
 * Desarrollado por CQ Inversiones SAS. Copyright ©. 2023 - 2024. Todos los derechos reservados.
 */

/*
 * Project:      pandora-frontend
 * Developed by: Juan David Pelaez Cumbe
 * Date:         23/04/23 - 3:19 PM
 * Module name:  source-routing.module
 * File name:    source-routing.module.ts
 * IDE:          WebStorm
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoryListComponent} from '../ui/category/category-list/category-list.component';

const sourceRoutes : Routes = [
  {path: '', redirectTo: 'category', pathMatch: 'prefix'},
  {path: 'category', component: CategoryListComponent},
  {path: 'promo', component: CategoryListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(sourceRoutes)],
  exports: [RouterModule]
})
export class SourceRoutingModule {
}
