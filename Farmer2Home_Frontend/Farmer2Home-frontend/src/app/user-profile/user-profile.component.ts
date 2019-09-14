import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserProfileService } from '../services/user-profile.service';
import { ServerResponse } from '../model/ServerResponse';
import { routerNgProbeToken } from '../../../node_modules/@angular/router/src/router_module';
import { LoginService } from '../services/login.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User;
  sessionId: string;
  serverResponse: ServerResponse;
  constructor(private userProfileService: UserProfileService, private loginService: LoginService, private route: Router) { }

  ngOnInit() {
    this.getDetailsOfUser();
  }
  /**
   * @method gets the details of the user who is loggedin from userProfileService
   */
  getDetailsOfUser() {
    this.sessionId = sessionStorage.getItem("loggedInUseId");
    this.userProfileService.getUser(this.sessionId).subscribe(data => { this.user = data.response, console.log(this.user) });

  }
  /**
   * @method deletes the user who is logged in
   */
  deleteUser(): void {
    var userId = sessionStorage.getItem('loggedInUseId');
    this.userProfileService.deleteUser(userId).subscribe(data => {
     
    })
  }
  /**
   * @method updates the details of the user who is loggedin from userProfileService
   */
  updateUser() {
    var userId = sessionStorage.getItem('loggedInUseId');
    this.userProfileService.updateUser(this.user).subscribe(data => {

    })
  }
  /**
   * @method logsout the loggedin user
   */
  logoutUser() {
    var userId = sessionStorage.getItem('loggedInUseId');
    this.loginService.logout();
    this.route.navigate
  }

}
