import {HttpResponse} from '@angular/common/http';
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductInterface} from 'src/app/shared/interface';
import {ProductListRepository} from "../../../service";
import {ShoppingCarService} from "../../../shared/service";
import {MatDialog} from "@angular/material/dialog";
import {UlConfirmComponent} from "../../../shared/component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Output() shoppingControl: EventEmitter<ProductInterface> = new EventEmitter<ProductInterface>();
  productList: ProductInterface[] = [];

  constructor(private readonly service: ProductListRepository,
              private readonly shoppingCarService: ShoppingCarService,
              private readonly dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(): void {
    this.service.list().subscribe({
      next: (response: HttpResponse<ProductInterface[]>) => {
        if (response.status === 200 && response.body !== null) {
          this.productList = response.body;
          this.productList.map(product => product.price = (Math.floor(100000 + Math.random() * 900000)));
          console.log(this.productList);
          this.formatProductList();
        }
      },
    });
  }

  formatProductList(): void {
    this.productList.forEach((product: ProductInterface, index: number) => {
      index++;
      if (index < 11) {
        product.image_alt = 'https://picsum.photos/id/' + index + '0/280/250';
        product.image_url = 'https://picsum.photos/id/' + index + '0/280/250';
      }
    });
    this.productList.splice(10, 90);
  }

  onClickAdd(product: ProductInterface): void {
    this.shoppingCarService.addProduct(product).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (errorResponse) => {
        console.log(errorResponse);
      },
    })
  }

  openConfirm(product: ProductInterface): any {
    const confirmRef = this.dialog.open(UlConfirmComponent, {
      data: {
        status: 'primary',
        title: 'Agregar al carrito',
        paragraph: 'Esta seguro de agregar este producto al carrito',
      },
    });
    confirmRef.afterClosed().subscribe({
      next: (response: boolean) => {
        if (response) {
          this.onClickAdd(product)
        }
      }
    })
  }

}
