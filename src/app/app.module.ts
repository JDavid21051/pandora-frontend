import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MainModule} from "./main";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {HttpClientModule} from "@angular/common/http";
import {PanelComponent} from './panel/panel.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {LayoutModule} from '@angular/cdk/layout';
import {FaunoComponent} from './fauno/fauno.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {NgxStarRatingModule} from "ngx-star-rating";
import {BdSidenavService} from "./shared/service";
import {UlConfirmComponent} from './shared/component';
import {MatDialogModule} from "@angular/material/dialog";
import { ShowTagPipe } from './shared/pipe';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    FaunoComponent,
    UlConfirmComponent
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
    MatDialogModule
  ],
  providers: [BdSidenavService, ShowTagPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
