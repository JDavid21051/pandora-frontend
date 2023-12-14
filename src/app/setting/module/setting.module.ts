import {DragDropModule} from '@angular/cdk/drag-drop';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatOptionModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';

import {AccountsService} from '../../service/accounts/accounts.service';
import {UserService} from '../../service/user/user.service';
import {
  CategoryListComponent,
  CollectionFormComponent,
  CollectionListComponent,
  PromoConfigComponent,
  PromoFormComponent,
  PromoListComponent} from '../ui';
import {CategoryFormComponent} from '../ui';
import {UserFormComponent,UserListComponent} from '../ui';

import {SettingRoutingModule} from './setting-routing.module';

@NgModule({
  declarations: [
    CategoryListComponent,
    CollectionListComponent,
    PromoFormComponent,
    PromoConfigComponent,
    PromoListComponent,
    CollectionFormComponent,
    CategoryFormComponent,
    UserListComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    SettingRoutingModule,
    DragDropModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatRadioModule,
  ],
  providers: [UserService, AccountsService]
})
export class SettingModule {
}
