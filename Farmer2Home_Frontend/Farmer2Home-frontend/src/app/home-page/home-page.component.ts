import { Component, OnInit, Pipe } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { LoginService } from '../services/login.service';
import { NotifierService } from '../../../node_modules/angular-notifier';
import { CartService } from '../services/cart.service';
import { Product } from '../model/product';
import { User } from '../model/user';
import { UserProfileService } from '../services/user-profile.service';
import { ProductnameService } from '../productname.service';
import { ProductService } from '../services/product.service';
import { FilterPipe } from '../model/FilterPipe'
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  public notification = new Set();
  public newSet = new Set();
  userId: string;
  notificationCount = 0;
  cartCount: number = 0;
  products: Product[];
  user: User;
  term: string='';
  productList: Product[];
  private readonly notifier: NotifierService;
  constructor(private notificationService: NotificationService, private loginService: LoginService, notifierService: NotifierService
    , private cartService: CartService, private userService: UserProfileService, private productService: ProductService) {

    this.notifier = notifierService;
  }

  ngOnInit() {

    this.userId = this.loginService.emailId;
    this.userService.getUser(this.userId).subscribe(data => this.user = data.response)
    this.getProductList();
    this.isLoggedIn();
    this.getUserNotifications(this.userId);
    this.getcartcount();
   

  }

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }
  isLoggedInAsFarmer(): boolean {

    if (this.loginService.isLoggedIn() && this.user.role == "f")
      return true;

    return false;
  }
  isLoggedInAsCustomer(): boolean {
    if (this.loginService.isLoggedIn() && this.user.role == "c")
      return true;

    return false;
  }

  getUserNotifications(userID: string) {
       this.notificationService.getUserNotifications(userID).subscribe(notification => {
      this.notification = notification.response;
      console.log(this.notification);
      this.notificationCount = Object.keys(this.notification).length;
    });

  }

  getcartcount() {
    this.cartService.getCartProductList(this.userId).subscribe(data => {
      this.products = data.response;
      console.log(this.products);
      this.cartCount = this.products.length
    })
  }

  logout() {
    this.loginService.logout();
    this.notifier.notify('success', 'SignOut Successfull');
  }

  getProductList() {
    this.productService.displayProducts().subscribe(data => {
      this.productList = data.response; console.log(this.productList)
    });
  }



}
