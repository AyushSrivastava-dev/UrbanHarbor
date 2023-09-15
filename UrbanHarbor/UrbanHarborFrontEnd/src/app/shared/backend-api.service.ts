import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';
@Injectable({
  providedIn: 'root',
})
export class BackendApiService {
  userName!: string;
  password!: string;
  productsPriceList: any;

  constructor(private http: HttpClient) {}

  searchProductByKeywords(value: string): Observable<any> {
    return this.http.get<any>(
      'http://localhost:8081/product/search?keyword=' + value
    );
  }

  getProduct(productId: string, authToken: any): Observable<any> {
    console.log(authToken);
    authToken = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', authToken);
    return this.http.get<any>(
      'http://localhost:8081/product/productcode?productCode=' + productId,
      { headers }
    );
  }

  getAllProductsList(): Observable<any> {
    return this.http.get<any>('http://localhost:8081/product');
  }

  productServiceAbility(value: string, authToken: any): Observable<any> {
    console.log(authToken);
    authToken = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', authToken);
    return this.http.get<any>(
      'http://localhost:8081/product/pincode?pincode=' + value,
      { headers }
    );
  }
  
  public getUserLoggedIn(user: User): Observable<any> {
    return this.http.post<any>('http://localhost:8081/login', user);
  }

  public registerNewUser(user: User): Observable<any> {
    return this.http.post<any>('http://localhost:8081/register', user);
  }

  authenticate(username: string, password: any) {
    return this.http
      .post<any>('http://localhost:8081/authenticate', { username, password })
      .pipe(
        map((userData) => {
          sessionStorage.setItem('username', username);
          let tokenStr = 'Bearer ' + userData.token;
          sessionStorage.setItem('token', tokenStr);
          return userData;
        })
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
  }

  getPriceList() {
    return this.productsPriceList;
  }

  getAllProductsPriceList(authToken: any): Observable<any> {
    console.log(authToken);
    authToken = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', authToken);
    return this.http.get<any>('http://localhost:8081/productPrices', {
      headers,
    });
  }

  setPriceList(list: any) {
    this.productsPriceList = list;
  }
}
