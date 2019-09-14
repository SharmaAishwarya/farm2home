import { Component, OnInit } from '@angular/core';
import { Feedback } from '../model/feedback';
import { FeedbackService } from '../services/feedback.service';
import { User } from '../model/user';
import { LoginService } from '../services/login.service';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbacks: Feedback[];
  displayedColumns: string[] = ['id', 'farmerId', 'feedback', 'userId'];
  dataSource = this.feedbacks;
  title: String;
  feedback: Feedback;
  product: Product;
  productId: string;
  users: User[];
  userid: String;
  fid: String;

  constructor(private feedbackService: FeedbackService,
    private loginService: LoginService, 
    private productService: ProductService) 
    { }

  ngOnInit() {
    this.userid = this.loginService.emailId;
    this.feedback = new Feedback();
  }

  /**
   * @method get farmerId by using productId of productService 
   */
  getIdFromProducts(): void {
     this.productService.getProduct(this.productId).subscribe(
      product => {
        this.product = product.response,
          console.log(this.product)
          this.feedback.farmerId = this.product.farmer_id;
      },
      err => {
        alert("Product id does not exist, please enter valid Product Id");
        console.log(err);
      });
  }
/**
 * @method getting the userId of current loggesd in user
 */

  getUserId(): void {
    this.loginService.isLoggedIn();
    this.userid = this.loginService.emailId;
    console.log(this.userid);
  }

  /**
 * @method get list of all the feedbacks according to userId
 */

 getFeedbacks() {
    this.feedbackService.getfeedbacks(this.userid).subscribe(
      feedback => {
        this.feedbacks = feedback.response,
          console.log(this.feedbacks)
      },
      err => {
        console.log(err);
      });
  }

  /**
 * @method get a feedback through feedback id
 */

 getFeedback() {
    this.feedbackService.getfeedback(this.fid).subscribe(
      feedback => {
        this.feedbacks = feedback.response,
          console.log(this.feedbacks)
      },
      err => {
        console.log(err);
      });
  }

  /**
   * @method creating a feedback with userId, farmerId,productId,feedback and id attributes
   * @param feedback of type Feedback
   */

  createFeedback(feedback: Feedback): void {
    this.getUserId();
    feedback.userId = this.userid;
    console.log(this.product.farmer_id);
    feedback.farmerId = this.product.farmer_id;
    feedback.productId = this.productId;
    console.log(feedback.feedback);
    this.feedbackService.createfeedbacks(feedback).subscribe(
      data => { this.feedback = data, console.log(this.feedback) });
      console.log(feedback);
      alert("Feedback submitted Succesfully");
 }

}
