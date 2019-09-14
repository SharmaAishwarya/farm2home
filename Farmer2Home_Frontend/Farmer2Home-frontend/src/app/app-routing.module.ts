import { NgModule,} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { Feedback } from './model/feedback';
import { Notification } from 'rxjs';
import { NotificationComponent } from './notification/notification.component';
import { ProductFarmerComponent } from './product-farmer/product-farmer.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RegisterComponent } from './register/register.component';

const routes : Routes = [

  {
    path : 'login' , component : LoginComponent
  },
  {
    path : 'homepage' , component : HomePageComponent
  },
  {
    path : 'product' , component : ProductComponent
  },
  {
    path : 'register' , component : RegisterComponent
  },
  {
    path : 'cart' , component : CartComponent
  },
  {
    path : 'login' , component : LoginComponent
  },
  {
    path : '', redirectTo: '/', pathMatch: 'full'
  },
  {
    path : '' , component : ProductComponent
  },
  {
    path : 'productDetail/:id' , component : ProductDetailComponent
  },
  {
    path : 'feedback' , component : FeedbackComponent
  },
  {
    path : 'notification' , component : NotificationComponent
  },
  {
    path : 'farmer' , component : ProductFarmerComponent
  },
  {
    path : 'profile' , component : UserProfileComponent
  }
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
