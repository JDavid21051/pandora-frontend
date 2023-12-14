import {CommonModule, NgOptimizedImage} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';

import {ProductListRepository} from '../service';
import {OutlineDirective} from '../shared/directive';
import {ShowTagPipe} from '../shared/pipe';
import {BdSidenavService} from '../shared/service';

import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {MainComponent} from './main.component';
import {MainRoutingModule} from './main-routing.module';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatTooltipModule,
    MatBadgeModule,
    NgOptimizedImage,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatExpansionModule
  ],
  providers: [
    ProductListRepository,
    BdSidenavService,
    ShowTagPipe,
    OutlineDirective,
    MatSnackBar,
    MatSidenav]
})
export class MainModule {
}
