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
import {
  CategoryListComponent,
  CollectionListComponent,
  CollectionFormComponent,
  PromoFormComponent,
  PromoConfigComponent,
  UserListComponent,
  UserFormComponent,
  PromoListComponent
} from '../ui';

const settingRoutes: Routes = [
  {path: '', redirectTo: 'user', pathMatch: 'prefix'},
  {
    path: 'user', children: [
      {path: '', redirectTo: 'list', pathMatch: 'prefix'},
      {path: 'list', component: UserListComponent},
      {path: 'create', component: UserFormComponent},
      {path: 'create/:userId', component: UserFormComponent},
    ]
  },
  {
    path: 'collection', children: [
      {path: 'list', component: CollectionListComponent},
      {path: 'create', component: CollectionFormComponent},
    ]
  },
  {path: 'category', component: CategoryListComponent},
  {
    path: 'promo', children: [
      {path: '', component: PromoListComponent},
      {path: 'create', component: PromoFormComponent},
      {path: 'setting', component: PromoConfigComponent},
    ]
  },
  {path: '**', redirectTo: 'user', pathMatch: 'prefix'},
];

@NgModule({
  imports: [RouterModule.forChild(settingRoutes)],
  exports: [RouterModule]
})
export class SettingRoutingModule {
}
