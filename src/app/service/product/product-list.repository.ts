/*
 * Developed by CQ Inversiones SAS. Copyright ©. 2023 - 2024. All rights reserved.
 * Desarrollado por CQ Inversiones SAS. Copyright ©. 2023 - 2024. Todos los derechos reservados.
 */

/*
 * Project:      nali-store
 * Developed by: Juan David Pelaez Cumbe
 * Date:         18/03/23 - 12:00 PM
 * Module name:  i-product-list.product.ts
 * File name:    i-product-list.product.ts
 * IDE:          WebStorm
 */

import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductInterface} from 'src/app/shared/interface';

@Injectable()
export class ProductListRepository {

  constructor(private readonly http: HttpClient) {
  }

  list(): Observable<HttpResponse<ProductInterface[]>> {
    return this.http.get<HttpResponse<ProductInterface[]>>('../../../assets/json/products.json');
  }

}
