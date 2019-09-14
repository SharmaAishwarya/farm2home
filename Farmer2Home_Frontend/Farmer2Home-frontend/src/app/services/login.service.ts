import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { ServerResponse } from '../model/ServerResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token',
      'Access-Control-Allow-Origin': '*',
      'Allow': 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
    })
  };

  user_list: string = "http://localhost:3330/farmer2home/user";
  emailId: string;

  constructor(private http: HttpClient) { }

  /**
   * @method gets list of all users from database
   */
  getUsers(): Observable<ServerResponse> {
    console.log("gs")
    return this.http.get<ServerResponse>(this.user_list + "/list/");
  }
  /**
   * @method logsin user after authentication from database
   * @param user 
   */
  userLogin(user: User): Observable<ServerResponse> {
    return this.http.post<ServerResponse>(this.user_list + "/validate", user, { headers: this.httpOptions.headers });

  }

  /**
   * 
   * @param userId 
   */
  setSessionId(userId: string) {
    sessionStorage.setItem("loggedInUseId", userId);
  }

  isLoggedIn(): boolean {
    if (sessionStorage.getItem("loggedInUseId") != null) {
      this.emailId = sessionStorage.getItem("loggedInUseId");
      return true;
    }
    return false;
  }

  /**
   * @method logsout the user, i.e. clears session of it
   */
  logout() {
    sessionStorage.clear();
  }
}
