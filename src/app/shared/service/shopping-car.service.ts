/*
 * Developed by CQ Inversiones SAS. Copyright ©. 2023 - 2024. All rights reserved.
 * Desarrollado por CQ Inversiones SAS. Copyright ©. 2023 - 2024. Todos los derechos reservados.
 */

/*
 * Project:      pandora-frontend
 * Developed by: Juan David Pelaez Cumbe
 * Date:         19/04/23 - 3:34 PM
 * Module name:  shopping-car.service.ts
 * File name:    shopping-car.service.ts
 * IDE:          WebStorm
 */
import {Injectable} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BehaviorSubject, Observable, of} from 'rxjs';

import {ProductInterface} from '../interface';
import {ObsResponseInterface} from '../interface';

export interface responseInterface<T> {
  status: number,
  body: T | null,
  success: boolean,
  error: string
}

@Injectable({
  providedIn: 'root'
})
export class ShoppingCarService {
  private productList: ProductInterface[] = [];
  // public shoppingCar$$: BehaviorSubject<ObsResponseInterface<ProductInterface[]>>;
  public onListChange: BehaviorSubject<ProductInterface[]>;

  constructor(public active: ActivatedRoute) {
    this.onListChange = new BehaviorSubject<ProductInterface[]>([]);
  }

  public addProduct(newProduct: ProductInterface): Observable<ObsResponseInterface<ProductInterface[]>> {
    let response!: ObsResponseInterface<ProductInterface[]>;
    try {
      this.productList.push(newProduct);
      response = {
        body: this.productList,
        status: 1,
        error: '',
        success: true,
      };
      this.productList = [...this.productList];
      this.onListChange.next(this.productList);
    } catch (e) {
      response = {
        body: null,
        status: 0,
        error: 'Ha ocurrido un not-found',
        success: false,
      };
      this.onListChange.error(e);
    }
    return of(response);
  }
}
