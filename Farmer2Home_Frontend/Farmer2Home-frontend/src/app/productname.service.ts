import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '../../node_modules/@angular/common/http';
import { ProductName} from './model/productName';
import { ServerResponse } from 'src/app/model/ServerResponse';
import { BASE_URL } from './model/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductnameService {
  
  product_create: string =BASE_URL+'/productName/create/';
  product_list: string=BASE_URL+'/productName/list/';
  VEGETABLES : string[];
  FRUITS     : string[];
  products:ProductName[];

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token',
      'Access-Control-Allow-Origin': '*',
      'Allow': 'GET, POST, PUT, DELETE',
    })
  };
  
  createProduct(product: ProductName): Observable<ServerResponse> {
    return this.http
      .post<ServerResponse>
      (
      this.product_create,
      JSON.stringify(product
      ),
      { headers: this.httpOptions.headers });
  }

  list():Observable<ServerResponse>{
    return this.http.get<ServerResponse>(this.product_list);
  }

 
}
