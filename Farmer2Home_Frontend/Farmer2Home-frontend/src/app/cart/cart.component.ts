import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../model/cart';
import { Product } from '../model/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { ProductService } from '../services/product.service';
import { CartProduct } from '../model/cartProduct';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  options: FormGroup;



  cartDetail: Cart;
  totalPrice: string;
  products: CartProduct[];
  cartId: string;
  productId: string;
  productQuantity: number;
  product: Product;
  cartProducts:Product[];
  cart=new Cart();


  constructor(private cartService: CartService, private loginService: LoginService, private productService: ProductService) {
  }


  ngOnInit() {
    this.cartId = this.loginService.emailId;
    this.getCartProduct();
    this.getCartProductList();
    this.getTotalPrice();

  }

  getCartProduct() {
    this.cartService.getCartProduct(this.cartId).subscribe(Cart => {
      this.products = Cart.response
      console.log(this.products)
    });
  }
  getTotalPrice() {
    this.cartService.getTotalPrice(this.cartId).subscribe(Cart => { this.totalPrice = Cart.statusMessage });
  }
  deleteProduct(productId): void {
    this.cartService.deleteProduct(this.cartId, productId).subscribe(data => {
      this.cartDetail = data.response;
      this.cartProducts.splice(this.cartProducts.indexOf((productId), 1));
      this.products.splice(this.products.indexOf((productId), 1));
    });
  }
  
  getProduct(productId):Product {
    this.productService.getProduct(productId).subscribe(data => {
      this.product = data.response;
      
    });
    return this.product
  }

  getCartProductList() {
    this.cartService.getCartProductList(this.cartId).subscribe(Cart => {
      this.cartProducts = Cart.response
      console.log(this.cartProducts)
    });
  }

 getQuantity(productId){
   for(let product of this.products)
   {
    if(product.productId==productId)
    {
      
      return product.quantity;
    }
   }
 }
getPrice(productId){
  for(let product of this.products)
  {
    
   if(product.productId==productId)
   {
    for(let cp of this.cartProducts){
      if(cp.id==productId)
     return product.quantity*cp.price;
    }
     
   }
  }
}


changeQuantity(productId,quantity){
  
  this.cartService.changeByQuantity(this.cartId,productId,quantity).subscribe(data=>{this.cart=data.response;console.log(data)})
  window.location.reload();

}


}


