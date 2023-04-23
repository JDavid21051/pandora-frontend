import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryListComponent} from '../ui/category/category-list/category-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {SourceRoutingModule} from "./source-routing.module";



@NgModule({
  declarations: [
    CategoryListComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    SourceRoutingModule
  ]
})
export class SourceModule { }
