import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBar} from "@angular/material/snack-bar";
// ratting
import {NgxStarRatingModule} from "ngx-star-rating";
// shared
import {UlCardComponent} from "../../component";
import {ShowTagPipe} from '../../pipe';
import {OutlineDirective} from "../../directive";

@NgModule({
  declarations: [
    UlCardComponent,
    ShowTagPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    NgxStarRatingModule,
  ],
  providers: [ShowTagPipe, OutlineDirective, MatSnackBar],
  exports: [UlCardComponent]
})
export class SharedModule {
}
