import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
// ratting
import {NgxStarRatingModule} from "ngx-star-rating";
// component
import {UlCardComponent} from "../../component";

@NgModule({
  declarations: [UlCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    NgxStarRatingModule,
  ],
  exports: [UlCardComponent]
})
export class SharedModule {
}
