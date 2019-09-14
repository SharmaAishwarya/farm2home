import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { Router } from '../../../node_modules/@angular/router';
import { NotifierService } from '../../../node_modules/angular-notifier';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  form: FormGroup;
  id: String;
  name: String;
  phonenumber: String;
  email: String;
  password: String;
  address: String;
  repassword: String;
  userResponse: User;
  role: string
  f: CharacterData;
  c: CharacterData
  private readonly notifier: NotifierService;
  constructor(private registerService: RegisterService, private router: Router,notifierService: NotifierService) {
    this.user = new User();
    this.notifier = notifierService;
  }
  /**
   * @method creates new user when registered
   * @param user 
   */
  register(user: User) {
    console.log(this.user);
    if (this.user.password === this.repassword) {
      this.registerService.createUser(user).subscribe(data => {
        this.userResponse = data,
          sessionStorage.setItem("loggedInUserId", this.userResponse.id);
        this.registerService.createUser;
        console.log(this.userResponse);
        this.router.navigate(['/login']);
        this.notifier.notify('success', 'Registered Successfully.Please Login Now');
      });
    } else {
      alert('Password doesn\'t Match');
      console.log("failed");
    }
  }

  setrole() {
    if (this.f) {
      this.user.role = "f";
    }
    else {
      this.user.role = "c"
    }
  }

  ngOnInit() {
  }

}
