// angular
import {DragDropModule} from '@angular/cdk/drag-drop';
import {LayoutModule} from '@angular/cdk/layout';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth,provideAuth} from '@angular/fire/auth';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
// material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {QuicklinkModule} from 'ngx-quicklink';
// spinner
import {NgxSpinnerModule, NgxSpinnerService} from 'ngx-spinner';
// rating
import {NgxStarRatingModule} from 'ngx-star-rating';

import {environment} from '../environments/environment';

// component
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoadStrategyService} from './auth';
import {UlBaseComponent,UlConfirmComponent} from './shared/component';
import {UlSnackComponent} from './shared/component/ul-snack/ul-snack.component';
import {OutlineDirective} from './shared/directive';
import {ShowTagPipe} from './shared/pipe';
// shared
import {BdSidenavService} from './shared/service';

@NgModule({
  declarations: [
    AppComponent,
    UlConfirmComponent,
    OutlineDirective,
    UlBaseComponent,
    UlSnackComponent
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
    NgxSpinnerModule.forRoot({type: 'ball-spin-clockwise'}),
    MatTableModule,
    MatPaginatorModule,
    QuicklinkModule,
    MatSortModule,
    DragDropModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [BdSidenavService, NgxSpinnerService, ShowTagPipe, OutlineDirective, LoadStrategyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
