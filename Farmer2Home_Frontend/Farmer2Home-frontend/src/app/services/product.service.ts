import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscribe } from '../model/subscribe';
import { BASE_URL } from '../model/constant';
import { ServerResponse } from '../model/ServerResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  base_url = 'http://localhost:3330/farmer2home/';
  product_list: string = BASE_URL + 'product/list/';
  product_create: string = BASE_URL + 'product/create/';
  product_update: string = BASE_URL + 'product/update/';
  product_get: string = BASE_URL + 'product/get';
  product_getListFarmer: string = BASE_URL + 'product/getList/';
  product_delete: string = BASE_URL + 'product/delete/';
  product_farmer: string = BASE_URL + 'product/getListFarmer/';
  product_name: string = BASE_URL + 'product/getProductsWithName/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token',
      'Access-Control-Allow-Origin': '*',
      'Allow': 'GET, POST, PUT, DELETE',
    })
  };
  constructor(private http: HttpClient) { }

  displayProducts(): Observable<ServerResponse> {

    return this.http.get<ServerResponse>(this.base_url + 'product/list');
  }

  subscribeProduct(subscribe: Subscribe): Observable<Subscribe> {
    const empHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Subscribe>(this.base_url + 'subscribe/subscribe', JSON.stringify(subscribe), { headers: empHeaders });
  }
  unSubscribeProduct(subscribe: Subscribe): Observable<Subscribe> {
    const empHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Subscribe>(this.base_url + 'subscribe/unsubscribe', JSON.stringify(subscribe), { headers: empHeaders });
  }

  getSubscribedProducts(userid): Observable<ServerResponse> {
    return this.http.get<ServerResponse>(this.base_url + 'subscribe/getSubscribedProducts/' + userid);

  }

  createProduct(product: Product): Observable<ServerResponse> {
    return this.http
      .post<ServerResponse>
      (
      this.product_create,
      JSON.stringify(product
      ),
      { headers: this.httpOptions.headers });
  }
  updateProduct(product: Product): Observable<ServerResponse> {
    return this.http
      .post<ServerResponse>(
        this.product_update,
        JSON.stringify(product
        ),
        { headers: this.httpOptions.headers }
      );
  }

  displayListForFarmer(farmer_id: string): Observable<ServerResponse> {
    return this.http.get<ServerResponse>(this.product_getListFarmer + farmer_id);
  }
  displayListForSinglePrice(price: number): Observable<ServerResponse> {
    return this.http.get<ServerResponse>(this.product_list + '/' + price);
  }
  displayListForPriceRange(min_price: number, max_price: number): Observable<ServerResponse> {
    return this.http.get<ServerResponse>(this.product_list + '/' + min_price + '/' + max_price);
  }
  getProduct(id: string): Observable<ServerResponse> {
    return this.http.get<ServerResponse>(this.product_get + '/' + id);
  }
  deleteProduct(id: string): Observable<ServerResponse> {
    return this.http.delete<ServerResponse>(this.product_delete + id);
  }
  deleteProductByQuantity(id: string, quantity: number): Observable<ServerResponse> {
    return this.http.delete<ServerResponse>(this.product_delete + id + '/' + quantity);
  }
  displayFarmersForProduct(name: string): Observable<ServerResponse> {
    return this.http.get<ServerResponse>(this.product_farmer + name);
  }
  getProductsWithName(name: string): Observable<ServerResponse> {
    return this.http.get<ServerResponse>(this.product_name + name);
  }
}
