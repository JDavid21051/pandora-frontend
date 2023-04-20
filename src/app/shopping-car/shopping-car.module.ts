import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShoppingCardListComponent} from '../shopping-car';


@NgModule({
  declarations: [
    ShoppingCardListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShoppingCardListComponent
  ],
})
export class ShoppingCarModule {
}
