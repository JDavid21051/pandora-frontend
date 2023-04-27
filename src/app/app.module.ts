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
import {BdSidenavService} from './shared/service';
import {UlConfirmComponent, UlBaseComponent} from './shared/component';
import {ShowTagPipe} from './shared/pipe';
import {OutlineDirective} from './shared/directive';
// component
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {UlSnackComponent} from './shared/component/ul-snack/ul-snack.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {PromoListComponent} from './source/ui/promo/promo-list/promo-list.component';
import {PromoFormComponent} from './source/ui/promo/promo-form/promo-form.component';
import {PromoConfigComponent} from './source/ui/promo/promo-config/promo-config.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {QuicklinkModule} from 'ngx-quicklink';
import {LoadStrategyService} from './auth';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from '../environments/environment';
import {provideAuth, getAuth} from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    UlConfirmComponent,
    OutlineDirective,
    UlBaseComponent,
    UlSnackComponent,
    PromoListComponent,
    PromoFormComponent,
    PromoConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
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
    NgxSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    QuicklinkModule,
    MatSortModule,
    DragDropModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [BdSidenavService, ShowTagPipe, OutlineDirective, LoadStrategyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
