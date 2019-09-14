import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../model/user';
import { ServerResponse } from '../model/ServerResponse';
import { UserProfileService } from '../services/user-profile.service';
import { Router } from '../../../node_modules/@angular/router';
import { NotifierService } from '../../../node_modules/angular-notifier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[];
  user: User;
  form;
  phonenumber: String;
  email: String;
  password: String;
  serverResponse: ServerResponse;
  showPassword: Boolean = false;

  private readonly notifier: NotifierService;

  constructor(private loginService: LoginService, private userProfileService: UserProfileService, private router: Router, notifierService: NotifierService) {
    this.notifier = notifierService;
  }
  ngOnInit() {
    this.getUsers();
    this.user = new User();
  }
  /**
   * @method gets user from loginService
   */
  getUsers() {
    this.loginService.getUsers().subscribe(users => { this.users = users.response; },
      err => {
        console.log(err);
      });
  }

  /**
   * @method shows or hides the password user has entered
   */
  showhidePassword() {
    this.showPassword = !this.showPassword;
  }

  /**
   * @method logsin the authenticated user after validation from loginService
   */
  login(): void {

    this.loginService.userLogin(this.user).subscribe(data => {
      this.serverResponse = data;
      // console.log(this.serverResponse.response)
      if (this.serverResponse.statusCode == '200') {
        sessionStorage.setItem("loggedInUseId", this.serverResponse.response.id);
        // console.log(this.serverResponse.response)
        this.router.navigate(['']);
        this.notifier.notify('success', 'Welcome');
      } else if (this.serverResponse.statusCode == '404') {
        // console.log(this.serverResponse.response)
        alert('invalid credentials, user ' + this.serverResponse.response.id + ' unable to login');
      } else if (this.serverResponse.statusCode == '406') {
        // console.log(this.serverResponse.response)
        alert('User is deleted');
      }
    },
      err => {
        console.log(err);
        console.log("Invalid");
        alert('Invalid');
      })
  }
}
