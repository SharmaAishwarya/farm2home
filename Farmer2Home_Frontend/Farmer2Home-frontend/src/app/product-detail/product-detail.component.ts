import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { User } from '../model/user';
import { FormGroup, FormBuilder, FormControl } from '../../../node_modules/@angular/forms';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { CartService } from '../services/cart.service';
import { Cart } from '../model/cart';
import { LoginService } from '../services/login.service';
import { Subscribe } from '../model/subscribe';
import { NotifierService } from '../../../node_modules/angular-notifier';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product : Product;
  products:Product[];
  farmers : User[] =[];
  farmerForm : FormGroup
  dataSource = this.products;
  displayedColumns: string[] = ['Description','Price','Quantity','Quality','Farmer','Add To Cart','Subscribe'];
  id:string;
  productQuantity:number;
  cart=new Cart();
  subscribe_obj: Subscribe = new Subscribe();
  is_subscribed: boolean;
  private readonly notifier: NotifierService;
  constructor(private loginService:LoginService,private productService :ProductService,private fb: FormBuilder,
    private route:ActivatedRoute,private cartService:CartService,notifierService: NotifierService ) {
    
    this.notifier=notifierService;
      this.getProduct();
   }

  ngOnInit() {
    this.product = new Product();
    this.getProduct();
   }
  
  getProduct():void{
      this.id = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(this.id).subscribe(
      data=>{
        this.product = data.response , console.log(this.product);
        this.getProductsWithName();
      }
    );
    
  }
  getProductsWithName():void{
    this.productService.getProductsWithName(this.product.name).subscribe(
      data=>{
        this.products = data.response , console.log(this.products);
        this.getFarmers();
      }
    );
     this.getFarmers();
  }
  getFarmers():void{
    this.productService.displayFarmersForProduct(this.product.name).subscribe(
      data=>{
        this.farmers = data.response , console.log(this.farmers);
      }
    );
  }

  getFarmerName(id: string): string {
   
    let singleFarmer: User[] = this.farmers.filter(f => f.id == id);
    return singleFarmer[0].name;
  }

  addToCart(productId,quantity){
    if(this.loginService.isLoggedIn()){
      this.cart.cartId=this.loginService.emailId;
    this.cart.status='I';
    console.log(quantity)
    this.cartService.addToCart(productId,quantity,this.cart).subscribe(data=>{this.cart=data.response;console.log(this.cart)})
    this.notifier.notify( 'success', productId+' added to SuccessFully' );
    }
  else{ this.notifier.notify( 'default', 'please login first' );}
    
  }
  subscribeProduct(productId: string) {
    if(this.loginService.isLoggedIn()){
    this.subscribe_obj.userId = "F003";
    this.subscribe_obj.productId = productId
    this.productService.subscribeProduct(this.subscribe_obj).subscribe(obj => {
    this.subscribe_obj = obj; this.is_subscribed = true;
      console.log(this.subscribe_obj);
      this.notifier.notify( 'success', 'Sunbcribed SuccessFully' );
    });
  }
  
  else{this.notifier.notify( 'default', 'please login first' );}
  }
  
}
