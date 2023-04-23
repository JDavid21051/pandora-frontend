import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { NotFoundItemsComponent } from './ui/not-found-items/not-found-items.component';
import {ShoppingCarRoutingModule} from './shopping-car-routing.module';
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
