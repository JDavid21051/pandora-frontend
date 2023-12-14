
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {NgModule} from '@angular/core';

import {ShoppingCarRoutingModule} from './shopping-car-routing.module';
import { NotFoundItemsComponent } from './ui/not-found-items/not-found-items.component';
import { ShoppingCarComponent } from './ui/shopping-car/shopping-car.component';
import { ShoppingListComponent } from './ui/shopping-list/shopping-list.component';


@NgModule({
  declarations: [
    NotFoundItemsComponent,
    ShoppingCarComponent,
    ShoppingListComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    ShoppingCarRoutingModule
  ]
})
export class ShoppingCarModule {
}
