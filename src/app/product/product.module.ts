import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductFormComponent, ProductListComponent} from './ui';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ProductRoutingModule} from './product-routing.module';
import {ProductListRepository} from '../service';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgxStarRatingModule} from 'ngx-star-rating';
import {SharedModule} from '../shared/module';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductFormComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    NgxStarRatingModule,
    SharedModule,
    MatDialogModule
  ],
  exports: [
    ProductListComponent,
    ProductFormComponent,
  ],
  providers: [ProductListRepository]
})
export class ProductModule {
}
