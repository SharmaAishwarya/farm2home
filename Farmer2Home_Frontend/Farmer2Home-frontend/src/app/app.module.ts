import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { NotificationComponent } from './notification/notification.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { WebSocketService } from './web-socket.service';
import { HttpModule } from '@angular/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFarmerComponent } from './product-farmer/product-farmer.component';
import { DetailsUploadComponent} from './upload/details-upload/details-upload.component';
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { ListUploadComponent } from './upload/list-upload/list-upload.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { Pipe, PipeTransform } from '@angular/core';


import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatRadioModule,
  MatDividerModule,
  MatExpansionModule,
  MatTooltipModule,
  MatTableModule,
  MatTabsModule,
  MatListModule,


} from '@angular/material';
import { AppRoutingModule } from './/app-routing.module';
import { UpdateProductComponent } from './update-product/update-product.component';
import { FilterPipe } from './model/FilterPipe';


// import { NgxImgZoomModule } from 'ngx-img-zoom';
const notifierDefaultOptions: NotifierOptions = {
  
};
@NgModule({
  declarations: [
    FilterPipe,
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    ProductComponent,
    CartComponent,
    FeedbackComponent,
    HomePageComponent,
    NotificationComponent,
    ProductDetailComponent,
    ProductFarmerComponent,
    DetailsUploadComponent,
    FormUploadComponent,
    ListUploadComponent,
    UpdateProductComponent
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    MatDividerModule,
    MatExpansionModule,
    MatTooltipModule,
    AppRoutingModule,
    MatTableModule,
    MatTabsModule,
    // NgxImgZoomModule,
    MatDividerModule,
    MatListModule,
    NotifierModule.withConfig( {
      position: {
        horizontal: {
          position: 'middle',
          distance: 50
        },
        vertical: {
          position: 'top',
          distance: 12,
          gap: 10
        }
      },
      theme: 'material',
      behaviour: {
        autoHide: 1000,
        onClick: false,
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 4
      },
      animations: {
        enabled: true,
        show: {
          preset: 'slide',
          speed: 300,
          easing: 'ease'
        },
        hide: {
          preset: 'fade',
          speed: 300,
          easing: 'ease',
          offset: 50
        },
        shift: {
          speed: 300,
          easing: 'ease'
        },
        overlap: 150
      }
    } ),
    


  ],
  providers: [WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
