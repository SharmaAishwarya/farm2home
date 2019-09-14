import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cart } from '../model/cart';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { BASE_URL } from '../model/constant';
import { ServerResponse } from '../model/ServerResponse';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token',
      'Access-Control-Allow-Origin': '*',
      'Allow': 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
    })
  };


  
   cart_url: string = "http://localhost:3330/farmer2home/";
   cart_list : string = BASE_URL+"cart/getCartProducts";
   cart_addToCart : string = BASE_URL+"cart/addToCart";
  

  constructor(private http: HttpClient) { }

  getCart(): Observable<ServerResponse> {
  return this.http.get<ServerResponse>(this.cart_url + 'cart/get/C102');
  }
  getTotalPrice(cartId): Observable<ServerResponse> {
    return this.http.get<ServerResponse>(this.cart_url + 'cart/getTotalPrice/'+cartId);
  }
  
  getCartProduct(cartId ): Observable<ServerResponse> {
    return this.http.get<ServerResponse>(this.cart_url + 'cart/getCartProducts/'+cartId);
  }

   addToCart(productId,quantity,cart:Cart):Observable<ServerResponse>{
    return this.http.post<ServerResponse>(this.cart_url+'cart/addToCart/'+productId+'/'+quantity , JSON.stringify(cart), { headers: this.httpOptions.headers });
  }

  deleteProduct(cartId , productId): Observable<ServerResponse> {
    return this.http.delete<ServerResponse>(this.cart_url + 'cart/delete/'+cartId+'/'+productId);
  }
 
  changeByQuantity(cartId: string , productId :string ,quantity : number): Observable<ServerResponse> {
    return this.http.get<ServerResponse>(this.cart_url + 'cart/deleteByQuantity/'+cartId+'/'+productId+'/' +quantity);

}
getCartProductList(cartId ): Observable<ServerResponse> {
  return this.http.get<ServerResponse>(this.cart_url + 'cart/getCartProductList/'+cartId);
}
}