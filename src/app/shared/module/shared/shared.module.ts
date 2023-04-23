import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBar} from '@angular/material/snack-bar';
// ratting
import {NgxStarRatingModule} from 'ngx-star-rating';
// shared
import {NotFoundComponent, UlCardComponent} from '../../component';
import {ShowTagPipe} from '../../pipe';
import {OutlineDirective} from '../../directive';

@NgModule({
  declarations: [
    UlCardComponent,
    ShowTagPipe,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    NgxStarRatingModule,
  ],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {duration: 10000}
    },
    ShowTagPipe, OutlineDirective, MatSnackBar,
  ],
  exports: [UlCardComponent, NotFoundComponent]
})
export class SharedModule {
}
