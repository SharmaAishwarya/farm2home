import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../web-socket.service';
import { NotificationService } from '../services/notification.service';
import { LoginService } from '../services/login.service';
import { NotifierService } from '../../../node_modules/angular-notifier';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  public message: Notification;
  public notifications;
  public userId: String;
  public notification = new Set();
  public array;
  private readonly notifier: NotifierService;
  private products: Product[];
   hasMessage:boolean=true;
  constructor(private webSocketService: WebSocketService, private notificationService: NotificationService,
    private loginService: LoginService, notifierService: NotifierService, private productService: ProductService) {
    this.notifier = notifierService;
    
    // Open connection with server socket
    const stompClient = this.webSocketService.connect();
    stompClient.connect({}, frame => {

      // Subscribe to notification topic
      stompClient.subscribe('/topic/notification/' + this.userId, notifications => {

        // Update notifications attribute with the recent messsage sent from the server
        this.notifications = notifications.body;
        this.notifier.notify('success', notifications.body);
      });
    });

  }

  ngOnInit() {
    this.isLoggedIn();
    this.getProducts();
    this.getUserNotifications(this.userId);
   // this.hasNotification() ;
  
  }

  isLoggedIn(): boolean {
    this.userId = this.loginService.emailId;
    console.log(this.userId)
    return this.loginService.isLoggedIn();
  }
  getUserNotifications(userId: String) {
    this.notificationService.getUserNotifications(userId).subscribe(notification => {
      console.log(notification)
      if(notification.response.length>0)
     { this.notification = notification.response, console.log(this.notification);
      this.array = Array.from(this.notification);
    this.hasMessage=true;
    return this.hasMessage
    }
    else{this.hasMessage=false
    return this.hasMessage};

    });
  }

  removeNotification(userId, notificationId, index) {
    this.array.splice(index, 1);
    this.notificationService.removeNotifications(userId, notificationId).subscribe(notification => {
      this.message = notification.response, console.log(this.message);

    });
  }

  hasNotification() {
    if (this.notification != null) {
      this.hasMessage=true
    }
    this.hasMessage=false;
  }


  getProducts() {
    this.productService.displayProducts().subscribe(data => { this.products = data.response });
  }
  getName(id) {


    for (let i = 0; i <= this.products.length; i++) {
      if (this.products[i].id == id) {
        return this.products[i].name;
      }
    }
  }

}
