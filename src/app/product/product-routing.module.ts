import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductFormComponent, ProductListComponent} from './ui';

const routes: Routes = [
  {path: 'list', component: ProductListComponent},
  {path: 'list/:filter', component: ProductListComponent},
  {path: 'list/:filter/:sub', component: ProductListComponent},
  {path: 'create', component: ProductFormComponent},
  {path: '', redirectTo: 'list', pathMatch: 'prefix'},
  {path: '**', redirectTo: 'list', pathMatch: 'prefix'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
