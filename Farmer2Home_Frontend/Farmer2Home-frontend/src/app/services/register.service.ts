import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token',
      'Access-Control-Allow-Origin': '*',
      'Allow': 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
    })
  };

  user_list: string = "http://localhost:3330/farmer2home/user";

  constructor(private http: HttpClient) { }
  /**
   * @method creates the new user and called in register
   * @param user 
   */
  createUser(user: User): Observable<User> {
    console.log("user")
    var response = this.http.post<User>(this.user_list + "/create", JSON.stringify(user), { headers: this.httpOptions.headers });
    console.log('the response is ', response);
    return response;
  }
}
