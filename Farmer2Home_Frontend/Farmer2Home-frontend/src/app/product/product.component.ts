import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import { Subscribe } from '../model/subscribe';
import { NotifierService, NotifierOptions } from '../../../node_modules/angular-notifier';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  subscribedProducts: Product[]=[];
  products: Product[];
  vegetables: Product[] = [];
  fruits: Product[] = [];
  subscribe_obj: Subscribe = new Subscribe();
  is_subscribed: boolean;
  userid: string = "F003";
  private readonly notifier: NotifierService;
  
  constructor(private productService: ProductService,notifierService: NotifierService ) {
    this.notifier = notifierService;
   }

  ngOnInit() {
    this.getProducts();
    this.getSubscribedProduct();
    
  }

  getProducts()
  {
    this.productService.displayProducts().subscribe( products => {
      this.products = products.response;
      console.log(this.products)
      this.products.forEach(product => {
        if (product.category == "Vegetable") {
          this.vegetables.push(product);
        } else {
          this.fruits.push(product)
        }
      });
    },
      err => {
        console.log(err);
      });
  }

  subscribeProduct(productId: string) {
    this.subscribe_obj.userId = "F003";
    this.subscribe_obj.productId = productId
    this.productService.subscribeProduct(this.subscribe_obj).subscribe(obj => {
    this.subscribe_obj = obj; this.is_subscribed = true;
      console.log(this.subscribe_obj);
      this.notifier.notify( 'success', 'Sunbcribed SuccessFully' );
    });
  }
  unSubscribeProduct(productId: string) {
    this.subscribe_obj.userId = "F003";
    this.subscribe_obj.productId = productId;
    this.productService.unSubscribeProduct(this.subscribe_obj).subscribe(obj => {
    this.subscribe_obj = obj, this.is_subscribed = false,

      console.log(this.subscribe_obj)
    });
  }

  getSubscribedProduct() {

    this.productService.getSubscribedProducts(this.userid).subscribe(products =>
       { this.subscribedProducts = products.response, console.log(this.subscribedProducts) });
   
  }

  isSubscribed(productId){
    
    for(var i=0;i<=this.subscribedProducts.length;i++){
      if(this.subscribedProducts[i].id==productId){
        return true;
      }
    }
    return false;
  }
}
