import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
// ratting
import {NgxStarRatingModule} from "ngx-star-rating";
// component
import {UlCardComponent} from "../../component";

import {ShowTagPipe} from 'src/app/shared/pipe/show-tag.pipe';

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
  providers: [ShowTagPipe],
  exports: [UlCardComponent]
})
export class SharedModule {
}
