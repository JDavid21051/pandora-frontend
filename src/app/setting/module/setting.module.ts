import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {SettingRoutingModule} from './setting-routing.module';
import {
  CategoryListComponent,
  CollectionListComponent,
  PromoFormComponent,
  PromoConfigComponent,
  PromoListComponent,
  CollectionFormComponent
} from '../ui';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {AuthService} from '../../service/auth/auth.service';
import {AccountsService} from '../../service/accounts/accounts.service';
import {MatCardModule} from '@angular/material/card';
import {CategoryFormComponent} from '../ui';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {UserListComponent, UserFormComponent} from '../ui';
import {MatDialogModule} from '@angular/material/dialog';

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
    MatDialogModule
  ],
  providers: [AuthService, AccountsService]
})
export class SettingModule {
}
