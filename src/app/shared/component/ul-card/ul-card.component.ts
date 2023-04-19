import {AfterViewInit, Component, Input} from '@angular/core';
import {ProductInterface} from "../../interface";

@Component({
  selector: 'app-ul-card',
  templateUrl: './ul-card.component.html',
  styleUrls: ['./ul-card.component.scss']
})
export class UlCardComponent implements AfterViewInit {
  @Input() product!: ProductInterface;
  @Input() productIndex = -1;
  isLoading = true;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.isLoading = false
  }

}
