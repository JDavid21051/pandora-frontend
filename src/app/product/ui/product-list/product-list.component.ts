import {HttpResponse} from '@angular/common/http';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductInterface} from 'src/app/shared/interface';
import {ProductListRepository} from 'src/app/service';
import {ShoppingCarService} from 'src/app/shared/service';
import {MatDialog} from '@angular/material/dialog';
import {UlConfirmComponent} from 'src/app/shared/component';
import {ActivatedRoute, Params} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {FILTER_TYPE_CONST} from 'src/app/shared/const/filter-type.const';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() filterTag: string[] = [];
  @Input() hasPromo = true;
  @Output() shoppingControl: EventEmitter<ProductInterface> = new EventEmitter<ProductInterface>();
  productList: ProductInterface[] = [];
  noFilterProductList: ProductInterface[] = [];

  constructor(private readonly service: ProductListRepository,
              private readonly activatedRoute: ActivatedRoute,
              private readonly spinnerService: NgxSpinnerService,
              private readonly shoppingCarService: ShoppingCarService,
              private readonly dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.spinnerService.show().then();
    this.getProductList();
  }

  private getParamsData(filter: 'all' | 'category' | 'tag' | 'promo', subFilter: string): void {
    if (filter !== FILTER_TYPE_CONST[0]) {
      if (filter === FILTER_TYPE_CONST[1]) {
        this.productList = this.noFilterProductList.filter(product => product.category === subFilter);
      } else if (filter === FILTER_TYPE_CONST[2]) {
        this.productList = this.noFilterProductList.filter(product => product.tag === subFilter);
      } else {
        this.productList = this.noFilterProductList.filter(product => product.promo_value !== null);
      }
    } else {
      this.productList = this.noFilterProductList;
    }
    this.productList = [...this.productList];
    this.spinnerService.hide().then();
  }

  private getProductList(): void {
    this.service.list().subscribe({
      next: (response: HttpResponse<ProductInterface[]>) => {
        if (response.status === 200 && response.body !== null) {
          this.productList = response.body;
          this.productList.map(product => {
            product.price = Number(String(product.price).split('$')[1]);
          });
          this.noFilterProductList = this.productList;
          this.noFilterProductList = [...this.noFilterProductList];
          this.formatProductList();
          this.activatedRoute.params.subscribe((response: Params) => {
              this.getParamsData(response['filter'], response['sub']);
            }
          );
        }
      },
      error: () => {
        this.spinnerService.hide().then();
      }
    });
  }

  private formatProductList(): void {
    this.productList.forEach((product: ProductInterface, index: number) => {
      if (index !== 0) {
        product.image_alt = 'https://picsum.photos/id/' + index + '0/280/250';
        product.image_url = 'https://picsum.photos/id/' + index + '0/280/250';
      }
    });
  }

  onClickAdd(product: ProductInterface): void {
    this.shoppingCarService.addProduct(product).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (errorResponse) => {
        console.log(errorResponse);
      },
    });
  }

  openConfirm(product: ProductInterface): void {
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
          this.onClickAdd(product);
        }
      }
    });
  }

}
