import {AfterViewInit, Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductInterface} from "../../interface";

@Component({
  selector: 'ulCard',
  templateUrl: './ul-card.component.html',
  styleUrls: ['./ul-card.component.scss']
})
export class UlCardComponent implements AfterViewInit {
  @Input() product!: ProductInterface;
  @Input() productIndex = -1;
  @Output() eventAdd: EventEmitter<ProductInterface> = new EventEmitter<ProductInterface>();
  isLoading = true;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.isLoading = false
  }

  onClickAdd(): void {
    this.eventAdd.emit(this.product);
  }

}
