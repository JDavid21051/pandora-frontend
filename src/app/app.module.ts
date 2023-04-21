// angular
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
// material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
// spinner
import {NgxSpinnerModule} from 'ngx-spinner';
// rating
import {NgxStarRatingModule} from 'ngx-star-rating';
// shared
import {BdSidenavService, ShoppingCarService} from './shared/service';
import {UlConfirmComponent, ErrorComponent, UlBaseComponent} from './shared/component';
import {ShowTagPipe} from './shared/pipe';
import {OutlineDirective} from './shared/directive';
// modules
import {AuthModule} from './auth';
import {ShoppingCarModule} from './shopping-car';
import {MainModule} from './main';
// component
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UlConfirmComponent,
    OutlineDirective,
    ErrorComponent,
    UlBaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MainModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatListModule,
    NgxStarRatingModule,
    MatDialogModule,
    ShoppingCarModule,
    AuthModule,
    NgxSpinnerModule,
  ],
  providers: [BdSidenavService, ShowTagPipe, OutlineDirective, ShoppingCarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
