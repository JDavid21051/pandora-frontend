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
import {ProductInterface} from '../interface';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {ObsResponseInterface} from "../interface/obs-response.interface";

@Injectable()
export class ShoppingCarService {
  private productList: ProductInterface[] = [];
  private shoppingCar$$: BehaviorSubject<ObsResponseInterface<any>>;
  public onListChange: BehaviorSubject<ProductInterface[]>;

  constructor() {
    const initResponse: ObsResponseInterface<any> = {
      status: 0,
      body: null,
      success: false,
      error: ''
    }
    this.shoppingCar$$ = new BehaviorSubject(initResponse);
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
      this.onListChange.next(this.productList);
    } catch (e) {
      response = {
        body: null,
        status: 0,
        error: 'Ha ocurrido un error',
        success: false,
      };
    }
    return of(response);
  }
}
