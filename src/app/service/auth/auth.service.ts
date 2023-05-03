import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ParamsInterface, UserDataInterface, UserListInterface} from '../../shared/interface';
import {ResultHttpInterface} from '../../shared/interface/result-http.interface';

@Injectable()
export class AuthService {
  private userPath = 'users/';
  private urlBase = 'https://reqres.in/api/';

  constructor(private readonly http: HttpClient) {
  }

  reformatParams(params: ParamsInterface | UserDataInterface | string): HttpParams {
    let queryParams: HttpParams = new HttpParams();
    if (typeof params !== 'string') {
      Object.keys(params).forEach((keyParam: string) => {
        queryParams = queryParams.append(keyParam, params[keyParam as keyof typeof params]);
      });
    } else {
      queryParams = queryParams.append('', params);
    }
    return queryParams;
  }

  create(user: UserDataInterface): Observable<UserListInterface> {
    return this.http.post<UserListInterface>(this.urlBase + this.userPath, user);
  }

  list(param: ParamsInterface): Observable<ResultHttpInterface<UserListInterface[]>> {
    return this.http.get<ResultHttpInterface<UserListInterface[]>>(this.urlBase + this.userPath, {
      params: this.reformatParams(param)
    });
  }


  getById(userId: string): Observable<ResultHttpInterface<UserListInterface>> {
    return this.http.get<ResultHttpInterface<UserListInterface>>(this.urlBase + this.userPath, {
      params: this.reformatParams(userId)
    });
  }

  upload(userId: string, userData: UserDataInterface): Observable<ResultHttpInterface<UserListInterface>> {
    return this.http.put<ResultHttpInterface<UserListInterface>>(this.urlBase + this.userPath + '/' + userId, userData);
  }

  partialUpload(userId: string, userData: UserDataInterface): Observable<ResultHttpInterface<UserListInterface>> {
    return this.http.patch<ResultHttpInterface<UserListInterface>>(this.urlBase + this.userPath + '/' + userId, userData);
  }

  delete(userId: string, userData: UserDataInterface): Observable<ResultHttpInterface<boolean>> {
    return this.http.delete<ResultHttpInterface<boolean>>(this.urlBase + this.userPath + '/' + userId, {
      params: this.reformatParams(userData)
    });
  }

}
