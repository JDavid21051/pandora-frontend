import {HttpResponse} from '@angular/common/http';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatButtonToggleChange} from '@angular/material/button-toggle';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {pairwise, startWith} from 'rxjs';
import {ProductListRepository} from 'src/app/service';
import {UlConfirmComponent} from 'src/app/shared/component';
import {FILTER_TYPE_CONST} from 'src/app/shared/const/filter-type.const';
import {ProductInterface} from 'src/app/shared/interface';
import {FilterTypeInterface} from 'src/app/shared/interface/general/filter-type.interface';
import {ShoppingCarService} from 'src/app/shared/service';

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
  filterForm: FormGroup;

  // control
  filteredCategory = false;
  filteredTag = false;
  filteredPromo = false;

  constructor(private readonly service: ProductListRepository,
              private readonly activatedRoute: ActivatedRoute,
              private readonly spinnerService: NgxSpinnerService,
              private readonly builder: FormBuilder,
              private readonly router: Router,
              private readonly shoppingCarService: ShoppingCarService,
              private readonly dialog: MatDialog) {
    this.filterForm = builder.group({
      filterType: [0, [Validators.required]],
      category: [null, [Validators.required]],
      tag: [null, [Validators.required]]
    });
    this.filterForm.controls['filterType'].valueChanges
      .pipe(startWith(-1), pairwise())
      .subscribe({
        next: (response) => {
          console.log(response);
          console.log(response);
        },
        error: (errorResponse) => {
          console.log(errorResponse);
        }
      });
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

  onChangeFilter(filterType: MatButtonToggleChange): void {
    this.filteredCategory = (filterType.value === 1);
    this.filteredTag = (filterType.value === 2);
    this.filteredPromo = (filterType.value === 3);
    const filterKey: FilterTypeInterface = {
      filter: (filterType.value === 1 ? 'category' : (filterType.value === 2 ? 'tag' : (filterType.value === 3 ? 'promo' : 'all')))
    };
    if (filterType.value !== 1 && filterType.value !== 2) {
      this.router.navigate(['product/list'], {queryParams: filterKey}).then();
    }
  }


}
