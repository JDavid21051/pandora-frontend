import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  private collectionPath = 'accounts/';
  private urlBase = 'https://reqres.in/api/';


  constructor(private readonly http: HttpClient) {
  }

  list(): Observable<any> {
    return this.http.get(this.urlBase + this.collectionPath);
  }
}
